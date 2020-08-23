import { Injectable, Injector } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { UserService } from '../user/user.service';


@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //Add an authorization token. In production you would get the token value from an auth servcie.
    // const hardCodedToken = 'xxxxx.yyyyy.zzzzz';
    const requestWithAuthorization = request.clone({
      setHeaders: {
      //  'Content-Type': 'text/plain'
        // Authorization: `Bearer ${hardCodedToken}`
      }
    });

    return next.handle(requestWithAuthorization)
      .pipe(
        retry(0),
        catchError((error: HttpErrorResponse) => {
          console.log(`http error from interceptor: ${request.url}`);
          return throwError(error);
        })
      );
  }
}
