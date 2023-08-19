import React, { useState } from 'react';

const CompleteLexico = () => {
  const [inputText, setInputText] = useState('');
  const [tokens, setTokens] = useState([]);

  const analyzeInput = () => {
    const idPattern = /^[a-zA-Z_][a-zA-Z0-9_]*$/;
    const realNumberPattern = /^[0-9]+\.[0-9]+$/;

    const inputTokens = inputText.split(/\s+/).map(token => {
      if (idPattern.test(token)) {
        return { token, type: 'ID' };
      } else if (realNumberPattern.test(token)) {
        return { token, type: 'REAL' };
      } else {
        return { token, type: 'UNKNOWN' };
      }
    });

    setTokens(inputTokens);
  };

  return (
    <div>
      <h1>Lexical Analyzer</h1>
      <textarea
        rows="5"
        cols="50"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={analyzeInput}>Analyze</button>

      <div>
        <h2>Tokens:</h2>
        <ul>
          {tokens.map((token, index) => (
            <li key={index}>
              Token: {token.token}, Type: {token.type}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CompleteLexico;
