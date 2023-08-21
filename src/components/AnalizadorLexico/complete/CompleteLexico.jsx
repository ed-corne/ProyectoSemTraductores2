import React, { useState } from "react";
import { analyzeInput } from "./AnalyzeInput";
import "../../../styles/lexicalAn.css";
//2 hola23 25 24.23 80 + 90-10 mundo 80saludo d 3
const CompleteLexico = () => {
  const [inputText, setInputText] = useState("");
  const [tokens, setTokens] = useState([]);

  const clean = () => {
    setInputText("");
    setTokens([]);
  }

  return (
    <div className="page">
      <h2 className="tokensArea__title">Complete lexical analyzer </h2>
      <div className="complete__page">
        <div className="inputArea">
          <h2 className="tokensArea__title">Inputs:</h2>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="inputArea__area"
          ></textarea>
          <button
            onClick={() => setTokens(analyzeInput(inputText))}
            className="inputArea__button"
          >
            Analyze
          </button>
          <button
            onClick={clean}
            className="inputArea__button --clean"
          >
            Clean
          </button>
        </div>
        <div className="tokensArea">
          <h2 className="tokensArea__title">Tokens:</h2>
          <table className="tokenArea__table">
            <tr className="tokenArea__row">
              <th className="tokenArea__column">Symbol</th>
              <th className="tokenArea__column">Value</th>
            </tr>
            {tokens.map((token, index) => (
              <tr key={index} className="tokenArea__row">
                <td className="tokenArea__column">{token.symbol}</td>
                <td className="tokenArea__column">{token.value}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default CompleteLexico;
