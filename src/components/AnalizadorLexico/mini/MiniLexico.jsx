import React, { useState } from "react";
//hola23 25 24.23 80 + 90-10 mundo 80saludo
const MiniLexico = () => {
  const [inputText, setInputText] = useState("");
  const [tokens, setTokens] = useState([]);

  const isNumber = (char) => {
    let acsii = char.charCodeAt(0);
    return acsii > 47 && acsii < 58;
    //return isNaN(char);
  };

  const isSpace = (char) => {
    return char.charCodeAt(0) === 32;
  };

  const isLetter = (char) => {
    let acsii = char.charCodeAt(0);
    return (acsii > 64 && acsii < 91) || (acsii > 96 && acsii < 123);
  };

  const isPoint = (char) => {
    return char.charCodeAt(0) === 46;
  };

  //////////

  const analyzeInput = () => {
    let currentToken = "";
    let tokens = [];
    let currentTokenType = "";

    for (const char of inputText) {
      //const char = inputText[i];

      switch (true) {
        case isSpace(char):
          if (currentTokenType === "real" && !currentToken.includes(".")) {
            currentTokenType = "unknown";
            tokens.push({ type: currentTokenType, value: currentToken });
            currentToken = "";
            currentTokenType = "";
          }
          if (currentToken !== "") {
            tokens.push({ type: currentTokenType, value: currentToken });
            currentToken = "";
            currentTokenType = "";
          }
          break;

        case isPoint(char):
          if (currentTokenType === "real" && !currentToken.includes(".")) {
            currentToken += char;
          } else {
            if (currentToken !== "") {
              tokens.push({ type: currentTokenType, value: currentToken });
            }
            currentToken = char;
            currentTokenType = "unknown";
          }
          break;

        case isNumber(char):
          if (currentTokenType === "real" || currentTokenType === "") {
            currentToken += char;
            currentTokenType = "real";
          } else {
            if (currentTokenType === "id") {
              currentToken += char;
            } else if (currentTokenType === "unknown") {
              currentToken += char;
            } else if (currentToken !== "") {
              tokens.push({ type: currentTokenType, value: currentToken });
            } else {
              currentToken = char;
              currentTokenType = "unknown";
            }
          }
          break;

        case isLetter(char):
          if (currentTokenType === "id" || currentTokenType === "") {
            currentToken += char;
            currentTokenType = "id";
          } else {
            if (currentToken !== "") {
              currentToken += char;
              currentTokenType = "unknown";
              //tokens.push({ type: currentTokenType, value: currentToken });
            }
            //currentToken = char;
          }
          break;

        default:
          if (currentToken !== "") {
            //tokens.push({ type: currentTokenType, value: currentToken });
            currentToken += char;
            currentTokenType = "unknown";
          }

          //tokens.push({ type: currentTokenType, value: currentToken });
          break;
      }
    }

    if (currentToken !== "") {
      if (currentTokenType === "real" && !currentToken.includes(".")) {
        currentTokenType = "unknown";
      }
      tokens.push({ type: currentTokenType, value: currentToken });
    }

    console.log(tokens);
    setTokens(tokens);
  };

  //const inputText = "Hello 123.45 world foo_123 bar 3.14";
  // const tokens = identifyInput(inputText);

  /////////

  return (
    <div className="page">
      <h2 className="tokensArea__title">Mini lexical analyzer </h2>
      <div className="complete__page">
        <div className="inputArea">
          <h2 className="tokensArea__title">Inputs:</h2>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="inputArea__area"
          ></textarea>
          <button onClick={analyzeInput} className="inputArea__button">
            Analyze
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
                <td className="tokenArea__column">{token.type}</td>
                <td className="tokenArea__column">{token.value}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default MiniLexico;
