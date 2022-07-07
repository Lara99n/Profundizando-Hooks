//use es un stantar en react para identificar que es un HOOK

import { useState } from "react";

//Puedo tener customHooks dentro de otros customHooks, y normalmente tenemos Hooks propios dentro de estos.

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = () => {
    setCounter(counter + 10);
  };
  const decrement = () => {
    // if (counter === 0) return;
    setCounter(counter - 1);
  };
  const reset = () => {
    setCounter(initialValue);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
  /* return [
    counter,
  ] si yo estuviera retornando un arr del otro lado lo tengo que desustructurar asi */
};
