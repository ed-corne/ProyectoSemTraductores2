import React, { useState } from "react";
import "../../../styles/lexicalAn.css";
import { analyze } from "./Analyze";

const Sintactic = () => {
  const [input, setInput] = useState(""); // Entrada del usuario
  const [sintacticData, setSintacticData] = useState([]);

  const handleSintacticAnalyze = () => {
    setSintacticData(analyze(input));
  };

  return (
    <div>
      <textarea
        placeholder="Ingrese la entrada aquí"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="inputArea__area"
      />
      <button onClick={handleSintacticAnalyze} >Analizar</button>

      
    </div>
  );
};

export default Sintactic;
