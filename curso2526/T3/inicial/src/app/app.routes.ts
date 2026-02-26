import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Agregar } from './components/agregar/agregar';
import { Listar } from './components/listar/listar';
import { Detalle } from './components/detalle/detalle';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'agregar', component: Agregar },
  { path: 'listar', component: Listar },
  { path: 'detalle/:tipo', component: Detalle },
  { path: '', component: Home },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];
