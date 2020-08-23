import { Component, OnInit, NgZone } from '@angular/core';
import { UserService } from '../user/user.service';
import { Observable, of } from 'rxjs';
import { User } from '../user/user';
import { HttpResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.scss']
})
export class AsyncPipeComponent implements OnInit {
  isVisible: boolean = true;

  users$: Observable<HttpResponse<User[]> | {}> = null; 

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
   }

  getUsers() {
      this.isVisible = true;
      this.users$ = this.userService.users$
        .pipe(catchError((error) => { return of({ error: error }); }));
  }

  clearUsers() {
    this.users$ = null;
    this.isVisible = false;
  }
}
