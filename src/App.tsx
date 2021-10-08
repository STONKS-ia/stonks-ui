import React from "react";
import "./assets/styles.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import List from "./pages/List";
import Detail from "./pages/DetailCity";
import Login from "./pages/Login";
import Nav from "./components/Nav";
import APIs from "./pages/APIs";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact  path="/" component={Home} />
        <Route path="/cities" component={List} />
        <Route path="/city/:id" component={Detail} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/apis" component={APIs} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
