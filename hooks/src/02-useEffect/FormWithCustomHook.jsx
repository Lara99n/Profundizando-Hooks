import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const { state, onInputChange, onResetForm } = useForm({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = state;

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
        placeholder="Email"
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

      <button onClick={onResetForm} className="btn btn-primary mt-2">
        Borrar
      </button>
    </>
  );
};
