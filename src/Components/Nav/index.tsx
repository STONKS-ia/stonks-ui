import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import { useAuth } from "../../hooks/auth";
import navStyle from "./nav.module.scss";

function Nav() {
  const { name, signOut } = useAuth(); 
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

      </ul>
    </nav>
  );
}
export default Nav;

export const goToLogin = () =>{
  return (
      <NavLink to="/login" activeClassName={navStyle.active} >
        <li className={navStyle.item} id={navStyle.btnLogin}>Login</li>
      </NavLink>  
  )
}
export const  isLogged = (username: string)  => {
    return (
        <li className={navStyle.item} id={navStyle.btnLogin}>{username}</li>
    )
}

export const BtnLogout = () =>{
    const { signOut } = useAuth();
    return (
        <button onClick={async () => {await signOut}}>Logout</button>
    )
}
