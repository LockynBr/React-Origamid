import React from 'react';
import Titulo from '../Componentes/Titulo';
import Produto from '../Componentes/Produto';

const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

const produto = produtos.map((produto) => produto);

function Produtos() {
  return (
    <section>
      <Titulo texto="Produtos" />
      <Produto key={produto.nome} produto={produto} />
    </section>
  );
}

export default Produtos;
