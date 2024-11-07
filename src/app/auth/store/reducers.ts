import { AuthState } from '../types/authState.interface'
import { createFeature, createReducer, on } from '@ngrx/store'
import { authActions } from './actions'

const initialState: AuthState = {
  isSubmitting: false,
  currentUser: null,
  isLoading: false,
  validationErrors: null,
}

const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    initialState,
    on(authActions.register, (state) => ({ // <-- This is func how our action update our state
      ...state,
      isSubmitting: true
    })),
    on(authActions.registerSuccess, (state, action) => ({
      ...state,
      isSubmitting: false,
      currentUser: action.currentUser
    })),
    on(authActions.registerFailure, (state, action) => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    }))
  )
})

export const {
  name: authFeatureKey,
  reducer: authReducer, // Name for slice, so we can register this in main.ts
  selectIsSubmitting,
  selectIsLoading,
  selectCurrentUser,
  selectValidationErrors,
} = authFeature


// NOTE: We cant mutate state, We update this, redux compare this so that state is immutate object
// NOTE: This place only for purpose update value: Pls do not another task in here (Like call API, store localstorage ... )
// These side effect need to in effects.ts
