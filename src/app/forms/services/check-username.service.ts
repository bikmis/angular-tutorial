import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckUsernameService {

  constructor() { }

  checkUsername(username: string) {
    return username === 'jack' ? of(true) : of(false);
  }
}
