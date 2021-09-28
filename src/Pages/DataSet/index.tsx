import React from "react";
import "./dataSet.scss";
import aboutImg from "../../assets/img/aboutImg.svg";
import waveBG from "../../assets/img/wave.svg";

const DataSet = () => {
  return (
    <div id="about">
      <img id="imagem" src={aboutImg} alt="yes" />
      <div id="information">
        <img id="background-wave" src={waveBG} alt="" />
        <h2>Contato</h2>
        <ul>Telefone</ul>
      </div>
    </div>
  );
};
export default DataSet;
