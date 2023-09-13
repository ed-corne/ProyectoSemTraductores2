import React, { useState } from "react";
import "../../../styles/lexicalAn.css";
import { analyzeInput } from "../../AnalizadorLexico/complete/AnalyzeInput";
import { analyze } from "./Analyze";

const Sintactic = () => {
  const [input, setInput] = useState(""); // Entrada del usuario
  const [output, setOutput] = useState(""); // Salida del análisis

  const stack = [0]; // Pila de estados
  const symbolStack = []; // Pila de símbolos
  let tokens = []; //
 

  // Tabla LR(1) (simplificada para tu gramática)


  const sintac = () => {
    tokens = analyzeInput(input);
    console.log(tokens)
  }


  return (
    <div>
      <textarea
        placeholder="Ingrese la entrada aquí"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="inputArea__area"
      />
      <button onClick={analyze} >Analizar</button>
      
    </div>
  );
};

export default Sintactic;
