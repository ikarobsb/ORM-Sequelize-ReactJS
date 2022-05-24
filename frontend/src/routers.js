import React from "react";
import Geral from "./components/Geral/Geral.js"
import { Route, Routes } from "react-router-dom";
import Categorias from "./components/Categorias/Categorias.js" 
import Departamentos from "./components/Departamentos/Departamentos.js"
import Times from "./components/Times/Times.js"

function Routers(){
    return(
        <Routes>
            <Route exact path="/" element={<Geral/>}/>
            <Route exact path="/categorias" element={<Categorias/>}/>
            <Route exact path="/departamentos" element={<Departamentos/>}/>
            <Route exact path="/times" element={<Times/>}/> 
        </Routes>
    )
}
export default Routers;