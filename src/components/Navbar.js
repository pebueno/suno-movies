import React, { useState } from "react";
import { Search } from "./Search";
import { NavLink } from "react-router-dom";
import { ReactComponent as Collapsable } from "../images/Collapsable.svg";
import "./styles/Navbar.scss";

function Navbar() {
  const [click, setClick] = useState(false);
  function handleClick() {
    if (click === false) {
      document.getElementById("page-mask").style.display = "block";
    } else {
      document.getElementById("page-mask").style.display = "none";
    }
    setClick(!click);
  }

  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <NavLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <p>
            SUNO<span>MOVIES</span>
          </p>
        </NavLink>
        <div className="menu-icon" onClick={handleClick}>
          <Collapsable className={click ? null : "collapsable"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              to="/"
              className="nav-links"
              activeClassName="selected"
              exact={true}
              onClick={closeMobileMenu}
            >
              <p>INÍCIO</p>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/catalago"
              className="nav-links"
              activeClassName="selected"
              onClick={closeMobileMenu}
            >
              <p>CATÁLOGO</p>
            </NavLink>
          </li>
        </ul>
        <Search />
      </nav>
    </>
  );
}

export default Navbar;
