import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-method',
  templateUrl: './map-method.component.html',
  styleUrls: ['./map-method.component.scss']
})
export class MapMethodComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.myMapFunction();
  }

  myMapFunction() {
    let nums = [1, 3, 5];

    let numsReducedBy1 = nums.map((currentVal, ind, arr) => {
      let x = currentVal - 1;
      return { x, ind, arr }
    });
    console.log(numsReducedBy1);  // [{x: 0, ind: 0, arr: Array(3)}, {x: 2, ind: 1, arr: Array(3)}, {x: 4, ind: 2, arr: Array(3)}]
  }

}
