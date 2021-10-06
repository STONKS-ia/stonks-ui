import React from "react";
import { Link } from "react-router-dom";
import menuStyle from "./menu.module.scss";

function MenuApi() {
  return (
       <div className={menuStyle.navbar}>
        <h1>API’S</h1>
        <ul className={menuStyle.lista}>
          <li id={menuStyle.despesas} className={menuStyle.item}>
            <Link className={menuStyle.ancor} id="linkDespesas" to="/apis">
              DESPESAS
            </Link>
          </li>
          <li id={menuStyle.receitas} className={menuStyle.item}>
            <Link className={menuStyle.ancor} id="linkReceitas" to="/apis/receitas">
              RECEITAS
            </Link>
          </li>
          <li id={menuStyle.municipios} className={menuStyle.item}>
            <Link className={menuStyle.ancor} id="linkMunicipios" to="/apis/municipios">
              MUNICIPIOS
            </Link>
          </li>
        </ul>
      </div>
  );
}
export default MenuApi;
