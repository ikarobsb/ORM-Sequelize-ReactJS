import React from "react";
import './MenuHorizontal.css';
import {Link} from 'react-router-dom';


function MenuHorizontal() {
  return (
    <div className="MenuHorizontal">
     <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="/">Home</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
    
      <li class="nav-item">
        <a class="nav-link" href="/categorias">Categorias</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/departamentos">Departamentos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/times">Times</a>
      </li>
      {/* <li>
        <Link to="/categorias">Categorias</Link>
      </li> */}
      {/* <li>
        <Link to="/departamentos">Departamentos</Link>
      </li>
      <li>
        <Link to="/times">Times</Link>
      </li> */}
    
    </ul>
  </div>
</nav>
    </div>
  );
}

export default MenuHorizontal;
