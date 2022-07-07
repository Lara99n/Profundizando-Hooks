//useMemo memoriza un valor

import { useMemo } from "react";
import { useState } from "react";
import { useCounter } from "../hooks/useCounter";

const heavyStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log("Ahi vamos..");
  }
  return `${iterationNumber} interaciones realizadas`;
};

export const MemoHook = () => {
  const { counter, increment } = useCounter(1000);
  const [show, setShow] = useState(true);

  const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);
  //va a memorizar lo que sea que retorne, y este valor(memorizedValue) memorizado se va a mantener asi almenos que las dependencias,
  //del useMemo cambien. El primer argumento es una funcion que debe regresar algo(si no se envia nada el valor sera undefined).
  // En este caso HeavyStuff va a ser el valor memorizado de su funcion. Recibe el counter. y se va a memorizar si y solo si las
  //dependencias cambian, en este caso quiero memorizarlo cada vez que el counter cambie.
  //si le pasamos la dependencia vacia [] se va a ejecutar la primera vez.

  return (
    <>
      <h1>
        Counter: <small>{counter}</small>
      </h1>
      <hr />
      <h4>{memorizedValue}</h4>

      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>

      <button
        className="btn btn-outline-primary"
        onClick={() => setShow(!show)}
      >
        Show {JSON.stringify(show)}
      </button>
    </>
  );
};
