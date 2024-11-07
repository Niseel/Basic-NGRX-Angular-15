import { Route } from '@angular/router'

export const appRoutes: Route[] = [
  // { path: '', redirectTo: '/register', pathMatch: 'full' },
  {
    path: 'register',
    loadChildren: () =>
      import('src/app/auth/auth.routes').then(m => m.registerRoutes),
  },
]
