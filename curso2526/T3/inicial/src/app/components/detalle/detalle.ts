import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TareaJSON } from '../../model/tarea';
import { TareasService } from '../../services/tareas-service';

@Component({
  selector: 'app-detalle',
  imports: [],
  templateUrl: './detalle.html',
  styleUrl: './detalle.css',
})
export class Detalle {
  tipo?: string;
  tareas: TareaJSON[] = [];
  constructor(
    private gestorRutas: ActivatedRoute,
    private tareasService: TareasService,
  ) {
    // this.tipo = gestorRutas.snapshot.params['tipo'];
    this.gestorRutas.paramMap.subscribe((data) => {
      this.tipo = data.get('tipo') ?? undefined;
      switch (this.tipo) {
        case 'alta':
          this.tareas = this.tareasService.getAllByPriority(2);
          break;
        case 'media':
          this.tareas = this.tareasService.getAllByPriority(1);
          break;
        case 'baja':
          this.tareas = this.tareasService.getAllByPriority(0);
          break;
      }
    });
  }
}
