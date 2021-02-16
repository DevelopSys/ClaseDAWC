import { useState } from "react";

const HookPerso = (form = {}) => {
  useEffect(() => {
    console.log("elemento cambiado");
  }, []);
  const [formulario, setFormulario] = useState(form);

  const handler = (e) => {
    setFormulario({ ...formulario, nuevo: "asdasdasdasdad" });
  };

  return [formulario, handler];
};

export default HookPerso;
