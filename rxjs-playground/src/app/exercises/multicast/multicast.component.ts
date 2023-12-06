import { Component, OnDestroy } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject, Observable, share, takeUntil, shareReplay } from 'rxjs';

import { MeasureValuesService } from './measure-values.service';
import { ExerciseService } from '../exercise.service';
import { HistoryComponent } from '../../shared/history/history.component';
import { NgFor, AsyncPipe, DecimalPipe } from '@angular/common';

@Component({
  templateUrl: './multicast.component.html',
  standalone: true,
  imports: [NgFor, HistoryComponent, AsyncPipe, DecimalPipe]
})
export class MulticastComponent implements OnDestroy {

  listeners: string[] = [];
  logStream$ = new ReplaySubject<string>();
  private destroy$ = new Subject<void>();

  measureValues$: Observable<number>;

  constructor(private mvs: MeasureValuesService, private es: ExerciseService) {
    /**************!!**************/

    this.measureValues$ = this.mvs.getValues().pipe(share({
      connector: () => new ReplaySubject(1)
    }));

    this.measureValues$ = this.mvs.getValues().pipe(shareReplay(1));

    // this.measureValues$ = new Subject();
    // this.measureValues$ = new BehaviorSubject(0);
    // this.measureValues$ = new ReplaySubject(5);

    // this.mvs.getValues().subscribe(this.measureValues$);

    /**************!!**************/
  }

  addListener() {
    this.listeners.push(this.es.generateRandomString());
  }

  addConsoleListener() {
    const randomString = this.es.generateRandomString();
    this.measureValues$.pipe(takeUntil(this.destroy$)).subscribe(e => this.logStream$.next(`${randomString} ${e}`));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

}
