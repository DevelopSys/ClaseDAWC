import React, { useState } from "react";

const HookFormState = () => {
  const [formulario, setFormulario] = useState({});

  const handleInputs = (e) => {
    //console.log(e);
    // modificar el formulario

    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h2>Gestión de use state form</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleInputs}
            name="email"
            value={formulario.email}
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={handleInputs}
            name="passwd"
            value={formulario.passwd}
          ></input>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          ></input>
          <label className="form-check-label">Check me out</label>
        </div>

        <div className="mb-3">
          <label className="form-label">Telefono</label>
          <input
            type="number"
            className="form-control"
            id="exampleCheck1"
            onChange={handleInputs}
            name="telefono"
            value={formulario.telefono}
          ></input>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault();
            //console.log("submit pulsado");
            console.log(formulario);
            // log con todas las variables de los inputs
          }}
        >
          Submit
        </button>
        <button
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault();
            setFormulario({ email: "", telefono: 0, passwd: "" });
          }}
        >
          Reset
        </button>
      </form>
    </>
  );
};

export default HookFormState;
