import React from "react";
import "./newUser.scss";
import user from "../../assets/img/user.svg";
import email from "../../assets/img/email.svg";
import pass from "../../assets/img/password.svg";
import phone from "../../assets/img/phone.svg";
import location from "../../img/map.svg";

const newUser = () => {
  return (
    <div>
      <div id="divNewUser">
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