import React from "react";
import "./home.scss";
import homeImg from "../../assets/img/homeImg.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div id="intro">
        <h1 id="cabecalho">STONKS</h1>
        <p>
          Sistema Tributário Original de Navegação Keep Simple é um projeto
          criado pelo grupo Elit da{" "}
          <abbr
            title="Faculdade de Informática e Administração
          Paulista"
          >
            FIAP
          </abbr>{" "}
          , que visa melhorar o sistema do{" "}
          <abbr
            title="Tribunal de Contas do Estado de São
          Paulo"
          >
            TCESP
          </abbr>{" "}
          criando um portal de melhor acesso e facilidade tanto para quem
          trabalha quanto para quem utiliza.
        </p>
        <Link to="/list" id="botao">
          Lista de Municípios
        </Link>
      </div>

      <img id="home-Img" src={homeImg} alt="aloooo" />
    </div>
  );
};
export default Home;
