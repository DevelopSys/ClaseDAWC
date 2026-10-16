import { Component } from '@angular/core';
import { TareaJSON } from '../../model/tarea';
import { TareasService } from '../../services/tareas-service';

@Component({
  selector: 'app-listar',
  imports: [],
  templateUrl: './listar.html',
  styleUrl: './listar.css',
})
export class Listar {
  tareas: TareaJSON[] = [];

  constructor(private tareaService: TareasService) {
    this.tareas = this.tareaService.getAll();
  }
}
