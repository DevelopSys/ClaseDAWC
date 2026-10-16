export class Tarea {
  constructor(
    private titulo: string,
    private fecha: Date,
    private prioridad: string,
    private responsable: string,
  ) {}

  // necesito los getter y los setter
  get getTitulo() {
    return this.titulo;
  }
  // metodos
}

export interface TareaJSON {
  titulo?: string | null;
  fecha?: string | null;
  prioridad?: number;
  responsable?: string | null;
  items: string[];
}
