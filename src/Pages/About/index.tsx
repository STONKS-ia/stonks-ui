import React from "react";
import "./about.scss";
import aboutImg from "../../assets/img/aboutImg.svg";
import waveBG from "../../assets/img/wave.svg";

const About = () => {
  return (
    <div id="about">
      <img id="imagem" src={aboutImg} alt="yes" />
      <div id="description">
        <img id="background-wave" src={waveBG} alt="" />
        <h2>Contato</h2>
        <ul>Telefone</ul>
      </div>
    </div>
  );
};
export default About;
