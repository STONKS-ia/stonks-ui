import React from "react";
import newUserStyle from "./newUser.module.scss";

const newUser = () => {
  return (
    <div>
      <div id={newUserStyle.divNewUser}>
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