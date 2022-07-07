// memo nos permite memorizar un componente.Esto permite a React evitar renderizarlo si sus propiedades no han cambiado.
// En este caso, el contador de <Memorize/> cada vez que habia un cambio, ya sea de el contador o cualquier otro se generaba el
// console.log('Me volvi a generar").Al agregar el memo o React.memo le pedimos que solo se llame cuando se esta utilizando este componente,
// osea que no se va a llamar ante cada cambio.

import React from "react";
import { memo } from "react";

export const Small = React.memo(({ value }) => {
  console.log("Me volvi a generar :(");
  return <small>{value}</small>;
});
