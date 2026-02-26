import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { Home } from './components/home/home';
import { Agregar } from './components/agregar/agregar';
import { Listar } from './components/listar/listar';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, RouterLinkWithHref],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
