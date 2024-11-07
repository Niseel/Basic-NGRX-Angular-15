import { CurrentUser } from '../../shared/types/CurrentUser.interface'
import { BackendErrors } from '../../shared/types/backendErrors.interface'

export interface AuthState {
  isSubmitting: boolean // purpose: Handel disabled/Enable button when click call API
  currentUser: undefined | null | CurrentUser
  isLoading: boolean
  validationErrors: null | BackendErrors
}
