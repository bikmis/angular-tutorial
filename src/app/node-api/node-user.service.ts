import { Injectable } from '@angular/core';
import { HttpClientService } from '../services/http-client.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NodeUserService {

  private userList;

  private url = 'http://localhost:3000/api/users';

  constructor(private httpClientService: HttpClientService) { }

  get usersFromNodeApi$() {
    if (this.userList) {
      return of(this.userList);
    }

    let users = this.httpClientService.getProtectedApi(this.url)
    users.subscribe((users: any) => this.userList = users);
    return users;
  }

}
