import { Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthguardService } from './services/authguard.service';
import { LoginguardService } from './services/loginguard.service';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage),
    canActivate: [LoginguardService],
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
    canActivate: [AuthguardService],
  },
  {
    path: 'comidaspermitidas',
    loadComponent: () => import('./comidaspermitidas/comidaspermitidas.page').then( m => m.ComidaspermitidasPage),
    canActivate: [AuthguardService],
  },
  {
    path: 'comidasprohibidas',
    loadComponent: () => import('./comidasprohibidas/comidasprohibidas.page').then( m => m.ComidasprohibidasPage),
    canActivate: [AuthguardService],
  },
  {
    path: 'platossugeridos',
    loadComponent: () => import('./platossugeridos/platossugeridos.page').then( m => m.PlatossugeridosPage),
    canActivate: [AuthguardService],
  },
  {
    path: 'registro',
    loadComponent: () => import('./registro/registro.page').then( m => m.RegistroPage),
  },
  { path: '**', component: NotfoundComponent },
];