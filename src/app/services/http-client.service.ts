import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  getProtectedApi(url: string): Observable<HttpResponse<any>> {
    let token$ = this.authService.supplyToken();
    return token$.pipe(
      mergeMap(token => {
        return this.httpClient.get<any>(url, { headers: { 'Authorization': token } });
      }),
      catchError(this.handleError)
    );
  }

  get(url: string): Observable<HttpResponse<any>> {
    return this.httpClient.get<any>(url, {
      headers: { 'Content-Type': 'text/plain' },
      observe: 'response',  // Response will be full HttpResponse with headers and body
      responseType: "json",
    }).pipe(
      catchError(this.handleError)
    );
  }

  getJsonp(url: string): Observable<any> {
    return this.httpClient.jsonp<any>(url, 'callback')
      .pipe(
        catchError(this.handleError)
      );
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      error['error_message'] = 'Client side or network error';
    } 
    return throwError(error);
  }
}
