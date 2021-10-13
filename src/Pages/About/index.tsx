import React from "react";
import aboutStyle from"./about.module.scss";
import aboutImg from "../../assets/img/aboutImg.svg";

const About = () => {
  return (
    <div className={aboutStyle.about}>
      <img className={aboutStyle.imagem} src={aboutImg} alt="yes" />
      <div className={aboutStyle.information}>
        <h2>Contato</h2>
        <ul>
          <li className={aboutStyle.itemList}>
            <b>Endereço:</b> Prédio Sede 7º andar
          </li>
          <li className={aboutStyle.itemList}>
            <b>Ouvidoria: </b><a href="http://www4.tce.sp.gov.br/ouvidoria"> www4.tce.sp.gov.br/ouvidoria </a>
          </li>
          <li className={aboutStyle.itemList}>
            <b>Central de Atendimento:</b> 0800 8007575
          </li>
          <li className={aboutStyle.itemList}>
            <b>WhatsApp:</b> (11)99508.7638
          </li>
          <li className={aboutStyle.itemList}>
            <b>Email:</b> ouvidoria@tce.sp.gov.br
          </li>
        </ul>
      </div>
    </div>
  );
};
export default About;
