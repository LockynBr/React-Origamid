import React from 'react';

function App() {
  const [termos, setTermos] = React.useState(false);

  return (
    <form>
      <label>
        <input
          type="checkbox"
          value="Termos"
          checked={termos}
          onChange={({ target }) => setTermos(target.checked)}
        />
        Li e aceito os termos de uso.
      </label>
    </form>
  );
}

export default App;
