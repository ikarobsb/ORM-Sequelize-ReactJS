import React from "react";
import './MenuHorizontal.css';


function MenuHorizontal() {
  return (
    <div className="MenuHorizontal">
     <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Menu</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(Página atual)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Empresas</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Categorias</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Departamentos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Times</a>
      </li>
    
    </ul>
  </div>
</nav>
    </div>
  );
}

export default MenuHorizontal;
