import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-js-location',
  templateUrl: './js-location.component.html',
  styleUrls: ['./js-location.component.scss']
})
export class JsLocationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   
  }

  changeColor() {
    var myId = document.getElementById("myId");
      if (myId.style.color === "red") {
        myId.setAttribute("style", "color:black");
      } else {
        myId.setAttribute("style", "color:red");
      };
  }

}
