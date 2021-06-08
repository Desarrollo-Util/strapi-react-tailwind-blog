import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Article from "./pages/Article";
import Home from "./pages/Home";
import "./styles/index.css";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/articulo/:id">
          <Article />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
