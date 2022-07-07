//Si yo necesito crear un contador para algo exp como por ej un carrito d compras, y necesito tener una cierta
//logica y el conotrol del mismo, lo mejor seria crer un CustomHook para poder REUTILIZAR mi codigo.

import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHooks = () => {
  // const [] = useCounter()
  const { counter, increment, decrement, reset } = useCounter();

  return (
    <>
      <h1> Counter with Hook: {counter}</h1>
      <hr />

      <button className="btn" onClick={increment}>
        +1
      </button>
      <button className="btn" onClick={reset}>
        Reset
      </button>
      <button className="btn" onClick={decrement}>
        -1
      </button>
    </>
  );
};
