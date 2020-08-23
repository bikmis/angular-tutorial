import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { CheckPasswordInDatabaseService } from '../services/check-password-in-database.service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsernamePasswordAsyncValidatorService implements AsyncValidator {

  constructor(private checkPasswordInDatabaseService: CheckPasswordInDatabaseService) { }

  validate(control: AbstractControl): Promise<ValidationErrors> | Observable<ValidationErrors> {
    const username = control.get('username');
    const password = control.get('password');

    return this.checkPasswordInDatabaseService.checkPasswordInDb(username?.value, password?.value)
      .pipe(map(isAuth => {
        if (isAuth) {
          return null
        } else {
          return { authenticationError: 'Login Failed' }
        }
      }),
        catchError(() => of(null))
      );
  }

  /*
  registerOnValidatorChange?(fn: () => void): void {
    throw new Error("Method not implemented.");
  }
  */

}
