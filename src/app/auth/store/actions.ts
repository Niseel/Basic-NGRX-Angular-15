import { props } from '@ngrx/store'
import { RegisterRequest } from '../types/registerRequest.interface'
import { createActionGroup } from '@ngrx/store'
import { CurrentUser } from '../../shared/types/CurrentUser.interface'
import { BackendErrors } from '../../shared/types/backendErrors.interface'

export const authActions = createActionGroup({
  source: 'auth',
  events: {
    Register: props<{ request: RegisterRequest }>(),
    'Register Success': props<{ currentUser: CurrentUser }>(),
    'Register Failure': props<{ errors: BackendErrors }>(),
  }
})

// export const register = createAction(
//   '[Auth] Register',
//   props<{ request: RegisterRequest }>(),
// )
//
// export const registerSuccess = createAction(
//   '[Auth] Register Success',
//   props<{ request: RegisterRequest }>(),
// )
//
// export const registerFailure = createAction(
//   '[Auth] Register Failure',
//   props<{ request: RegisterRequest }>(),
// )
