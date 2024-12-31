import React from 'react';
import { GlobalContext } from './GlobalContext';

function Produto() {
  const global = React.useContext(GlobalContext);

  return (
    <div>
      Produto: {global.contar}
      <button onClick={() => global.adicionarDois()}>Add</button>
    </div>
  );
}

export default Produto;
