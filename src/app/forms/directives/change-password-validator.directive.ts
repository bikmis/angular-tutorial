import { Directive } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';
import { changePasswordValidator } from '../validators/change-password-validator';

//This directive is in use as an attribute (appChangePasswordValidator) in the template-driven form.

@Directive({
  selector: '[appChangePasswordValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ChangePasswordValidatorDirective, multi: true }]
})
export class ChangePasswordValidatorDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors {
    return changePasswordValidator(control);
  }

  /*
  registerOnValidatorChange?(fn: () => void): void {
    throw new Error("Method not implemented.");
  }
  */

}
