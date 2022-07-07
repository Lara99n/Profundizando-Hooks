import { useEffect } from "react";
import { useState } from "react";

export const FormWithCustomHook = () => {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = state;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <>
      <h1>Formulario con Custom Hook</h1>
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
      <input
        type="password"
        className="form-control m-2"
        placeholder="Contraseña"
        name="password"
        value={password}
        onChange={onInputChange}
      />
    </>
  );
};
