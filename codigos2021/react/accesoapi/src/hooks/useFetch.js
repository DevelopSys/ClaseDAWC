import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [datosAPI, setDatosAPI] = useState({ datos: [], carga: false });

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((data) => data.json())
        .then((data) => {
          setDatosAPI({ datos: data, carga: true });
        });
    }, 3000);
  }, []);

  return datosAPI;
};
