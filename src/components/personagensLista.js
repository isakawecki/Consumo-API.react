import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Personagem from './Personagem.js';

function ListaPersonagens() {
  const [personagens, definirPersonagens] = useState([]);
  const [busca, definirBusca] = useState('');

  useEffect(() => {
    axios.get('https://api.disneyapi.dev/character')
      .then(resposta => {
        definirPersonagens(resposta.data.data);
      })
      .catch(erro => {
        console.error('Erro ao buscar personagens:', erro);
      });
  }, []);

  const buscarPersonagens = (texto) => {
    definirBusca(texto);

    if (texto.trim() === '') {
      axios.get('https://api.disneyapi.dev/character')
        .then(resposta => {
          definirPersonagens(resposta.data.data);
        });
    } else {
      axios.get(`https://api.disneyapi.dev/character?name=${texto}`)
        .then(resposta => {
          definirPersonagens(resposta.data.data);
        })
        .catch(() => definirPersonagens([]));
    }
  };

  return (
<div className="containerPersonagens">
  <div className="parteTitulo">
    <h1 className="tituloPagina">Personagens da Disney</h1>

    <input
      type="text"
      placeholder="Buscar personagem..."
      value={busca}
      onChange={(evento) => buscarPersonagens(evento.target.value)}
      className="barraBusca"
    />
  </div>

  <div className="listaPersonagens">
    {personagens.length > 0 ? (
      personagens.map(personagem => (
        <Personagem key={personagem._id} personagem={personagem} />
      ))
    ) : (
      <p>Nenhum personagem encontrado.</p>
    )}
  </div>
</div>

  );
}

export default ListaPersonagens;
