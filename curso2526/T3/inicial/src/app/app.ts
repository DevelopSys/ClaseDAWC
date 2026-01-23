import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  correo?: string;
  pass?: string;
  validacion = false;

  validarDatos(correo: string, pass: string) {
    if (correo == 'admin@gmail.com' && pass == 'admin') {
      this.validacion = true;
    }
  }
}
