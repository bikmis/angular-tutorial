import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';


export const usernamePasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  let username = control.get('username');
  let password = control.get('password');

  let isUsernameBadLength: boolean = username?.value?.length > 0 && username?.value?.length < 4;
  let isPasswordBadLength: boolean = password?.value?.length > 0 && password?.value?.length < 4;;

  return isUsernameBadLength ? { usernameLength: 'Username cannot be less than 4 characters in length.' } :
    isPasswordBadLength ? { passwordLength: 'Password cannot be less than 4 characters in length.' } :
      null;
}