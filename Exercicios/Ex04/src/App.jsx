import React, { useState } from 'react';

import Loader from './Components/Loader/Loader';
import Produto from './Components/Produtos/Produto';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);

  const fetchData = async (endpoint) => {
    const response = await fetch(
      'https://ranekapi.origamid.dev/json/api/produto/' + endpoint,
    );
    const json = await response.json();
    setData(json);
  };

  async function handleClick(e) {
    setLoading(true);
    const buttonName = e.target.textContent;
    await fetchData(buttonName);
    setLoading(false);
  }

  return (
    <div>
      <button style={{ margin: '.5rem' }} onClick={handleClick}>
        notebook
      </button>
      <button style={{ margin: '.5rem' }} onClick={handleClick}>
        smartphone
      </button>
      <button style={{ margin: '.5rem' }} onClick={handleClick}>
        tablet
      </button>
      {loading && <Loader />}
      {data && !loading && <Produto data={data} />}
    </div>
  );
}

export default App;
