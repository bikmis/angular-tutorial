import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './hero';
import { environment } from 'src/environments/environment';
import { InMemoryDataService } from '../in-memory-data-service/in-memory-data.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, OnDestroy {
  heroes: Hero[] = null;
  subscriptions: Subscription[] = [];

  constructor(private heroService: HeroService, private inMemoryDataService: InMemoryDataService) { }

  ngOnInit(): void {
    this.getHeroes();
    console.log(this.genId());
    let subscription = this.searchHero('Dr').subscribe((heroes: Hero[]) => heroes.forEach(h => console.log(h.name)));
    this.subscriptions.push(subscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }

  getHeroes(): void {
    let subscription = this.heroService.getHeroes().subscribe((heroes: Hero[]) => {
      this.heroes = heroes;
    })
    this.subscriptions.push(subscription);
  };

  genId(): number {
    let id: number = null;

    let subscription = this.heroService.getHeroes().subscribe((heroes: Hero[]) => {
      id = this.inMemoryDataService.genId(heroes);
    });
    this.subscriptions.push(subscription);
    return id;
  }

  searchHero(searchString: string): Observable<Hero[]> {
    return this.heroService.searchHero(searchString);
  }

}
