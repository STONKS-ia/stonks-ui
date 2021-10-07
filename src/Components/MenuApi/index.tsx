import { useState } from "react";
import { Link } from "react-router-dom";
import menuStyle from "./menu.module.scss";

function MenuApi() {
  const [isDespesas, setDespesaSwitch] = useState(true);
  const [isReceitas, setReceitaSwitch] = useState(false);
  const [isMunicipios, setMunicipioSwitch] = useState(false);
  
  function handleClick(value: number){
    switch (value){
      case 1:
          setDespesaSwitch(true);
          setReceitaSwitch(false);
          setMunicipioSwitch(false);
        break;
      case 2:
          setDespesaSwitch(false);
          setReceitaSwitch(true);
          setMunicipioSwitch(false);
          break;
      case 3:
          setDespesaSwitch(false);
          setReceitaSwitch(false);
          setMunicipioSwitch(true);
          break;
      default:
          setDespesaSwitch(true);
          setReceitaSwitch(false);
          setMunicipioSwitch(false);
        break;
    }
  }
  return (
       <section className={menuStyle.navbar}>
        <h1>API’S</h1>
        <ul className={menuStyle.lista}>
          <li  className={isDespesas ? menuStyle.active : menuStyle.inactive}>
            <Link onClick={()=> handleClick(1)} className={menuStyle.ancor} id={menuStyle.linkDespesas} to="/apis">DESPESAS</Link>
          </li>
          <li className={isReceitas ? menuStyle.active : menuStyle.inactive}>
            <Link onClick={()=> handleClick(2)} className={menuStyle.ancor} id={menuStyle.linkReceitas} to="/apis/receitas">RECEITAS</Link>
          </li>
          <li className={isMunicipios ? menuStyle.active : menuStyle.inactive}>
            <Link onClick={()=> handleClick(3)} className={menuStyle.ancor} id={menuStyle.linkMunicipios} to="/apis/municipios">MUNICIPIOS</Link>
          </li>
        </ul>
      </section>
  );
}
export default MenuApi;
