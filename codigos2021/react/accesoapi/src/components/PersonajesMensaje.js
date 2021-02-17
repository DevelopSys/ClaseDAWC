import React, { useEffect, useState } from "react";

export const PersonajesMensaje = () => {
  const [form, setForm] = useState(0);
  useEffect(() => {
    console.log("componente secundario mostrado");
    return () => {
      console.log("componente desmontado");
    };
  }, [form]);

  return (
    <>
      <div>Componente secundario desmontable</div>
      <button
        className="btn btn-success"
        onClick={() => {
          setForm(form + 1);
        }}
      >
        Pulsar
      </button>
    </>
  );
};
