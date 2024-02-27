import React, { useState } from 'react';

export const ListaItens = () => {
  const [itens, setItens] = useState([
    'Maçã',
    'Banana',
    'Cereja',
    'Abacaxi',
    'Pêssego',
  ]);

  const [termoPesquisa, setTermoPesquisa] = useState('');

  const itensFiltrados = itens.filter(item =>
    item.toLowerCase().includes(termoPesquisa.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={termoPesquisa}
        onChange={(e) => setTermoPesquisa(e.target.value)}
        placeholder="Pesquisar itens..."
      />
      <ul>
        {itensFiltrados.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaItens;