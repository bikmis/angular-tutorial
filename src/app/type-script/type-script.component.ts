import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-type-script',
  templateUrl: './type-script.component.html',
  styleUrls: ['./type-script.component.scss']
})
export class TypeScriptComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.demoUnionType(5);
    this.demoUnionType('Hello There');
    this.demoIndexSignature();
  }

  demoUnionType(x: string | number) {
    console.log(x);
  }

  demoIndexSignature(){
    interface StringArray {
      [index: number]: string;
    }
    
    let myArray: StringArray = ['Bob', 'Fred'];
    let myString: string = myArray[0]; // myString is set Bob
    console.log(myString);

    interface myArray1 {
      [prop: string]: any;
    }

    let arr1: myArray1 = {
      firstName: 'Jack',
      address: {
        street: '8459 Cartons Drive',
        state: 'va'
      }
    }

    console.log(arr1.firstName);
    console.log(arr1.address.street);
  }

}
