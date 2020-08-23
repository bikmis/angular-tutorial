import { ValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';

//This custom validator is in use in the reactive form.
//This custom validator is also called by a directive, which is used by a template-driven form. 

export const changePasswordValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const newPassword = control.get('newPassword');
  const retypePassword = control.get('retypePassword');
  const passwordLength = 8;
  const isBadLength = newPassword?.value?.length < passwordLength;
  const digitRegex = /\d/;
  const hasNoDigit = !digitRegex.test(newPassword?.value);
  const spaceRegex = /\s/;
  const hasSpace = spaceRegex.test(newPassword?.value);
  const underscorOrnonWordCharacter = /[_\W]/;
  const hasNoUnderscoreOrNonWordCharacter = !underscorOrnonWordCharacter.test(newPassword?.value);
  const misMatch = newPassword?.value !== retypePassword?.value;

  const globalNonDigitRegex = /\D/g;
  const countOfDigit = newPassword?.value?.replace(globalNonDigitRegex, '').length;  //replaces non-digit character with nothing and leaves digits only and outputs their length.
  const hasLessThanTwoDigits = newPassword?.value ? countOfDigit < 2 : false;

  const globalNegationUnderscoreOrNonWordCharacterRegex = /[^_\W]/g;
  const countOfUnderscoreAndNonWordCharacter = newPassword?.value?.replace(globalNegationUnderscoreOrNonWordCharacterRegex, '').length;  //replaces characters other than _ and non-word character with nothing and leaves underscores and non-word characters only and outputs their length.
  const hasLessThanTwoUnderscoreOrNonWordCharacters = newPassword?.value ? countOfUnderscoreAndNonWordCharacter < 2 : false;
  if (newPassword?.value) {
    return hasSpace ? { passwordSpace: `Password should not contain space.` } :
      isBadLength ? { passwordLength: `Password cannot be less than ${passwordLength} characters.` } :
        hasNoDigit ? { passwordDigit: `Password should contain at least one digit.` } :
          hasLessThanTwoDigits ? { passwordLessThanTwoDigits: `Password should contain at least two digits.` } :
            hasNoUnderscoreOrNonWordCharacter ? { passwordUnderscoreOrNonWordCharacter: `Password should contain at least one underscore or non-word character.` } :
              hasLessThanTwoUnderscoreOrNonWordCharacters ? { passwordLessThanTwoUnderscoreOrNonWordCharacters: `Password should contain at least two underscore or non-word characters.` } :
                misMatch ? { passwordMismatch: `New and retyped passwords don't match.` } :
                  null;
  } else { return null; }

}