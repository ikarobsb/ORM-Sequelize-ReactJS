import React from "react";
import './Categorias.css';
import { useEffect, useState } from "react";
import api from "../../services/api";

import Tabela from '../Tabelas/CategoriasTabela.js'


function handleDelete(id) {
  api.delete(`categorias/${id}`)
  .then(response => {
    alert(`Registro excluído com sucesso!`);
    window.location.reload();
  })
  .catch(error => {
    alert(`Erro ao excluir categoria: ${error}`);
  });
}


function Categorias() {
  
  const[categorias, setCategorias] = useState([]);

  useEffect(() => {
    api.get('categorias')
    .then(response => setCategorias(response.data))
  }, []);

  return (
    
    <div id="idCategorias" className="categorias">
      <div id="corpo_rel" className="taelaParams">
      <Tabela
        dados = {categorias}
        registros = {categorias.length}
      >
      </Tabela>
      </div>
    </div>


    // <div className="Categorias">
    //   <div className="card">
    //   <h1>Registros de Categorias Cadastrados</h1>
    //   <table className="table table-striped">
    //     <thead>
    //       <tr>
    //         <th>ID</th>
    //         <th>Nome</th>
    //         <th>Ações</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {categorias.map(categoria => (
    //         <tr key={categoria.id}>
    //           <td>{categoria.id}</td>
    //           <td>{categoria.cat_descricao}</td>
              
    //           <td>
    //             {/* <button className="btn btn-warning">Editar</button> */}
    //             <button className="btn btn-danger" onClick={() => handleDelete(categoria.id)}>Excluir</button>
    //           </td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
    //   </div>
      
  );
}

export default Categorias;
