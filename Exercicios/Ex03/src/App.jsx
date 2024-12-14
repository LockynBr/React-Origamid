import React from 'react';

import Header from './Header/Header';
import Home from './pages/Home';
import Produtos from './pages/Produtos';

function App() {
  const { pathname } = window.location;

  let Page;
  if (pathname === '/produtos') {
    Page = Produtos;
  } else {
    Page = Home;
  }

  return (
    <section>
      <Header />
      <Page />
    </section>
  );
}

export default App;
