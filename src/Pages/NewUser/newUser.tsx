import React from "react";
import login from "./newUser.module.scss";
import user from "../../assets/img/user.svg";
import pass from "../../assets/img/password.svg";

const newUser = () => {
  return (
    <div>
      <div id={login.divNewUser}>
        <h3>Novo Usuário</h3>
        <input type="text" id="txtUser"></input><br />
        <input type="text" id="txtEmail"></input><br />
        <input type="text" id="txtPass"></input><br />
        <input type="text" id="txtPhone"></input><br />
        <input type="text" id="txtLocation"></input><br />
        <button type="submit" id="btnCadastrar">Cadastrar</button><br />
      </div>
    </div>
  );
};
export default newUser;