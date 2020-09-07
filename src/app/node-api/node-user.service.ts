import { Injectable } from '@angular/core';
import { HttpClientService } from '../services/http-client.service';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NodeUserService {

  private userList: any | null;

  private url = 'http://localhost:3000/api/users';

  constructor(private httpClientService: HttpClientService) { }

  get usersFromNodeApi$() {
    if (this.userList) {
      return of(this.userList);
    }

    let users = this.httpClientService.getProtectedApi(this.url).pipe(tap(data => this.userList = data));
    return users;
  }

}
