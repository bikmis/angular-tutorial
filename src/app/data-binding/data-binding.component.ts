import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  public helloMessage: string = null;
  public chapter: { title: string } = { title: 'Component' };
  public currentPrice: number = 2.3;
  public imageUrl: string = "https://source.unsplash.com/wgq4eit198Q/200x150";
  public homeTitle: string = "You will land on the home page.";
  public months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  public selectedMonth: string = null;
  public selected_month: string = "Select a month";
  public selectedGender: string = null;
  public firstName: string = "Michael";

  constructor() { }


  ngOnInit(): void {
  }

  public sayHello() {
    this.helloMessage = "Hello";
    setTimeout(() => {
      this.helloMessage = null;
    }, 1000);
  }

  public changeMonths(event: any) {
    if (event.target.options.selectedIndex === 0) {
      this.selectedMonth = null;
    } else {
      this.selectedMonth = event.target.value;
    }
  }

  public chooseGender(value: string) {
    this.selectedGender = value;
  }

}
