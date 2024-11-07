import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { Store } from '@ngrx/store'
import { authActions } from '../../store/actions'
import { RegisterRequest } from '../../types/registerRequest.interface'
import { AuthState } from '../../types/authState.interface'
import { AsyncPipe, NgIf } from '@angular/common'
import { selectIsSubmitting, selectValidationErrors } from '../../store/reducers'
import { AuthService } from '../../services/auth.service'
import { combineLatest } from 'rxjs'
import {
  BackendErrorMessagesComponent
} from '../../../shared/components/backendErrorMessages/backendErrorMessages.component'

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, AsyncPipe, NgIf, BackendErrorMessagesComponent],
})
export class RegisterComponent {
  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  })

  data$ = combineLatest({
    isSubmitting$: this.store.select(selectIsSubmitting),
    backendErrors: this.store.select(selectValidationErrors)
  })

  constructor(
    private fb: FormBuilder,
    private store: Store<{ auth: AuthState }>,
    private authService: AuthService,
  ) {}

  onSubmit() {
    console.log('form', this.form.getRawValue())
    const request: RegisterRequest = {
      user: this.form.getRawValue(),
    }
    this.store.dispatch(authActions.register({ request }))

    // this.authService.register(request).subscribe({
    //   next: value => console.log(value)
    // })
  }
}
