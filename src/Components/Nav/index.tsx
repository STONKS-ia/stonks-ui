import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import navStyle from "./nav.module.scss";

function Nav() {
  const [isApis, setApisSwitch] = useState(false);
  const [isAbout, setAboutSwitch] = useState(false);
  const [isLogin, swtLoginSwitch] = useState(false);
  
  function handleClick(value: number){
    switch (value){
      case 1:
          setApisSwitch(true);
          setAboutSwitch(false);
          swtLoginSwitch(false);
        break;
      case 2:
          setApisSwitch(false);
          setAboutSwitch(true);
          swtLoginSwitch(false);
          break;
      case 3:
          setApisSwitch(false);
          setAboutSwitch(false);
          swtLoginSwitch(true);
          break;
    }
  }
  return (
    <nav className={navStyle.navbar}>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <ul>
        <Link to="/city" >
          <li>Lista de Municípios</li>
        </Link>

        <Link to="/apis" className={isApis ? navStyle.active : navStyle.inactive} onClick={()=> handleClick(1)} >
          <li>Api</li>
        </Link>

        <Link to="/about" className={isAbout ? navStyle.active : navStyle.inactive} onClick={()=> handleClick(2)} >
          <li>Fale Conosco</li>
        </Link>

        <Link to="/login" className={isLogin ? navStyle.active : navStyle.inactive} onClick={()=> handleClick(3)} >
          <li id={navStyle.btnLogin}>Login</li>
        </Link>
      </ul>
    </nav>
  );
}
export default Nav;
