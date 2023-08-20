import React, { useState } from "react";
import { analyzeInput } from "./AnalyzeInput";
//2 hola23 25 24.23 80 + 90-10 mundo 80saludo d 3
const CompleteLexico = () => {
  const [inputText, setInputText] = useState("");
  const [tokens, setTokens] = useState([]);

  return (
    <>
      <div>
        <textarea
          cols={100}
          rows={5}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></textarea>
        <button onClick={() => setTokens(analyzeInput(inputText))}>
          Analyze
        </button>
        <div>
          <h2>Tokens:</h2>
          <ul>
            {tokens.map((token, index) => (
              <li key={index}>
                Symbol: {token.symbol}, Value: {token.value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CompleteLexico;
