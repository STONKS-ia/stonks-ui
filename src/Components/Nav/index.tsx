import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import navStyle from "./nav.module.scss";

function Nav() {
  return (
    <nav className={navStyle.navbar}>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <ul>
        <Link to="/city">
          <li>Lista de Municípios</li>
        </Link>

        <Link to="/apis">
          <li>Api</li>
        </Link>

        <Link to="/about">
          <li>Fale Conosco</li>
        </Link>

        <Link to="/login">
          <li id={navStyle.btnLogin}>Login</li>
        </Link>
      </ul>
    </nav>
  );
}
export default Nav;
