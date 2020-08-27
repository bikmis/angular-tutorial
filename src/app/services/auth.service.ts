import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpClientService } from './http-client.service';
import { of, Observable, throwError } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  loginUser(username: string, password: string): void {
    let url = 'http://localhost:3000/api/login';
    let body = {
      'username': username,
      'password': password
    };

    this.httpClient.post(url, body).subscribe(token => {
      this.saveToken(token);
      this.router.navigate(['/']);
    },
      error => console.log('Error: ', error)
    );
  }

  logoutUser(): void {
    localStorage.removeItem('token');
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

  private saveToken(token): void {
    localStorage.setItem('token', token['token']);
    localStorage.setItem('refresh_token', token['refresh_token']);
  }

  private isTokenExpired(token: string) {
    //token exp is in seconds. Convert that to milliseconds by multiplying it with 1000. Subtract the exp by 2000 milliseconds before comparing to the current time in milliseconds i.e. to get a new token 2 seconds earlier than the actual token expiration.  
    let payload = JSON.parse(atob(token.split('.')[1]));
    return (+payload.exp * 1000 - 2000) < Date.now();
  }

  supplyToken(): Observable<any> {
    let token = localStorage.getItem('token') ? localStorage.getItem('token') : '';
    let refreshToken = localStorage.getItem('refresh_token') ? localStorage.getItem('refresh_token') : '';
    let tokenUrl = 'http://localhost:3000/api/token';

    if (!token || !refreshToken || this.isTokenExpired(refreshToken)) {
      this.logoutUser();
      let error_message: string = null;

      if (!token) {
        error_message = 'token missing from storage';
      } else if (!refreshToken) {
        error_message = 'refresh token missing from storage';
      } else if (this.isTokenExpired(refreshToken)) {
        error_message = 'refresh token expired';
      }

      return throwError({ 'error_message': error_message });
    }

    if (this.isTokenExpired(token)) {
      let token$ = this.httpClient.get<any>(tokenUrl, { headers: { 'Authorization': refreshToken } });

      token$.subscribe(token => {
        this.saveToken(token);
      });

      return token$.pipe(map(token => { return token['token'] }));
    } else {
      return of(token);
    }
  }

}
