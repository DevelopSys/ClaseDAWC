import React, { useState } from "react";
import Usuario from "./Usuario";

const Cuerpo = () => {
  let listado = [
    {
      nombre: "Borja",
      apellido: "Martin",
      descripcion: "descripcion del usuario1",
      conocimientos: ["Programacion", "Sistemas", "Finanzas"],
    },
    {
      nombre: "Luis",
      apellido: "Martin",
      descripcion: "descripcion del usuario1",
      conocimientos: ["Programacion", "Sistemas"],
    },
    {
      nombre: "Patricia",
      apellido: "Martin",
      descripcion: "descripcion del usuario1",
      conocimientos: ["Programacion", "Sistemas", "Marketing"],
    },
    {
      nombre: "Sergio",
      apellido: "Martin",
      descripcion: "descripcion del usuario1",
      conocimientos: ["Programacion", "Sistemas", "Ventas"],
    },
    {
      nombre: "Fran",
      apellido: "Martin",
      descripcion: "descripcion del usuario1",
      conocimientos: ["Programacion", "Sistemas", "Diseño"],
    },
    {
      nombre: "Celia",
      apellido: "Martin",
      descripcion: "descripcion del usuario1",
      conocimientos: ["Programacion", "Sistemas", "Ventas"],
    },
    {
      nombre: "Juan",
      apellido: "Martin",
      descripcion: "descripcion del usuario1",
      conocimientos: ["Programacion", "Sistemas", "Desarrollo"],
    },
    {
      nombre: "Claudia",
      apellido: "Martin",
      descripcion: "descripcion del usuario1",
      conocimientos: ["Programacion", "Sistemas", "Negocio"],
    },
    {
      nombre: "Marcos",
      apellido: "Martin",
      descripcion: "descripcion del usuario1",
      conocimientos: ["Programacion", "Sistemas", "Marketing"],
    },
    {
      nombre: "Mario",
      apellido: "Marcasda",
      descripcion: "",
      conocimientos: ["Programacion"],
    },
  ];

  /* HOOK */
  /* const [contador, setContador] = useState((e) => {
    return e + 1;
  }); */

  const [contador, setContador] = useState(0);
  const [valorInput, setValorInput] = useState(5);

  /* Crear un formulario de usuarios, al agregar un usuario se punta una 
  carta con su nombre, apellido y perfil (usuario, administrador, invitado) */

  /* boton.addEventListener('click',(e)=>{
    contador++
    nodoSpan.textContent = contador
  }) */

  return (
    <div>
      <p>Este es el cuerpo del componente</p>
      <button
        onClick={() => {
          //console.log("Pulsacion detectada");
          setContador(contador + 1);
          //console.log(contador);
        }}
      >
        Incrementar
      </button>
      <button
        onClick={(e) => {
          //console.log("Pulsacion detectada");
          if (contador <= 0) {
            e.preventDefault();
          } else {
            setContador(contador - 1);
          }
          //console.log(contador);
        }}
      >
        Decrementar
      </button>
      <button
        onClick={() => {
          //console.log("Pulsacion detectada");
          setContador(valorInput);
          //console.log(contador);
        }}
      >
        Resetar
      </button>
      <input
        value={valorInput}
        type="number"
        placeholder="Introduce el numero a resetear"
        onChange={(e) => {
          if (Number(e.target.value) < 0) {
            setValorInput(0);
          } else {
            setValorInput(Number(e.target.value));
          }
        }}
      />
      <p>
        <span>{contador}</span>
      </p>
      <div className="row">
        {listado.map((item, index) => {
          return <Usuario comunicacion={item} posicion={index} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Cuerpo;
