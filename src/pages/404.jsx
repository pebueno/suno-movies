import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="page-wrap d-flex flex-row align-items-center">
      <span class="display-1 d-block">404</span>
      <div class="mb-4 lead">
        Desculpe-me a pagina que está procurando não existe.
      </div>
      <Link to="/">Voltar para página inicial</Link>
    </div>
  );
};

export default NotFound;
