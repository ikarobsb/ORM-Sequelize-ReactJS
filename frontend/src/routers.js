import React from "react";
import Geral from "./components/Geral/Geral.js"
import { Route, Routes } from "react-router-dom";


import Usuarios from "./components/Usuario/Usuarios.js"
import Distribuidoras from "./components/Distribuidoras/Distribuidoras.js"
import AreaConcessao from "./components/AreaConcessao/AreaConcessao.js"

function Routers(){
    return(
        <Routes>
            <Route exact path="/" element={<Geral/>}/>
            
          
            <Route exact path="/usuarios" element={<Usuarios/>}/>
            <Route exact path="/distribuidoras" element={<Distribuidoras/>}/>
            <Route exact path="/areaconcessao" element={<AreaConcessao/>}/>
        </Routes>
    )
}
export default Routers;