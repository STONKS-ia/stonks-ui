import React from "react";
import "./login.scss";
import Nav from "../../Components/Nav";

const Login = () => {
  return (
    <div>
      <Nav />
      <div id="divLogin">
        <h3>LOGIN</h3>
        <input type="text" id="txtUser"></input>
        <input type="password" id="txtPass"></input>
        <button type="submit" id="btnEntrar">
          Entrar
        </button>
      </div>
    </div>
  );
};
export default Login;
