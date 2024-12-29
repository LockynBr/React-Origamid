import React from 'react';
import Produto from './Produto';

function App() {
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    const produtoLocal = localStorage.getItem('produto');
    if (produtoLocal !== null) setProduto(produtoLocal);
  }, []);

  React.useEffect(() => {
    if (produto !== null) localStorage.setItem('produto', produto);
  }, [produto]);

  async function handleClick(e) {
    setProduto(e.target.innerText);
  }

  return (
    <div>
      <h1>Preferência: {produto}</h1>
      <button style={{ marginRight: '1rem' }} onClick={handleClick}>
        notebook
      </button>
      <button style={{ marginRight: '1rem' }} onClick={handleClick}>
        smartphone
      </button>
      {<Produto produto={produto} />}
    </div>
  );
}

export default App;
