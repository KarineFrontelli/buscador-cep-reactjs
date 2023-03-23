import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import api from "./services/api";

import "./style.css";

function App() {
  const [input, setInput] = useState("");
  const [cep, setCep] = useState({});

  async function handleSearch() {
    if (input === "") {
      alert("Digite o CEP");
      return;
    }
    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setInput("");
    } catch (error) {
      alert("Erro ao buscar");
      setInput("");
    }
  }

  return (
    <div className="App-container">
      <h1 className="App-title">Buscador de CEP</h1>

      <div className="App-container-input">
        <input
          type="text"
          placeholder="Digite seu CEP"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button className="App-button" onClick={handleSearch}>
          <FiSearch size={25} color="#fff" />
        </button>
      </div>

      {Object.keys(cep).length > 0 && (
        <main className="App-main">
          <h2>CEP:{cep.cep}</h2>

          <span>{cep.logradouro}</span>
          <span>{cep.complemento}</span>
          <span>{cep.bairro}</span>
          <span>{cep.localidade} - {cep.uf}</span>

        </main>
      )}
      
    </div>
  );
}

export default App;
