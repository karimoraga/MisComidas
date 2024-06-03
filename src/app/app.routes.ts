import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage)	

  },
  {
    path: 'comidaspermitidas',
    loadComponent: () => import('./comidaspermitidas/comidaspermitidas.page').then( m => m.ComidaspermitidasPage)
  },
  {
    path: 'comidasprohibidas',
    loadComponent: () => import('./comidasprohibidas/comidasprohibidas.page').then( m => m.ComidasprohibidasPage)
  },
  {
    path: 'platossugeridos',
    loadComponent: () => import('./platossugeridos/platossugeridos.page').then( m => m.PlatossugeridosPage)
  },
];