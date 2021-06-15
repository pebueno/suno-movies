import React from "react";
import "./styles/Button.scss";
import { Link } from "react-router-dom";

export function Button() {
  return (
    <Link to="sign-up">
      <button className="btn">call to action</button>
    </Link>
  );
}
