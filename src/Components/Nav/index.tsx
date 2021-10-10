import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import { useAuth } from "../../hooks/auth";
import navStyle from "./nav.module.scss";

function Nav() {
  const { name, signOut } = useAuth();
  // const [ logged , setLogged ] = useState<boolean>(false)

  const btnLogin = () =>{
    return (
        <NavLink to="/login" activeClassName={navStyle.active} >
          <li className={navStyle.item} id={navStyle.btnLogin}>Login</li>
        </NavLink>
    )
  }
  const btnLogout = () => {
      return (
         <NavLink to="/login" activeClassName={navStyle.active} >
          <li className={navStyle.item} id={navStyle.btnLogin}>Logout</li>
        </NavLink> 
    )
  }
  return (
    <nav className={navStyle.navbar}>

      <NavLink to="/" >
        <img src={logo} alt="logo" />
      </NavLink>

    <ul className={navStyle.navbarList}>
        <NavLink to="/apis" activeClassName={navStyle.active}  >
          <li className={navStyle.item}>Api</li>
        </NavLink>

        <NavLink to="/cities" activeClassName={navStyle.active} >
          <li className={navStyle.item}>Municipios</li>
        </NavLink>

        <NavLink to="/users" activeClassName={navStyle.active}  >
          <li className={navStyle.item}>Usuários</li>
        </NavLink>

        <NavLink to="/about" activeClassName={navStyle.active} >
          <li className={navStyle.item}>Fale Conosco</li>
        </NavLink>
        
        {name && btnLogout}
        
      </ul>
    </nav>
  );
}
export default Nav;
