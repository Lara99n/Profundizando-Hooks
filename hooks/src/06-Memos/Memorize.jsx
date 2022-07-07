//memo nos permite memorizar un componente.Esto permite a React evitar renderizarlo si sus propiedades no han cambiado.
// En este caso, el contador de <Memorize/> cada vez que habia un cambio, ya sea de el contador
//o cualquier otro se generaba el console.log('Me volvi a generar") de <Small/>. al agregar el memo o React.memo le pedimos
// que solo se llame cuando se esta utilizando este componente, osea que no se va a llamar ante cada cambio.

import { useState } from "react";
import { useCounter } from "../hooks/useCounter";
import { Small } from "./Small";

export const Memorize = () => {
  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(true);

  return (
    <>
      <h1>
        Counter: <Small value={counter} />
      </h1>
      <hr />

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
