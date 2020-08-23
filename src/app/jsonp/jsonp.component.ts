import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { User } from '../user/user';
import { JsonpService } from './jsonp.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-jsonp',
  templateUrl: './jsonp.component.html',
  styleUrls: ['./jsonp.component.scss']
})
export class JsonpComponent implements OnInit, OnDestroy {
  isVisible: boolean = true;
  users: User[] = null;
  subscriptions: Subscription[] = [];
  constructor(private jsonpService: JsonpService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
      this.isVisible = true;
      let subscription = this.jsonpService.getUsersJsonp1().subscribe((data: User[]) => {
        this.users = data;
      });
      this.subscriptions.push(subscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  clearUsers() {
    this.users = null;
    this.isVisible = false;
  }


}
