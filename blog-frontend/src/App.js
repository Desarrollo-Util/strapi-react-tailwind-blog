import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AuthContext from "./lib/contexts/auth.context";
import Article from "./pages/Article";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "./styles/index.css";

const App = () => {
  const [authState, setAuthState] = useState();

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
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

export default App;
