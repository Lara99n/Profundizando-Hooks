import { useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [state, setState] = useState({
    username: "Lara",
    email: "",
  });

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
