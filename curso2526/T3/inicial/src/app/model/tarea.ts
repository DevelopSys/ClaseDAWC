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
  titulo: string;
  fecha: Date;
  prioridad: string;
  responsable: string;
}

let tarea1: Tarea = new Tarea('Tarea1', new Date(), 'alta', 'Borja');
tarea1.getTitulo;

let tarea2: TareaJSON = {
  titulo: 'Tarea2',
  fecha: new Date(),
  prioridad: 'alta',
  responsable: 'Borja',
};
tarea2.titulo;
