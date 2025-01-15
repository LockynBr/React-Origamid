import React from 'react';

const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

function App() {
  const [cores, setCores] = React.useState([]);

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  function handleChecked(cor) {
    return cores.includes(cor);
  }

  return (
    <form>
      {coresArray.map((coresArr) => {
        return (
          <label key={coresArr} style={{ textTransform: 'capitalize' }}>
            <input
              type="checkbox"
              value={coresArr}
              checked={handleChecked(coresArr)}
              onChange={handleChange}
            />
            {coresArr}
          </label>
        );
      })}
    </form>
  );
}

export default App;
