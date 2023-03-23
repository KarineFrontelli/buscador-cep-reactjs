import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import api from "./services/api";

import "./style.css";

function App() {

  const [input, setInput] = useState('');

 async function handleSearch() {
  if (input === '') {
    alert('Digite o CEP')
    return
  }
  try {
    const response = await api.get(`${input}/json`);
    console.log(response.data)
  } catch (error) {
    alert('Erro ao buscar')
    setInput('')
  }
 }

  return (
    <div className="App-container">
      <h1 className="App-title">Buscador de CEP</h1>

      <div className="App-container-input">
        <input type="text" placeholder="Digite seu CEP" value={input} onChange={(e) => setInput(e.target.value)} />

        <button className="App-button" onClick={handleSearch}>
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
