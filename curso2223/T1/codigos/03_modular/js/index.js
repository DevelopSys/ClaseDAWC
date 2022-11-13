import nota from "./nota.js";
import {
  tareaPesada as numerosa,
  filtrarPrioritarias as prioritarias,
} from "./funciones.js";

let trabajoTarde = new nota(
  "Pendientes tarde",
  "Tareas que se deben hacer por la tarde",
  false
);
trabajoTarde.agregarTarea("Ir al gimnasio");
trabajoTarde.agregarTarea("Hacer la cena");
trabajoTarde.agregarTarea("Terminar prácticas");

let trabajoDia = new nota(
  "Pendientes mañana",
  "Tareas que se deben hacer por la mañana",
  true
);
trabajoDia.agregarTarea("Asistir a clase");
trabajoDia.agregarTarea("Hacer la comida");

let agenda = [trabajoTarde, trabajoDia];

numerosa(agenda);
prioritarias(agenda);
