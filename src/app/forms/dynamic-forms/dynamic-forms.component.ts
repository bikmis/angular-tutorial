import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
  styleUrls: ['./dynamic-forms.component.scss']
})
export class DynamicFormsComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  dynamicForm = this.fb.group(
    {
      aliases: this.fb.array(
        [
          this.fb.control('')
        ]
      )
    }
  )

  get aliases() {
    return this.dynamicForm.get('aliases') as FormArray;
  }

  onSubmitDynamicForm() {
    console.log(this.dynamicForm.value);
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

}
