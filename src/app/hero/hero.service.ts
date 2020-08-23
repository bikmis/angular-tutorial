import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators'
import { Hero } from './hero';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes';

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  searchHero(searchString: string): Observable<Hero[]> {
    if(!searchString.trim()){
      return of([]);
    }
    let heroes = this.http.get<Hero[]>(this.heroesUrl);

    return heroes.pipe(map((heroes: Hero[]) => {
      let matchedHeroes: Hero[] = [];
      heroes.forEach((hero: Hero) => {
        if (hero.name.trim().toLowerCase().includes(searchString.trim().toLowerCase())) {
          matchedHeroes.push(hero);
        }
      })

      return matchedHeroes;
    }));
  }

}
