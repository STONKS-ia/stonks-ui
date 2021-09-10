import React from "react";
import "./home.scss";
import homeImg from "../../assets/img/homeImg.svg";

const Home = () => {
  return (
    <div id="flex">
      <div id="intro">
        <h1>STONKS</h1>
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
        <button id="botao">Lista de Municípios</button>
      </div>
      <div id="home-Img">
        <img src={homeImg} alt="aloooo" />
      </div>
    </div>
  );
};
export default Home;
