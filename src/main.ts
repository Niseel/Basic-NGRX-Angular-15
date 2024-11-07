import { bootstrapApplication } from '@angular/platform-browser'
import { AppComponent } from './app/app.component'
import { provideRouter } from '@angular/router'
import { appRoutes } from './app/app.routes'
import { provideState, provideStore } from '@ngrx/store'
import { provideStoreDevtools } from '@ngrx/store-devtools'
import { isDevMode } from '@angular/core'
import { authFeatureKey, authReducer } from './app/auth/store/reducers'
import { provideHttpClient } from '@angular/common/http'
import { provideEffects } from '@ngrx/effects'
import * as authEffect from './app/auth/store/effects' // <-- Must Define astra * like this

bootstrapApplication(AppComponent, {
  providers:
    [
      provideHttpClient(),
      provideRouter(appRoutes),
      provideStore(),
      provideState(authFeatureKey, authReducer), // 2 way, global or single in lazyload route
      provideEffects(authEffect),
      provideStoreDevtools({
        maxAge: 25, // Retains last 25 states
        logOnly: !isDevMode(), // Restrict extension to log-only mode
        autoPause: true, // Pauses recording actions and state changes when the extension window is not open
        trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
        traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
      })
    ]
})
