import React, { useState } from "react";
import "./styles/Search.scss";
import { Link } from "react-router-dom";
import { SearchCard } from "./SearchCard";
import { ReactComponent as SearchOne } from "../images/search1.svg";
import { ReactComponent as SearchTwo } from "../images/search2.svg";

export function Search() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div>
      <div className="search-icon" onClick={handleClick}>
        <Link className={click ? null : "search"}>
          <SearchOne className="search-one" />
          <SearchTwo className="search-two" />
        </Link>
      </div>
      <div className={click ? "background active" : "background"}>
        <div className={click ? "search-menu active" : "search-menu"}>
          <form>
            <input></input>
          </form>
          <div className="search-result">
            <SearchCard />
          </div>
        </div>
      </div>
    </div>
  );
}
