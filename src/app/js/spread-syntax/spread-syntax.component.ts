import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spread-syntax',
  templateUrl: './spread-syntax.component.html',
  styleUrls: ['./spread-syntax.component.scss']
})
export class SpreadSyntaxComponent implements OnInit {
  numbers = [1, 2, 3];

  constructor() { }

  ngOnInit(): void {
    this.myFunction();
  }

  sumNumbers1(...nums) {
    return nums[0] + nums[1] + nums[2];
  }

  sumNumbers2(x, y, z) {
    return x + y + z;
  }

  myFunction() {
    const num = [4, 2, 5];
    console.log(4, 2, 5);  // 4 2 5
    console.log(num);   // [4, 2, 5]
    console.log(num.map(x => x)); // [4, 2, 5]
    console.log(num.map(x => x + 1));  // [5, 3, 6]
    console.log(...num);  // 4 2 5
    console.log(...num.map(x => x));  // 4 2 5
    console.log(...num.map(x => x + 3)); // 7 5 8

    for (let c = 0; c < num.length; c++) {
      console.log(num[c]);
    }

    console.log(this.sumNumbers1(...num)); // 11
    // console.log(this.sumNumbers2(...num));  it does not work in angular, but works in JavaScript

    //... can be used anywhere in an array literal
    const parts = ['shoulders', 'knees'];
    const lyrics = ['head', ...parts, 'and', 'toes']
    console.log(lyrics); // ["head", "shoulders", "knees", "and", "toes"]

    //... can spread an object literal
    const obj1 = { foo: 'bar', x: 43 };
    console.log(obj1); // {foo: "bar", x: 43}
    console.log({...obj1}); //{foo: "bar", x: 43}
    const obj2 = { foo: 'baz', y: 12 };
    console.log(obj2); // {foo: "baz", y: 12}
    const clonedObj = { ...obj1, ...obj2 }; 
    console.log(clonedObj); // {foo: "baz", x: 43, y: 12}
  }

}
