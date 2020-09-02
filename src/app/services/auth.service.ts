import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { of, Observable, throwError, EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string = null;
  redirectUrl: string = null;

  constructor(private httpClient: HttpClient, private router: Router) { }

  loginUser(username: string, password: string): Observable<boolean> {
    let url = 'http://localhost:3000/api/login';
    let body = {
      'username': username,
      'password': password
    };

    return this.httpClient.post(url, body).pipe(
      map(tokenObj => {
        this.saveRefreshToken(tokenObj);
        this.token = tokenObj['token'];
        return true;
      }),
      catchError(this.handleError)
    );
  }

  logoutUser(): void {
    this.redirectUrl = null;
    localStorage.removeItem('refresh_token');
    this.router.navigate(['/login']);
  }

  getLoginStatus(): Observable<boolean> {
    let url = 'http://localhost:3000/api/loginStatus';
    let token$ = this.supplyToken();
    return token$.pipe(
      mergeMap(token => {
        let loginStatus$ = this.httpClient.get(url, { headers: { 'Authorization': token } });
        return loginStatus$.pipe(map(loginStatus => { return loginStatus['isLoggedIn'] }))
      }),
      catchError(this.handleError)
    );
  }

  private saveRefreshToken(tokenObj): void {
    localStorage.setItem('refresh_token', tokenObj['refresh_token']);
  }

  private isTokenExpired(token: string): boolean {
    //token exp is in seconds. Convert that to milliseconds by multiplying it with 1000. Subtract the exp by 2000 milliseconds before comparing to the current time in milliseconds i.e. to get a new token 2 seconds earlier than the actual token expiration.  
    let payload = JSON.parse(atob(token.split('.')[1]));
    return (+payload.exp * 1000 - 2000) < Date.now();
  }

  getEmail(): Observable<string> {
    return this.supplyToken().pipe(map(token => {
      let payload: { email: string } = JSON.parse(atob(token.split('.')[1]));
      return payload.email;
    }));
  }

  supplyToken(): Observable<any> {
    if (!this.token || this.isTokenExpired(this.token)) {
      let refreshToken: string = null;
      this.supplyRefreshToken().subscribe(
        refToken => refreshToken = refToken,
        error => console.error(error)
        );

      if (!refreshToken) {
        return EMPTY;
      }

      let tokenUrl = 'http://localhost:3000/api/token';
      let token$ = this.httpClient.get<any>(tokenUrl, { headers: { 'Authorization': refreshToken } })
        .pipe(catchError(this.handleError));

      token$.subscribe(tokenObj => {
        this.saveRefreshToken(tokenObj);
        this.token = tokenObj['token'];
      },
        error => { console.error(error); }
      );

      return token$.pipe(map(tokenObj => { return tokenObj['token'] }));
    } else {
      return of(this.token);
    }
  }

  supplyRefreshToken(): Observable<any> {
    let refreshToken = localStorage.getItem('refresh_token') ? localStorage.getItem('refresh_token') : '';

    if (!refreshToken || this.isTokenExpired(refreshToken)) {
      let error_message: string = null;

      if (!refreshToken) {
        error_message = 'Refresh token missing from local storage.';
      } else if (this.isTokenExpired(refreshToken)) {
        error_message = 'Refresh token expired.';
      }
      this.router.navigate(['/login']);
      return this.handleError(error_message);
    }
    return of(refreshToken);
  }

  handleError(errorObj: any) {
    if (errorObj instanceof HttpErrorResponse) {
      return throwError(errorObj.error.error);
    } else {
      return throwError(errorObj);
    }
  }

}
