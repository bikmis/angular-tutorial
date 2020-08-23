import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-font-awesome',
  templateUrl: './font-awesome.component.html',
  styleUrls: ['./font-awesome.component.scss']
})
export class FontAwesomeComponent implements OnInit {
  animal = null;
  constructor() { }

  ngOnInit(): void {
     this.getAnimal();
  }

  getAnimal() {
    this.animal = null;
    setTimeout(() => {
      this.animal = ['cat', 'tiger', 'leopard', 'elephant', 'mouse'];
    }, 2000);
  }

}
