import React, { useState } from "react";
import "./styles/Search.scss";
import { Link } from "react-router-dom";
import { ReactComponent as SearchOne } from "../images/search1.svg";
import { ReactComponent as SearchTwo } from "../images/search2.svg";
// import axios from "axios";
// const api_key = process.env.REACT_APP_API_KEY;
// const BASE_URL = "https://api.themoviedb.org/3";

export function Search() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div>
      <div className="search-icon" onClick={handleClick}>
        <Link className={click ? null : "search"}>
          <SearchOne className="search-one" />
          <SearchTwo className="search-two" />
        </Link>
      </div>
      <div className={click ? "search-menu active" : "search-menu"}></div>
    </div>
  );
}
