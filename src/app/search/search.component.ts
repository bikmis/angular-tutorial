import { Component, OnInit } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Hero } from '../hero/hero';
import { HeroService } from '../hero/hero.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchString$: Subject<string> = new Subject<string>();

  // The subject searchString$ gets a value in search() method at a keyup and search ("enter or x click or clear search") event and emits it below.
  // debounceTime(300) --- waits for 300ms to emit a value after keyup/search event i.e. the user has stopped typing
  // distinctUntilChanged --- After having typed in a string, for keyup events after that, searchString$ does not emit the (same) value again, as it has not changed. Without distinctUntilChanged method, searchString$ will emit the same value upon every keyup event.
  // filter(searchString => !!searchString) --- If the value should not be null to be emitted by searchString$
  searchResults$: Observable<Hero[]> = this.searchString$.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    switchMap(searchString => {
      if (searchString.trim()) {
        return this.heroService.searchHero(searchString);
      } else {
        return of([]);
      }
    })
  );

  constructor(private heroService: HeroService) { }

  ngOnInit(): void { }

  search(searchString: string) {
    this.searchString$.next(searchString.trim());
  }

}
