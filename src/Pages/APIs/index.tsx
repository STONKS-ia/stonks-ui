import React from "react";
import "./api.scss";

const APIs = () => {
  return (
    <div>
      <div id="navbar">
        <h2>API’S</h2>
        <br />
        <ul id="lista">
          <li id="despesas" className="item">
            DESPESAS
          </li>
          <li id="estrutura" className="item">
            ESTRUTURA
          </li>
          <li id="receitas" className="item">
            RECEITAS
          </li>
          <li id="municipios" className="item">
            MUNICIPIOS
          </li>
        </ul>
      </div>
      <div id="content"></div>
    </div>
  );
};
export default APIs;
