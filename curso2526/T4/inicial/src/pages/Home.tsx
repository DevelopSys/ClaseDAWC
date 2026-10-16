import { useState } from "react";

const Home = () => {
  const nombre: string = "Borja";
  // let contador: number = 10;
  const [contador, setContador] = useState(0);

  return (
    <>
      <h2>Pagina de home</h2>
      <p>
        Esta pagina la utilizaremos para poder analizar el uso de useState la
        gestion de variables. Esta pagina la ha realizado {nombre}
      </p>
      <div className="m-3">
        {/* 
            1-llamar a la pulsacin
            -- 2-capturo el texto interno del span, lo paso a numero, lo incremento en 1, lo asigno al span
            2. incremento en uno la variable
         */}
        <button
          className="btn btn-primary"
          onClick={() => {
            setContador((data) => data + 1);
            // setContador(contador + 1);
          }}
        >
          Incrementar
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => {
            // setContador(contador - 1);
            setContador((data) => data - 1);
          }}
        >
          Decrementar
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => {
            // setContador(contador - 1);
            setContador(0);
          }}
        >
          Resetear
        </button>
        <span className="ms-4">{contador}</span>
      </div>
    </>
  );
};

export default Home;
