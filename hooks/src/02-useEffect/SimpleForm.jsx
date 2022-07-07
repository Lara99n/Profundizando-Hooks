import { useEffect } from "react";
import { useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [state, setState] = useState({
    username: "Lara",
    email: "",
  });

  //                         !!!!!!!!!!!UseEffect!!!!!!!!!!!!!!!!!
  //  useEffect(() => {
  //  console.log("Se dispara cada vez q haya un cambio");
  // });

  //  useEffect(() => {
  //  console.log("Se va a disparar 1 unica vez, cuando se monta");
  //  }, []);

  //  useEffect(() => {
  //  console.log("Se va a disparar cada vez que el estado/formulario cambie");
  // }, [state]);

  //  useEffect(() => {
  //  console.log("Se va a disparar cada vez que el email cambie");
  // }, [email]);

  //    useEffect(() => {
  //    console.log("Mensaje montado");
  //    return () => {
  //    console.log("Mensaje desmontado");
  //   };
  // }, []);

  const { username, email } = state;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <>
      <h1>Formulario simple</h1>
      <hr />

      <input
        type="text"
        className="form-control m-2"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control m-2"
        placeholder="email"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      {username === "Lara" && <Message />}
    </>
  );
};
