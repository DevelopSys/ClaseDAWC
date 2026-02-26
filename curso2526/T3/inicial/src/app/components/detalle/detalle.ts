import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  imports: [],
  templateUrl: './detalle.html',
  styleUrl: './detalle.css',
})
export class Detalle {
  tipo?: string;

  constructor(private gestorRutas: ActivatedRoute) {
    // this.tipo = gestorRutas.snapshot.params['tipo'];
    this.gestorRutas.paramMap.subscribe((data) => {
      this.tipo = data.get('tipo') ?? undefined;
    });
  }
}
