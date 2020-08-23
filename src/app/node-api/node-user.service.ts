import { Injectable } from '@angular/core';
import { HttpClientService } from '../services/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class NodeUserService {

  private url = 'http://localhost:3000/api/users';

  constructor(private httpClientService: HttpClientService) { }

  get usersFromNodeApi$() { return this.httpClientService.getProtectedApi(this.url); }

}
