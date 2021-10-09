import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import "./nav.scss";

function Nav() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <ul>
        <li>
          <Link to="/newCity">Cadastrar Município</Link>
        </li>
        <li>
          <Link to="/dataSet">Conjunto de dados</Link>
        </li>
        <li>
          <Link to="/apis">Api</Link>
        </li>
        <li>
          <Link to="/about">Fale Conosco</Link>
        </li>
        <li id="btn-login">
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
