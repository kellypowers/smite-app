import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png"
class NavBar extends React.Component
{
    render()
    {
        return (
            <nav>
                <img src={Logo} id="nav-logo" />
                <div id="nav-bar">
                    <Link to={"/gods"}  className="">Gods</Link>
                    <Link to={"/items"}  className="">Items</Link>
                </div>
            </nav>
        )
    }
}

export default NavBar;