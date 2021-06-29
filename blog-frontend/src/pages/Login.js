import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Button from "../components/forms/button";
import Input from "../components/forms/input";
import AuthContext from "../lib/contexts/auth.context";

const Login = () => {
  const history = useHistory();
  const { setAuthState } = useContext(AuthContext);

  return (
    <section className="container mx-auto lg:px-20 px-10 py-4">
      <form
        onSubmit={(event) => submitLoginForm(event, setAuthState, history)}
        className="bg-gray-300 flex flex-col items-center w-full p-4"
      >
        <Input placeholder="Usuario" name="user" />
        <Input placeholder="Contraseña" name="password" type="password" />
        <Button className="my-4" id="boton">
          Login
        </Button>
      </form>
    </section>
  );
};

const submitLoginForm = async (event, setAuthState, history) => {
  event.preventDefault();

  const identifier = event.target.user.value;
  const password = event.target.password.value;

  const response = await fetch(`${process.env.BACKEND_HOST}/auth/local`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ identifier, password }),
  }).catch((error) => console.log("ERROR", error));

  const data = await response.json();

  if (data.jwt) {
    localStorage.setItem("jwt", data.jwt);
    setAuthState({ jwt: data.jwt, user: { username: data.user.username } });

    history.push("/");
  }
};

export default Login;
