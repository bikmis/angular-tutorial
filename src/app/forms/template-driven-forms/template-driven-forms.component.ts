import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/hero/hero';
import { NgForm } from '@angular/forms';
import { Password } from './password';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.scss']
})
export class TemplateDrivenFormsComponent implements OnInit {
  powers: string[] = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  hero: Hero = { id: 18, name: 'Dr IQ', power: this.powers[0], alterEgo: 'Chuck Overstreet' };
  get diagnostic() { return JSON.stringify(this.hero) };  // Remove this when we're done. This diagnostic getter property returns a JSON representation of the hero model. It helps you see what you are doing during development.

  submitted: boolean = false;

  password: Password = <Password>{};

  constructor() { }

  ngOnInit(): void {
  }

  submitHeroForm(form: NgForm) {
    this.submitted = true;
    console.log(`The hero form is ${JSON.stringify(form.value)}`);
    console.log(`The hero form status is ${form.status}`);
    console.log(`The hero form's valid property is ${form.valid}`);
    console.log(`The hero name is ${form.value.heroName}`);
    console.log(`The hero name is ${this.hero.name}`);
  }

  addNewHero() {
    this.submitted = false;
    this.hero = { id: 19, name: '', alterEgo: '', power: this.powers[0] }
  }

  submitMyForm(form: NgForm) {
    console.log(`The form is ${JSON.stringify(form.value)}`);
    console.log(`The form status is ${form.status}`);
    console.log(`The form's valid property is ${form.valid}`);
    console.log(`name1 is ${form.value.name1}`);
    console.log(`The hero name is ${this.hero.name}`);
  }
}
