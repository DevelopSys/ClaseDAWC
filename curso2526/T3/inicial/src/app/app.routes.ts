import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Agregar } from './components/agregar/agregar';
import { Listar } from './components/listar/listar';
import { Detalle } from './components/detalle/detalle';
import { Users } from './components/users/users';
import { DetalleUser } from './components/detalle-user/detalle-user';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'agregar', component: Agregar },
  { path: 'listar', component: Listar },
  { path: 'usuarios', component: Users },
  { path: 'detalle-user/:id', component: DetalleUser },
  { path: 'detalle/:tipo', component: Detalle },
  { path: '', component: Home },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];
