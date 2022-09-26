import { Coche } from "./componentes/coche";
import { crearNodo } from "./componentes/operaciones";
import "./style.css";

let coche = new Coche("Focus", "Ford", 123);
coche.mostrarDatos();

$(".container").append("<p>Otra cosa metida con JQUERY</p>");
$(".container").append("<p>Otra cosa metida con JQUERY</p>");
$(".container").append("<p>Otra cosa metida con JQUERY</p>");
$(".container").append("<p>Otra cosa metida con JQUERY</p>");
$(".container").append("<p>Otra cosa metida con JQUERY</p>");
$(".container").append("<p>Otra cosa metida con JQUERY</p>");

console.log("Ejemplo de modificación dinamica");
crearNodo();
