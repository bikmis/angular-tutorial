import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';
import { Subscription } from 'rxjs';
import { HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  isVisible: boolean = true;
  users: HttpResponse<User[]> = null;
  error: string = null;
  subscriptions: Subscription[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.isVisible = true;
    let subscription = this.userService.users$.subscribe((data: HttpResponse<User[]>) => {
       this.users = data;
    },
      (error) => { this.error = error; },
      () => { }
    );

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
