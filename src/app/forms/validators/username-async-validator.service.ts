import { Injectable } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { CheckUsernameService } from '../services/check-username.service';
import { map, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsernameAsyncValidatorService implements AsyncValidator {

  constructor(private checkUsernameService: CheckUsernameService) { }

  validate(control: AbstractControl): Promise<ValidationErrors> | Observable<ValidationErrors> {
    return this.checkUsernameService.checkUsername(control.value).pipe(map(isTrue => {
      if (isTrue) {
        return null;
      } else {
        return { isNotJack: 'Username should be jack only.' };
      }
    }));
  }

  /*
  registerOnValidatorChange?(fn: () => void): void {
    throw new Error("Method not implemented.");
  }*/
}