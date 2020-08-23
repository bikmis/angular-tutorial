import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '../validators/forbidden-name-validator';
import { changePasswordValidator } from '../validators/change-password-validator';
import { UsernamePasswordAsyncValidatorService } from '../validators/username-password-async-validator.service';
import { usernamePasswordValidator } from '../validators/username-password-validator';
import { UsernameAsyncValidatorService } from '../validators/username-async-validator.service';



@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  constructor(private fb: FormBuilder, private usernamePasswordAsyncValidatorService: UsernamePasswordAsyncValidatorService, private usernameAsyncValidatorService: UsernameAsyncValidatorService) { }

  favoriteColorControl: FormControl = new FormControl('blue');

  get studentFirstNameGetter() {
    return this.studentForm.get('firstName');
  }

  get studentStreetGetter() {
    return this.studentForm.get('address.street');
  }

  get teacherLastNameGetter() {
    return this.teacherForm.get('lastName');
  }

  get teacherFirstNameGetter() {
    return this.teacherForm.get('firstName');
  }

  studentForm: FormGroup = new FormGroup({
    firstName: new FormControl('', { validators: [Validators.required, Validators.minLength(4), forbiddenNameValidator('bob')] }),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl('', { validators: [Validators.required, Validators.pattern(/^\d{1,4}\s\S+(\s\S+)*$/)] }),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });

  teacherForm = this.fb.group({
    firstName: ['Henry', { validators: [Validators.required, Validators.minLength(4)] }],
    lastName: ['', { validators: [Validators.required, Validators.pattern(/^(\S+){2,}(\s(\S+){2,})?$/)] }],
    address: this.fb.group({
      street: ['8743 Circus Rd'],
      city: [''],
      state: [''],
      zip: ['']
    }),
  });

  ngOnInit(): void {
    this.favoriteColorControl.setValue('brown')
    console.log(this.favoriteColorControl.value);

    this.studentForm.setValue({
      firstName: 'Michael',
      lastName: 'Fontana',
      address: {
        street: '',
        city: '',
        state: '',
        zip: ''
      }
    }); // all properties need to be supplied for setValue()

    this.studentForm.patchValue({
      firstName: 'Jack',
      address: {
        city: 'New York'
      }
    }); // Not all properties need to be supplied for patchValue()
    console.log(`First name is ${this.studentForm.value.firstName}`);
  }

  onSubmitStudentForm() {
    console.log(this.studentForm.value);
  }

  onSubmitTeacherForm() {
    console.log(this.teacherForm.value);
  }

  passwordChangeForm = this.fb.group({
    newPassword: ['', { validators: [Validators.required] }],
    retypePassword: ['']
  }, { validators: [changePasswordValidator] })

  get retypePasswordGetter() { return this.passwordChangeForm.get('retypePassword'); }
  get newPasswordGetter() { return this.passwordChangeForm.get('newPassword'); }

  changePassword() {
    console.log("Password changed!");
  }

  get usernameGetter() { return this.loginForm.get('username') };
  get passwordGetter() { return this.loginForm.get('password') };

  loginForm: FormGroup = this.fb.group({
    username: ['', { validators: [Validators.required], asyncValidators: [this.usernameAsyncValidatorService] }],
    password: ['', { validators: [Validators.required] }]
  }, { updateOn: 'change', validators: [usernamePasswordValidator], asyncValidators: [this.usernamePasswordAsyncValidatorService] })

  login() {
    console.log("logged in");
  }
}
