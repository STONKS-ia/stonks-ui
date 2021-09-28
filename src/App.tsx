import React from "react";
import "./assets/styles.scss";
import Nav from "./Components/Nav";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import APIs from "./Pages/APIs";
import DataSet from "./Pages/DataSet";
import Login from "./Pages/Login";
import Receitas from "./Pages/APIs/receitas";
import Municipios from "./Pages/APIs/municipios";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dataSet" component={About} />
        <Route exact path="/apis" component={APIs} />
        <Route exact path="/about" component={DataSet} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/receitas" component={Receitas} />
        <Route exact path="/municipios" component={Municipios} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
