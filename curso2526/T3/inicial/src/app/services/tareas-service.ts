import { Injectable } from '@angular/core';
import { TareaJSON } from '../model/tarea';

@Injectable({
  providedIn: 'root',
})
export class TareasService {
  private tareas: TareaJSON[] = [];

  addTarea(tarea: TareaJSON) {
    // agregar una tarea
    // logica de negocio
    this.tareas.push(tarea);
  }

  getAll(): TareaJSON[] {
    return this.tareas;
  }

  getAllByPriority(prioridad: number): TareaJSON[] {
    return this.tareas.filter((item) => item.prioridad == prioridad);
  }
}
