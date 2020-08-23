import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero/hero';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-hero-edit',
  templateUrl: './hero-edit.component.html',
  styleUrls: ['./hero-edit.component.scss']
})
export class HeroEditComponent implements OnInit {
  constructor() { }
  
  ngOnInit(): void {
  }

  heroEditForm: FormGroup = new FormGroup({
    name: new FormControl('Jack'),
    power: new FormControl('Bulldozer')
  });

  save(){
    console.log("saved");
  }
}
