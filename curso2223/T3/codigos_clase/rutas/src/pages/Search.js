import React from "react";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  /* capturar los parametros de la url */
  /* setearlos los parametros de la url */

  const [searchParam, setParam] = useSearchParams();
  const category = searchParam.get("category");
  console.log(category);

  return (
    <div>
      <input
        value={category}
        onChange={(e) => {
          setParam({ category: e.target.value });
        }}
        placeholder="escribe la categoria"
      ></input>
    </div>
  );
};

export default Search;
