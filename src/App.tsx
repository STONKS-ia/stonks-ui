import React from "react";
import "./assets/styles.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import APIs from "./Pages/APIs";
import List from "./Pages/List";
import Detail from "./Pages/DetailCity";
import Login from "./Pages/Login";
import Receitas from "./Pages/APIs/receitas";
import Nav from "./Components/Nav";
import Municipios from "./Pages/APIs/municipios";

function App() {
  return (
  <BrowserRouter>
    <Nav  />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/city" component={List} />
        <Route exact path="/city/:cityId" component={Detail} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/apis/despesas" component={APIs} />
        <Route exact path="/apis/receitas" component={Receitas} />
        <Route exact path="/apis/municipios" component={Municipios} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
