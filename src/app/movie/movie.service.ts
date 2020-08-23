import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { MOVIES } from './data';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }
  getMovies(): Movie[] {
    return MOVIES;
  }
}
