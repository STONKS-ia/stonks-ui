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
        <Link to="/list">
          <li>Lista de Municípios</li>
        </Link>

        <Link to="/apis/despesas">
          <li>Api</li>
        </Link>

        <Link to="/about">
          <li>Fale Conosco</li>
        </Link>

        <Link to="/login">
          <li id="btn-login">Login</li>
        </Link>
      </ul>
    </nav>
  );
}
export default Nav;
