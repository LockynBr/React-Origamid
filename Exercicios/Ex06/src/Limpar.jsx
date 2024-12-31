import React, { useContext } from 'react';
import { GlobalContext } from './GlobalContext';

function Limpar() {
  const { limparDados } = useContext(GlobalContext);
  return <button onClick={limparDados}>Limpar Dados</button>;
}

export default Limpar;
