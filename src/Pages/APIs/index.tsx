import React from "react";
import "./api.scss";

function populaDiv(params: String) {}

const APIs = () => {
  return (
    <div>
      <div id="navbar">
        <h2>API’S</h2>
        <br />
        <ul id="lista">
          <li id="despesas" className="item">
            <a id="linkDespesas" onClick={() => populaDiv.bind(this, id)}>
              DESPESAS
            </a>
          </li>
          <li id="estrutura" className="item">
            <a id="linkEstruturas" onClick={}>
              ESTRUTURA
            </a>
          </li>
          <li id="receitas" className="item">
            <a id="linkReceitas" onClick={}>
              RECEITAS
            </a>
          </li>
          <li id="municipios" className="item">
            <a id="linkMunicipios" onClick={}>
              MUNICIPIOS
            </a>
          </li>
        </ul>
      </div>
      <div id="content"></div>
    </div>
  );
};

export default APIs;
