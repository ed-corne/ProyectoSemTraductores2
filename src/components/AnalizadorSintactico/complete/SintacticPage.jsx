import React, { useState } from "react";
import { analyze } from "./AnalyzeGrammar";
import "../../../styles/lexicalAn.css";

const SintacticPage = () => {
  const [input, setInput] = useState(""); // Entrada del usuario
  const [sintacticData, setSintacticData] = useState([]);

  const handleSintacticAnalyze = () => {
    setSintacticData(analyze(input));
  };

  const clean = () => {
    setInput("");
  };

  return (
    <div className="page">
      <h2 className="tokensArea__title">Sintactic analyzer </h2>
      <div className="complete__page">
        <div className="inputArea">
          <h2 className="tokensArea__title">Inputs</h2>
          <textarea
            placeholder="Ingrese la entrada aquí"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="inputArea__area"
          />
          <button
            onClick={handleSintacticAnalyze}
            className="inputArea__button"
          >
            Analyze
          </button>
          <button onClick={clean} className="inputArea__button --clean">
            Clean
          </button>
        </div>
        <div className="tokensArea">
          <h2 className="tokensArea__title">Syntactic analysis</h2>
          <table className="tokenArea__table">
            <tr className="tokenArea__row">
              <th className="tokenArea__column">Stack</th>
              <th className="tokenArea__column">Input</th>
              <th className="tokenArea__column">Output</th>
            </tr>
            {sintacticData.map((process, index) => (
              <tr key={index} className="table__row">
                <td className="table__column">
                  {process.stack.map((item) => item.valorEP)}
                </td>
                <td className="table__column">{process.input}</td>
                <td className="table__column">{process.output}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default SintacticPage;
