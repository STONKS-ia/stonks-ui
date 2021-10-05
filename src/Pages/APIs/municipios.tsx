import React from "react";
import { Link } from "react-router-dom";
import "./api.scss";

const APIs = () => {
  return (
    <div className="container">
      <div id="navbar">
        <h1>API’S</h1>
        <ul id="lista">
          <li id="despesas" className="item">
            <Link className="ancor" id="linkDespesas" to="/apis/despesas">
              DESPESAS
            </Link>
          </li>
          <li id="receitas" className="item">
            <Link className="ancor" id="linkReceitas" to="/apis/receitas">
              RECEITAS
            </Link>
          </li>
          <li id="municipios" className="item">
            <Link className="ancor" id="linkMunicipios" to="/apis/municipios">
              MUNICIPIOS
            </Link>
          </li>
        </ul>
      </div>
      <div id="content">
        <h2>Municípios</h2>
        <p id="description">
          Exibe a lista de Municípios jurisdicionados ao TCESP
        </p>
        <div id="table">
          <table>
            <tbody>
              <tr>
                <td>Caminho XML: </td>
                <td>
                  <a
                    id="link-exemplo"
                    href="https://transparencia.tce.sp.gov.br/api/json/despesas/balsamo/2015/1"
                  >
                    https://transparencia.tce.sp.gov.br/api/json/despesas/balsamo/2015/1
                  </a>
                </td>
              </tr>
              <tr>
                <td>Caminho JSON: </td>
                <td>
                  <a
                    id="link-exemplo"
                    href="https://transparencia.tce.sp.gov.br/api/json/municipios"
                  >
                    https://transparencia.tce.sp.gov.br/api/json/municipios
                  </a>
                </td>
              </tr>
              <tr>
                <td>Método:</td>
                <td>GET</td>
              </tr>
              <tr>
                <td>Formato:</td>
                <td>json e xml</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default APIs;
