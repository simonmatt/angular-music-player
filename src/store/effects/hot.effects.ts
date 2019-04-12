import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { HotActionTypes, LoadError } from '../actions';
import { of, forkJoin } from 'rxjs';
import { HotService } from '../../services';


@Injectable()
export class HotEffects {

  @Effect()
  loadHotData$ = this.actions$
    .pipe(
      ofType(HotActionTypes.LoadData),
      mergeMap(() =>
        forkJoin([
          this.hotService.loopList()
            .pipe(catchError(() => of({ 'code': -1, data: {} }))),
          this.hotService.popularList()
            .pipe(catchError(() => of({ 'code': -1, data: {} }))),
        ])
          .pipe(
            map(data => ({ type: '[Hot API] Data Loaded Success', payload: data })),
            catchError((err) => {
              //call the action if there is an error
              return of(new LoadError(err["message"]));
            })
          ))
    )

  constructor(
    private actions$: Actions,
    private hotService: HotService
  ) { }
}