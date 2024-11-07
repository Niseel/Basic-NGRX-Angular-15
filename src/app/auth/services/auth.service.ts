import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { RegisterRequest } from '../types/registerRequest.interface'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { CurrentUser } from '../../shared/types/CurrentUser.interface'
import { environment } from '../../../environments/environment'
import { AuthResponse } from '../types/authResponse.interface'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  register(data: RegisterRequest): Observable<CurrentUser> {
    const url: string = environment.apiUrl + '/users'
    return this.http
      .post<AuthResponse>(url, data)
      .pipe(map((response: AuthResponse): CurrentUser => response.user))
  }
}
