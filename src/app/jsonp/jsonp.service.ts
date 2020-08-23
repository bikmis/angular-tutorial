import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user/user';
import { HttpClientService } from '../services/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class JsonpService {
  private url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClientService: HttpClientService) { }

  getUsersJsonp1(): Observable<User[]> {
    return this.httpClientService.getJsonp(this.url);
  }

  getUsersJsonp2(): Observable<User[]> {
    return this.httpClientService.getJsonp(this.url);
  }
}
