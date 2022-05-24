import React from "react";
import './Times.css';
import { useEffect, useState } from "react";
import api from "../../services/api";

function Times() {
  const [times, setTimes] = useState([]);

  useEffect(() => {
    api.get('times')
    .then(response => setTimes(response.data))
  }, []);

  return (
    
    <div className="Times">
      <legend>Registros de Times Cadastrados</legend>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Apelido</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {times.map(time => (
            <tr key={time.id}>
              <td>{time.id}</td>
              <td>{time.tim_descricao}</td>
                <td>{time.tim_apelido}</td>
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


export default Times;
