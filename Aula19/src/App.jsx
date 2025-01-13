import React from 'react';

function App() {
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');

  function handleChange({ target }) {
    setProduto(target.value);
  }

  return (
    <form>
      <h2>Cores: {cor}</h2>
      <label>
        <input
          type="radio"
          onChange={({ target }) => setCor(target.value)}
          checked={cor === 'azul'}
          value="azul"
        />
        Azul
      </label>
      <label>
        <input
          type="radio"
          onChange={({ target }) => setCor(target.value)}
          checked={cor === 'vermelho'}
          value="vermelho"
        />
        Vermelho
      </label>
      <h2>Produtos: {produto}</h2>
      <label>
        <input
          type="radio"
          onChange={handleChange}
          name="produto"
          value="smartphone"
        />
        Smartphone
      </label>
      <label>
        <input
          type="radio"
          onChange={handleChange}
          name="produto"
          value="notebook"
        />
        Notebook
      </label>
    </form>
  );
}

export default App;
