import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <pre>{JSON.stringify(user, null, 3)}</pre>

      <button onClick={() => setUser({ id: 123, nombre: "lara" })}>
        Agregar usuario
      </button>
    </>
  );
};
