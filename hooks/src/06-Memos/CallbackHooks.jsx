//useCallback memoriza funciones, regresa una funcion que yo puedo ejecutar, pero esa funcion memorizada
// se va a volver a procesar cuando algo cambie

import { useCallback } from "react";
import { useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHooks = () => {
  const [counter, setCounter] = useState(10);

  //  useCallback(() => {
  //    setCounter(counter + 1);
  //  }, []);

  //En este caso solo se va a encrementar una unica vez, porque el valor que tiene esta memorizado, sigue siendo el mismo valor que era 10 + 1.

  //  useCallback(() => {
  //    setCounter(counter + 1);
  //  }, [counter]);

  // En este caso, al colocarlo como una dependencia, cada vez que el counter se cambie se vuelve a generar toda la funcion, porque el valor
  //se vuelve a memorizar.

  const increment = useCallback((sum5) => {
    setCounter((value) => value + sum5);
  }, []);

  //si le enviamos el valor actual del counter  y podemos volver a agarrar el valor del counter y sumarle uno. Asi funcionaria bien,
  // porque la funcion internamente sabe que va a agarrar el valor actual del state y le va a sumar uno,
  // y no se vuelve a dibujar porque esta memorizada con el React.memo,

  return (
    <>
      <h1>useCallback Hook: {counter}</h1>
      <ShowIncrement increment={increment} />
    </>
  );
};
