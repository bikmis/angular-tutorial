import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
import { HttpClientService } from '../services/http-client.service';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClientService: HttpClientService) { }

  get users$() { return this.httpClientService.get(this.url); }
}