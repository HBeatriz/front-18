import { useState } from "react";

function App() {
  // Criando um estado para armazenar o valor do contador
  const [contador, setContador] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🚀 Contador Simples</h1>
      <h2>{contador}</h2>
      
      <button 
        onClick={() => setContador(contador + 1)} 
        style={{ margin: "5px", padding: "10px" }}
      >
        ➕ Incrementar
      </button>

      <button 
        onClick={() => setContador(contador - 1)} 
        style={{ margin: "5px", padding: "10px" }}
      >
        ➖ Decrementar
      </button>
    </div>
  );
}

export default App;
