import { FiSearch } from "react-icons/fi";

import "./style.css";

function App() {
  return (
    <div className="App-container">
      <h1 className="App-title">Buscador de CEP</h1>

      <div className="App-container-input">
        <input type="text" placeholder="Digite seu CEP" />
        <button className="App-button">
          <FiSearch size={25} color="#fff" />
        </button>
      </div>

      <main className="App-main">
        <h2>CEP:</h2>

        <span>Rua:</span>
        <span>Complemento:</span>
        <span>Bairro:</span>
        <span>Cidade:</span>
      </main>
    </div>
  );
}

export default App;
