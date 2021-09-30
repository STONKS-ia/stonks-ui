import React from "react";
import "./login.scss";

const Login = () => {
  return (
    <div>
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
