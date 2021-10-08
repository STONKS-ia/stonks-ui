import React from "react";
import homeImg from "../../assets/img/homeImg.svg";
import { Link } from "react-router-dom";
import homeStyle from "./home.module.scss";

const Home = () => {
  return (
    <div className={homeStyle.homeContainer}>
      <div className={homeStyle.intro}>
        <h1 className={homeStyle.cabecalho}>STONKS</h1>
        <p >
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
        <Link to="/cities" className={homeStyle.textBtn}>
          <li>Lista de Municípios</li>
        </Link>
      </div>
      <div className={homeStyle.monitor}>
        <img id={homeStyle.monitorImg} src={homeImg} alt="Home Img" />
      </div>
    </div>
  );
};
export default Home;
