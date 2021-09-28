import React from "react";
import "./dataSet.scss";
import aboutImg from "../../assets/img/aboutImg.svg";
import waveBG from "../../assets/img/wave.svg";

const DataSet = () => {
  return (
    <div id="about">
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
export default DataSet;
