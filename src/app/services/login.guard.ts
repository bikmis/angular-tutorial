import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { AuthService } from './auth.service';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private authService: AuthService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.getLoginStatus()
      .pipe(
        map(isLoggedIn => {
          if (isLoggedIn) {
            return isLoggedIn;
          } else {
            this.authService.logoutUser();
            return false;
          }
        }),
        catchError(err => {
          console.log(err);
          this.authService.logoutUser();
          return EMPTY;
        })
      );
  }
}

