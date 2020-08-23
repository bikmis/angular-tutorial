import { Directive, Input } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import { forbiddenNameValidator } from '../validators/forbidden-name-validator';

//This directive is in use as an attribute (appForbiddenName="bob") in the template-driven form.

@Directive({
  selector: '[appForbiddenName]',
  providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true}]
})
export class ForbiddenValidatorDirective implements Validator {

  constructor() { }

  @Input('appForbiddenName') forbiddenName: string;

  validate(control: AbstractControl): ValidationErrors {
    return this.forbiddenName ? forbiddenNameValidator(this.forbiddenName)(control) : null;
  }

/*
  registerOnValidatorChange?(fn: () => void): void {
    throw new Error("Method not implemented.");
  }
*/
}
