import React, { useState } from "react";
import { Search } from "./Search";
import { Link } from "react-router-dom";
import { ReactComponent as Collapsable } from "../images/Collapsable.svg";

import "./styles/Navbar.scss";
function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <p>
            SUNO<span>MOVIES</span>
          </p>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <Collapsable className={click ? null : "collapsable"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              <p>INÍCIO</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/products"
              className="nav-links active"
              onClick={closeMobileMenu}
            >
              <p>CATÁLOGO</p>
            </Link>
          </li>
        </ul>
        <Search />
      </nav>
    </>
  );
}

export default Navbar;
