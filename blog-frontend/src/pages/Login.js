import React, { useContext } from "react";
import Button from "../components/forms/button";
import Input from "../components/forms/input";
import AuthContext from "../lib/contexts/auth.context";

const Login = () => {
  const { setAuthState } = useContext(AuthContext);

  return (
    <section className="container mx-auto lg:px-20 px-10 py-4">
      <form className="bg-gray-300 flex flex-col items-center w-full p-4">
        <Input placeholder="Usuario" name="user" />
        <Input placeholder="Contraseña" name="password" type="password" />
        <Button className="my-4">Login</Button>
      </form>
    </section>
  );
};

const submitLoginForm = (event, setAuthState) => {};

export default Login;
