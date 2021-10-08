import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import menuStyle from "./menu.module.scss";

function MenuApi() {
  const [menuOption, setMenuOption] = useState(1);
  
  return (
       <section className={menuStyle.navbar}>
        <h1>API’S</h1>
        <ul className={menuStyle.lista}>
          <li  className={menuOption === 1 ? menuStyle.active : menuStyle.inactive}>
            <Link onClick={()=> { setMenuOption(1)}} className={menuStyle.ancor} id={menuStyle.linkDespesas} to="/apis">DESPESAS</Link>
          </li>
          <li className={menuOption === 2 ? menuStyle.active : menuStyle.inactive}>
            <Link onClick={()=> { setMenuOption(2)}} className={menuStyle.ancor} id={menuStyle.linkReceitas} to="/apis/receitas">RECEITAS</Link>
          </li>
          <li className={menuOption === 3 ? menuStyle.active : menuStyle.inactive}>
            <Link onClick={()=> { setMenuOption(3)}} className={menuStyle.ancor} id={menuStyle.linkMunicipios} to="/apis/municipios">MUNICIPIOS</Link>
          </li>
        </ul>
      </section>
  );
}
export default MenuApi;
