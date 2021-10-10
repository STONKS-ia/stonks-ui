import { NavLink } from "react-router-dom";
import navStyle from "./nav.module.scss";


function LoginButton() {
    return (
        <NavLink to="/login" activeClassName={navStyle.active} >
          <li className={navStyle.item} id={navStyle.btnLogin}>Login</li>
        </NavLink>
    )
}

export default LoginButton;