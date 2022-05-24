import React from "react";
import './Departamentos.css';
import { useEffect, useState } from "react";
import api from "../../services/api";

function Departamentos() {
  const [departamentos, setDepartamentos] = useState([]);

  useEffect(() => {
    api.get('departamentos')
    .then(response => setDepartamentos(response.data))
  }, []);

  return (
    <div className="Departamentos">
      <legend>Registros de Departamentos Cadastrados</legend>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {departamentos.map(departamento => (
            <tr key={departamento.id}>
              <td>{departamento.id}</td>
              <td>{departamento.dep_descricao}</td>
              <td>
                <button className="btn btn-warning">Editar</button>
                <button className="btn btn-danger">Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Departamentos;
