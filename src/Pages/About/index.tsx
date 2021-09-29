import React from "react";
import "./about.scss";
import aboutImg from "../../assets/img/aboutImg.svg";
import Nav from "../../Components/Nav";

const About = () => {
  return (
    <div id="about">
      <Nav />
      <img id="imagem" src={aboutImg} alt="yes" />
      <div id="information">
        <h2>Contato</h2>
        <ul>
          <li className="item-list">
            <b>Endereço:</b> Prédio Sede 7º andar
          </li>
          <li className="item-list">
            <b>Ouvidoria: </b>
            <a href="http://www4.tce.sp.gov.br/ouvidoria">
              www4.tce.sp.gov.br/ouvidoria
            </a>
          </li>
          <li className="item-list">
            <b>Central de Atendimento:</b> 0800 8007575
          </li>
          <li className="item-list">
            <b>WhatsApp:</b> (11)99508.7638
          </li>
          <li className="item-list">
            <b>Email:</b> ouvidoria@tce.sp.gov.br
          </li>
        </ul>
      </div>
    </div>
  );
};
export default About;
