import React from "react";
import "./styles/Catalogo.scss";
import { ReactComponent as Ellipse } from "../images/ellipse.svg";

export default function CatalogoHeader() {
  return (
    <div className="catalogo-header">
      <div className="header-container">
        <p className="catalogo-title">
          <Ellipse className="ellipse" />
          <strong>Catálogo</strong> Completo{" "}
        </p>
      </div>
    </div>
  );
}
