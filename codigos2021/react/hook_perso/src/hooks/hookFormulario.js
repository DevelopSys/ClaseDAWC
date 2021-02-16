import { useState } from "react";

const HookFormulario = (valorFormulario = {}) => {
  const [formulario, setFormulario] = useState(valorFormulario);

  const handleInputs = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  return [formulario, handleInputs];
};

export default HookFormulario;
