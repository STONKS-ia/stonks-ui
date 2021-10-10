import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import { useAuth } from "../../hooks/auth";
import LoginButton from "./loginButton";
import LogoutButton from "./logoutButton";
import navStyle from "./nav.module.scss";

function Nav() {
  const { name, signOut } = useAuth();
  // const [ logged , setLogged ] = useState<boolean>(false)

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
        
        
        {name ? ( <LoginButton/> ) : ( <LogoutButton/>)}

      </ul>
    </nav>
  );
}
export default Nav;
