import React from "react";
import "./assets/styles.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import List from "./pages/List";
import Detail from "./pages/DetailCity";
import Login from "./pages/Login";
import APIs from "./pages/APIs";
import AddUser from "./pages/AddUser";
import AddCity from "./pages/AddCity";
import Nav from "./components/Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact  path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/apis" component={APIs} />
        <Route path="/cities/list" component={List} />
        <Route path="/cities/:id" component={Detail} />

        <Route path="/addUser" component={AddUser} />
        <Route path="/addCity" component={AddCity} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
