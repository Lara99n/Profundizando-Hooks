//Nos sirve para manejar el valor de una variable que podemos cambiar, pero no dispara rerendizaciones.
//Nos permite a nostoros mantener una referencia y que cuando era referencia cambie no se vuelva a renderizar

import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();

  const onClick = () => {
    /*  document.querySelector("input").focus(); */
    inputRef.current.select();
    console.log(inputRef);
  };

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input
        ref={inputRef}
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control"
      />

      <button className="btn btn-primary mt-2" onClick={onClick}>
        Set Focus
      </button>
    </>
  );
};
