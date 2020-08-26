import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Observable, of, from, Subject, BehaviorSubject, ReplaySubject, throwError, interval, merge, fromEvent } from 'rxjs';
import { map, switchMap, filter, finalize, tap, mergeMap, mapTo, scan, concatMap, delay } from 'rxjs/operators';
import { UserService } from '../user/user.service';


@Component({
  selector: 'app-rxjs-library',
  templateUrl: './rxjs-library.component.html',
  styleUrls: ['./rxjs-library.component.scss']
})
export class RxjsLibraryComponent implements OnInit, AfterViewInit {
  ofObservable$: Observable<number> = of(5, 10, 15);
  fromObservable$: Observable<number> = from([20, 30, 40]);
  subjectObservable$: Subject<string> = new Subject<string>();
  subjectObsData: string[] = [];
  behaviorSubjectObservable$: BehaviorSubject<string> = new BehaviorSubject<string>('first');
  behaviorSubjectObsData: string[] = [];
  replaySubjectObservable$: ReplaySubject<string> = new ReplaySubject<string>(3);
  replaySubjectObsData: string[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.ofObservable$.subscribe(x => console.log(`ofObservable$: ${x}`));
    this.fromObservable$.subscribe(x => console.log(`fromObservable$: ${x}`));
    this.switchMapObservable().subscribe((o) => console.log(`switchMapObservable(): ${o}`));

    this.emitSubjectValue();
    this.subjectObservable$.subscribe(x => this.subjectObsData.push(x));

    this.emitBehaviorSubjectValue();
    this.behaviorSubjectObservable$.subscribe(x => this.behaviorSubjectObsData.push(x));

    this.emitReplaySubjectValue();
    this.replaySubjectObservable$.subscribe(x => this.replaySubjectObsData.push(x));

    this.mapOperator();
    this.variousOperator();

    this.throwErrorFromObservable();

    this.intervalObservable();

    this.mergeObservable();
  }

  ngAfterViewInit(): void {
    this.runScan();
  }

  switchMapObservable() {
    return this.ofObservable$.pipe(
      switchMap(ofObs => {
        return this.fromObservable$.pipe(
          map(fromObs => {
            return ofObs + fromObs;
          })
        )
      })
    );
  }

  emitSubjectValue() {
    this.subjectObservable$.next('1');
    this.subjectObservable$.next('2');
    this.subjectObservable$.next('last');
  }

  emitBehaviorSubjectValue() {
    this.behaviorSubjectObservable$.next('1');
    this.behaviorSubjectObservable$.next('2');
    this.behaviorSubjectObservable$.next('last');
  }

  emitReplaySubjectValue() {
    this.replaySubjectObservable$.next('1');
    this.replaySubjectObservable$.next('2');
    this.replaySubjectObservable$.next('last');
  }

  counter1 = 0;
  increaseSubjectValue() {
    this.subjectObservable$.next((++this.counter1).toString());
  }

  counter2 = 0;
  increaseBehaviorSubjectValue() {
    this.behaviorSubjectObservable$.next((++this.counter2).toString());
  }

  counter3 = 0;
  increaseReplaySubjectValue() {
    this.replaySubjectObservable$.next((++this.counter3).toString());
  }

  mapOperator() {
    let numbers = of(1, 2, 3);
    numbers.pipe(map(x => {
      return x * x
    }))
      .subscribe(x => console.log('mapOperator:', x));
  }

  variousOperator() {
    let obs1 = of(1, 2, 3, 4, 5);
    const obs2 = of(10, 20, 30);

    obs1.pipe(switchMap(x => {
      x = 10 * x;
      return of(x);
    })).subscribe(x => console.log('switchMapOperator-1:', x));

    obs1.pipe(switchMap(x1 => {
      return obs2.pipe(map(x2 => { return x1 + x2 }))
    })).subscribe(x => console.log('switch-map-operator-2:', x));

    obs1.pipe(mergeMap((x1) => {
      return obs2.pipe(map(x2 => { return (x1 + x2) }))
    })).subscribe(x => console.log('merge-map-operator:', x));

    obs1.pipe(
      filter(n => {
        return n >= 3
      }),
      map(n => {
        return n ** 2
      })
    ).subscribe(n => console.log('filter-map-operator:', n));

    obs1.pipe(finalize(() => { console.log('3 finalize') }))
      .subscribe(x => console.log('1 next', x),
        (error) => { console.log('error:', error) },
        () => { console.log('2 complete') });
  }

  throwErrorFromObservable() {
    let obs = of(1, 2, 3, 4);

    obs
      .pipe(
        finalize(() => { console.log('throwErrorFromObserveable:', 'finalize run') }),
        mergeMap((x) => {
          if (x === 3) {
            return throwError('Error: the value cannot be 3')
          }
          else {
            return of(x)
          }
        })
      )
      .subscribe(x => console.log('throwErrorFromObserveable:', 'next run', x),
        (error) => { console.log('throwErrorFromObserveable:', error) },
        () => { console.log('throwErrorFromObserveable:', 'complete run') })
  }

  intervalObservable() {
    interval(1000).pipe(
      mergeMap(x => {
        return x === 2
          ? throwError('Twos are bad')
          : of(x)
      }),
    ).subscribe(x => console.log(x), e => console.error(e));
  }

  mergeObservable() {
    const obs1 = of(100, 200, 300);
    const obs2 = of(400, 500, 600);
    merge(obs1, obs2).subscribe(x => console.log(x));

    const obs3 = of({ firstName: 'Jack' });
    const obs4 = of({ lastName: 'Nicholson', age: 60 })
    merge(obs3, obs4).subscribe(x => {
      if (x['firstName']) {
        console.log('mergeObservable:', 'firstName:', x['firstName']);
      } else if (x['lastName'] || x['age']) {
        console.log('mergeObservable:', 'lastName:', x['lastName'], 'age:', x['age']);
      }
    })
  }

  scanValues = [];

  @ViewChild('scanButton') //scanButton is the template variable in a button
  scanButton: ElementRef;

  runScan() {
    this.scanValues = [];
    const clicks$ = fromEvent(this.scanButton.nativeElement, 'click');
    const ones = clicks$.pipe(mapTo(1));
    const seed = 0;
    const count$ = ones.pipe(scan((acc, curr) => { return acc + curr }, seed));
    count$.subscribe((x: any) => {
      this.scanValues.push(x)
    });
  }

  myObs1$ = of(1, 2, 3);
  getMyObs2(x: number) {
    let myArray = [1, 2, 3];
    let myArray2 = [];

    myArray.forEach(e => { 
      myArray2.push(e * x) 
    });

    return from(myArray2);
  };


  testObs() {
    let obs = this.myObs1$
      .pipe(switchMap((x: number) => {
        return this.getMyObs2(x)
      }));

    obs.subscribe(x => console.log(x));
  }


}
