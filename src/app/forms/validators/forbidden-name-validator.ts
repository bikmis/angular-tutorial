import { AbstractControl, ValidatorFn } from '@angular/forms';

//This custom validator is in use in the reactive form.
//This custom validator is also called by a directive, which is used by a template-driven form. 

//This function is a factory that takes a string to detect a specific forbidden name and returns a validator function, which takes an Angular control object and returns either null if the control value is valid or a validation error object. The validation error object has a property whose name is the validation key and whose value is a dictionary of values that you could insert into an error message.
export function forbiddenNameValidator(forbiddenName: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const regExp = new RegExp(forbiddenName, 'i');
    const patternExists =   regExp.test(control.value);
    return patternExists ? { 'forbiddenName': { actualValue: control.value, forbiddenValue: forbiddenName } } : null;
  };
}

