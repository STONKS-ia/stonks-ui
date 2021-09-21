import React from "react";
import "./login.scss";
import user from "../../assets/img/user.svg";
import pass from "../../assets/img/password.svg";

const Login = () => {
  return (
    <div>
      <div id="divLogin">
        <h3>LOGIN</h3>
        <input type="text" id="txtUser"></input>
        <br />
        <input type="password" id="txtPass"></input>
        <br />
        <button type="submit" id="btnEntrar">
          Entrar
        </button>
        <br />
      </div>
    </div>
  );
};
export default Login;
