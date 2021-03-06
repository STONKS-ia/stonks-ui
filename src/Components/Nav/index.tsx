import { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import { useAuth } from "../../hooks/auth";
import navStyle from "./nav.module.scss";

function Nav() {
  const { name, roles, signOut } = useAuth(); 
  const [ isLoggedIn , setIsLoggedIn ] = useState<boolean>(false)
  const [ isAdmin , setIsAdmin ] = useState<boolean>(false)
  const [ open, setOpen ] = useState<boolean>(false);
  const history = useHistory();

  useEffect(() => {
    if(name){
      setIsLoggedIn(true);
    }else{
      setIsLoggedIn(false);
    }
    if(roles === "ROLE_ADMIN"){
      setIsAdmin(true);
    }else{
      setIsAdmin(false);
    }

  }, [name, roles])

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

        {isAdmin && 
          <NavLink to="/users" activeClassName={navStyle.active}  >
            <li className={navStyle.item}>Usuários</li>
          </NavLink>}
        

        <NavLink to="/about" activeClassName={navStyle.active} >
          <li className={navStyle.item}>Fale Conosco</li>
        </NavLink>

        {/* If is not Logged In */}
        {!isLoggedIn && 
          <NavLink to="/login" activeClassName={navStyle.active} >
            <li className={navStyle.item} id={navStyle.btnLogin}>Login</li>
          </NavLink>}
        {/* If is Logged in */}
        {isLoggedIn &&
          <li className={navStyle.item} onClick={() => setOpen(!open)}>
            <i className="far  fa-user-circle fa-lg" />
            {name}
            <i className={!open ? "fas fa-chevron-down fa-xs" : "fas fa-chevron-up fa-xs"} />
            {open && <button onClick={async() => {await signOut(); history.push('/')} } >Logout</button>}
          </li>}
       
      </ul>
    </nav>
  );
}
export default Nav;