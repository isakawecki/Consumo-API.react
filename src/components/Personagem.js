import React, { useState } from 'react';


function Personagem({ personagem }) {
  const [mostrarModal, setMostrarModal] = useState(false);

  const abrirModal = () => setMostrarModal(true);
  const fecharModal = () => setMostrarModal(false);

  return (
    <>
      <div className="quadrado" onClick={abrirModal}>
        <img src={personagem.imageUrl} alt={personagem.name} />
        <h2 className="nomeCortado">{personagem.name}</h2>
        <p className="textoCortado"><strong>Filmes:</strong> {personagem.films.length > 0 ? personagem.films.join(', ') : 'Não participa'}</p>
        <p className="textoCortado"><strong>Séries:</strong> {personagem.tvShows.length > 0 ? personagem.tvShows.join(', ') : 'Não participa'}</p>
      </div>

      {mostrarModal && (
        <div className="modalFundo" onClick={fecharModal}>
          <div className="modalConteudo" onClick={e => e.stopPropagation()}>
            <h2>{personagem.name}</h2>
            <img src={personagem.imageUrl} alt={personagem.name} />
            <p><strong>Filmes:</strong> {personagem.films.length > 0 ? personagem.films.join(', ') : 'Não participa'}</p>
            <p><strong>Séries:</strong> {personagem.tvShows.length > 0 ? personagem.tvShows.join(', ') : 'Não participa'}</p>
            <button onClick={fecharModal}>Fechar</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Personagem;
