import React from "react";
import "./assets/styles.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
<<<<<<< HEAD
import Home from "./Pages/Home";
import About from "./Pages/About";
import APIs from "./Pages/APIs";
import DataSet from "./Pages/DataSet";
import Login from "./Pages/Login";
import Receitas from "./Pages/APIs/receitas";
import Municipios from "./Pages/APIs/municipios";
import NewCity from "./Pages/NewCity";
=======
import Home from "./pages/Home";
import About from "./pages/About";
import List from "./pages/List";
import Detail from "./pages/DetailCity";
import Login from "./pages/Login";
import Nav from "./components/Nav";
import APIs from "./pages/APIs";
>>>>>>> master

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
<<<<<<< HEAD
        <Route exact path="/" component={Home} />
        <Route exact path="/dataSet" component={About} />
        <Route exact path="/apis" component={APIs} />
        <Route exact path="/about" component={DataSet} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/receitas" component={Receitas} />
        <Route exact path="/municipios" component={Municipios} />
        <Route exact path="/newCity" component={NewCity} />
=======
        <Route exact  path="/" component={Home} />
        <Route path="/cities" component={List} />
        <Route path="/city/:id" component={Detail} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/apis" component={APIs} />

>>>>>>> master
      </Switch>
    </BrowserRouter>
  );
}

export default App;
