import React, { useEffect, useState } from "react";

const ConsultaGeneral = () => {
  const [pagina, setPagina] = useState(11007);
  const [imagen, setImagen] = useState(
    "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg"
  );

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${pagina}`)
      .then((e) => e.json())
      .then((e1) => {
        setImagen(e1.drinks[0].strDrinkThumb);
      });

    return () => {};
  }, [pagina]);

  //https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg
  //https://www.thecocktaildb.com/images/media/drink/uwryxx1483387873.jpg
  return (
    <div>
      <img src={imagen}></img>
      <button
        onClick={(e1) => {
          setPagina((e) => {
            return e + 1;
          });
        }}
      >
        Ver cocktail
      </button>
    </div>
  );
};

export default ConsultaGeneral;
