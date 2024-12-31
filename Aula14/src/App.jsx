import React from 'react';
import UserContext from './UserContext';
import Produto from './Produto';

function App() {
  return (
    <UserContext.Provider value={{ nome: 'Paulo' }}>
      <Produto />
    </UserContext.Provider>
  );
}

export default App;
