import { NavLink } from "react-router-dom";
import navStyle from "./nav.module.scss";


function LogoutButton() {
    return (
        <NavLink to="/login" activeClassName={navStyle.active} >
          <li className={navStyle.item} id={navStyle.btnLogin}>Logout</li>
        </NavLink>
    )
}

export default LogoutButton;