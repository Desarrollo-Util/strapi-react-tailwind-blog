import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/common/header";
import AuthContext from "./lib/contexts/auth.context";
import Article from "./pages/Article";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "./styles/index.css";

const App = () => {
  const [authState, setAuthState] = useState(undefined);

  useEffect(() => {
    if (localStorage.getItem("jwt")) recoverUser(setAuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/articulo/:slug">
            <Article />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

const recoverUser = async (setAuthState) => {
  const response = await fetch(`${process.env.BACKEND_HOST}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  });

  const data = await response.json();

  setAuthState({
    jwt: localStorage.getItem("jwt"),
    user: { username: data.username },
  });
};

export default App;
