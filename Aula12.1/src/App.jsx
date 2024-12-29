import React, { useState } from 'react';

function App() {
  const [carrinho, setCarrinho] = useState(0);
  const [notificacao, setNotificacao] = React.useState(null);
  const timeoutRef = React.useRef();

  function handleClick() {
    setCarrinho(carrinho + 1);
    setNotificacao('Item adicionado ao carrinho');

    clearTimeout(timeoutRef.current); //Pega o valor anterior da referencia e limpa
    timeoutRef.current = setTimeout(() => { //Adiciona um timeout com um valor de referencia
      setNotificacao(null);
    }, 2000);
  }
  return (
    <div>
      <p>{notificacao}</p>
      <button onClick={handleClick}>Adicionar Carrinho {carrinho}</button>
    </div>
  );
}

export default App;
