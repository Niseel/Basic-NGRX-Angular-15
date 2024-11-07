import { inject } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, of, switchMap } from 'rxjs'
import { map, tap } from 'rxjs/operators'
import { CurrentUser } from '../../shared/types/CurrentUser.interface'
import { AuthService } from '../services/auth.service'
import { authActions } from './actions'
import { BackendErrors } from '../../shared/types/backendErrors.interface'
import { HttpErrorResponse } from '@angular/common/http'
import { PersistanceService } from '../../shared/services/persistance.service'
import { Router } from '@angular/router'

export const registerEffect = createEffect(
  (action$ = inject(Actions), authService = inject(AuthService), persistanceService = inject(PersistanceService)) => {
    return action$.pipe(
      ofType(authActions.register),
      switchMap(({ request }) => {
        return authService.register(request).pipe(
          map((currentUser: CurrentUser) => {
            persistanceService.set('accessToken', currentUser.token)
            return authActions.registerSuccess({ currentUser })
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            console.log('Error: ')
            persistanceService.set('Error', "Can't be blank")
            return of(
              authActions.registerFailure({
                // errors: errorResponse.error.errors
                // Mock
                errors: {
                  email: ["Can't be blank", 'required'],
                },
              }),
            )
          }),
        )
      }),
    )
  },
  { functional: true },
)


export const redirectAfterRegisterEffect = createEffect(
  (action$ = inject(Actions), router = inject(Router)) => {
    return action$.pipe(
      ofType(authActions.registerFailure),
      tap(() => router.navigate(['/']))
    )
  },
  { functional: true, dispatch: false }, // <-- IMPORTANT
)

