import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpClientService } from './http-client.service';
import { of, Observable, throwError } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string = null;

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
      catchError((error) => { return throwError(error) })
    );
  }

  logoutUser(): void {
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
      })
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
    let refreshToken = localStorage.getItem('refresh_token') ? localStorage.getItem('refresh_token') : '';
    let tokenUrl = 'http://localhost:3000/api/token';

    if (!refreshToken || this.isTokenExpired(refreshToken)) {
      this.logoutUser();
      let error_message: string = null;

      if (!refreshToken) {
        error_message = 'refresh token missing from storage';
      } else if (this.isTokenExpired(refreshToken)) {
        error_message = 'refresh token expired';
      }

      return throwError({ 'error_message': error_message });
    }

    if (!this.token || this.isTokenExpired(this.token)) {
      let token$ = this.httpClient.get<any>(tokenUrl, { headers: { 'Authorization': refreshToken } });

      token$.subscribe(tokenObj => {
        this.saveRefreshToken(tokenObj);
        this.token = tokenObj['token'];
      });

      return token$.pipe(map(tokenObj => { return tokenObj['token'] }));
    } else {
      return of(this.token);
    }
  }

}
