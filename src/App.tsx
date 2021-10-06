import React from "react";
import "./assets/styles.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import List from "./Pages/List";
import Detail from "./Pages/DetailCity";
import Login from "./Pages/Login";
import Nav from "./Components/Nav";
import APIs from "./Pages/APIs";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/city" component={List} />
        <Route exact path="/city/:id" component={Detail} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/apis" component={APIs} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
