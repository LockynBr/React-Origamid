import React from 'react';
import useLocalStorage from './useLocalStorage';

function App() {
  const [produto, setProduto] = useLocalStorage('produto', '');

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  return (
    <div>
      <p>Produto: {produto}</p>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
    </div>
  );
}

export default App;
