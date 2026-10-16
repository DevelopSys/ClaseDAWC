import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TareaJSON } from '../../model/tarea';
import { TareasService } from '../../services/tareas-service';

@Component({
  selector: 'app-agregar',
  imports: [FormsModule],
  templateUrl: './agregar.html',
  styleUrl: './agregar.css',
})
export class Agregar {
  titulo?: string | null = null;
  responsable?: string | null = null;
  fecha?: string | null = null;
  prioridad: number = -1;
  // servicio: TareasService = inject()

  constructor(private tareaServicio: TareasService) {}

  guardarDatos() {
    // comprobacion de datos -> estan todos rellenos, la prioridad no es -1
    let tarea: TareaJSON = {
      titulo: this.titulo,
      responsable: this.responsable,
      fecha: this.fecha,
      prioridad: this.prioridad,
      items: [],
    };

    this.tareaServicio.addTarea(tarea);
  }
}
