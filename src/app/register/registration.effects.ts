import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of, from } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { AuthService } from '../services/auth';
import * as RegistrationActions from './registration.actions';

@Injectable()
export class RegistrationEffects {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RegistrationActions.register),
      mergeMap((action) =>
        from(this.authService.register(action.name, action.lastname, action.email, action.password)).pipe(
          map(() => RegistrationActions.registerSuccess()),
          catchError((error) => of(RegistrationActions.registerFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
