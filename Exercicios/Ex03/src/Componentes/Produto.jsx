import React from 'react';

function Produto({ produto }) {
  return (
    <div>
      {produto.map(({ nome, propriedades }, i) => (
        <div
          style={{
            border: '1px solid black',
            padding: '16px',
            margin: '16px auto',
          }}
        >
          <p>{nome}</p>
          <ul>
            {propriedades.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Produto;
