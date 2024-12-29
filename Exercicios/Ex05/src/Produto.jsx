import React from 'react';

function Produto({ produto }) {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    if (produto !== null) {
      const fetchData = async (produto) => {
        const response = await fetch(
          `https://ranekapi.origamid.dev/json/api/produto/${produto}`,
        );
        const json = await response.json();
        setData(json);
      };
      fetchData(produto);
    }
  }, [produto]);

  if (data === null) return null;
  return (
    <div>
      <h1>{data.nome}</h1>
      <p>R$ {data.preco}</p>
    </div>
  );
}

export default Produto;
