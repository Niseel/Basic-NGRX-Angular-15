import { AuthState } from '../types/authState.interface'
import { createSelector } from '@ngrx/store'

export const selectFeature = (state: { auth: AuthState }) => state.auth

export const selectIsSubmitting = createSelector(
  selectFeature,
  state => state.isSubmitting,
)


// NOTE: Not Good --> Remove selector.ts
// Because createFeature is already create for us.
