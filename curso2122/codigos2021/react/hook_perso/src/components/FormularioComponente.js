import React, { useEffect } from "react";
//import hookFormulario from "../hooks/hookFormulario";
import hookPerso from "../hooks/hookPerso";

const FormularioComponente = () => {
  //const [formulario, setFormulario] = useState({ nombre: "", correo: "" });
  /*const handleInputs = (e) => {
    //console.log(e.target.name);
    //console.log(e.target.value);
    //console.log(formulario);
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };*/

  //const [formulario, handleInputs] = hookFormulario({ nombre: "borja" });
  const [formulario, handler] = hookPerso({});

  useEffect(() => {
    console.log("carga inicial");
    return () => {
      // ejecutado cuando el componente se desmonta
    };
  }, []);

  useEffect(() => {
    console.log("formulario cambiado");
  }, [formulario]);

  return (
    <>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handler}
            name="correo"
          ></input>
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Nombre
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            onChange={handler}
            name="nombre"
          ></input>
        </div>
        <div class="mb-3 form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="exampleCheck1"
          ></input>
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default FormularioComponente;
