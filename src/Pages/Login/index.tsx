import React from "react";
import loginStyle from "./login.module.scss";

const Login = () => {
  return (
    <div>
      <div id={loginStyle.divLogin}>
        <h3>LOGIN</h3>
        <input type="text" id={loginStyle.txtUser}></input>
        <input type="password" id={loginStyle.txtPass}></input>
        <button type="submit" className={loginStyle.btnEntrar}>
          Entrar
        </button>
      </div>
    </div>
  );
};
export default Login;
