import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckPasswordInDatabaseService {

  constructor() { }

  checkPasswordInDb(username: string, password: string): Observable<boolean> {
    if (username === 'jack' && password === 'jack') {
      return of(true);
    } else {
      return of(false);
    }
  }
  
}
