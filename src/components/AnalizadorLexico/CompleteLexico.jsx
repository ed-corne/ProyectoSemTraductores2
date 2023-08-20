import React, { useState } from "react";
//2 hola23 25 24.23 80 + 90-10 mundo 80saludo d 3
const CompleteLexico = () => {
  const [inputText, setInputText] = useState("");
  const [tokens, setTokens] = useState([]);

  const types = {
    identifier: 0,
    integer: 1,
    real: 2,
    string: 3,
    type: 4,
    additionOp: 5,
    multiplicationOp: 6,
    relationalOp: 7,
    andOperator: 8,
    orOperator: 9,
    notOperator: 10,
    equalityOperator: 11,
    semicolon: 12,
    comma: 13,
    parenthesisOpen: 14,
    parenthesisClose: 15,
    keysOpen: 16,
    keysOpenClose: 17,
    equal: 18,
    ifReservedWord: 19,
    whileReservedWord: 20,
    returnReservedWord: 21,
    elseReservedWord: 22,
    money: 23,
    unknown: "unknown",
  };

  const dataTypes = {
    int: "tipo entero",
    float: "tipo real",
    void: "tipo vacio",
  };

  const reservedWords = {
    if: "if ReservedWord",
    else: "else ReservedWord",
    while: "while ReservedWord",
    return: "return ReservedWord",
  };

  const isDataType = (word) => {
    return word in dataTypes;
  };

  const isReservedWord = (word) => {
    return word in reservedWords;
  };

  const whoIsThisChar = (char) => {
    let charAcsii = char.charCodeAt(0);
    if (charAcsii === 32) {
      // space character
      return "space";
    }
    if (
      (charAcsii > 64 && charAcsii < 91) ||
      (charAcsii > 96 && charAcsii < 123)
    ) {
      // A-Z a-z
      return "letter";
    }
    if (charAcsii > 47 && charAcsii < 58) {
      return "number";
    }
    if (charAcsii === 46) {
      return "point";
    }
    if (charAcsii === 43 || charAcsii === 45) {
      return "addition";
    }
    if (charAcsii === 42 || charAcsii === 47) {
      return "multiplication";
    }
    // if (charAcsii === 61) {
    // return "asignation";
    // }
    if (charAcsii === 33 || (charAcsii > 59 && charAcsii < 63)) {
      return "relational";
    }
    if (charAcsii === 38) {
      return "and";
    }
    if (charAcsii === 124) {
      return "or";
    }
    if (charAcsii === 40 || charAcsii === 41) {
      return "parenthesis";
    }
    if (charAcsii === 123 || charAcsii === 125) {
      return "brackets";
    }
    if (charAcsii === 59) {
      return "semicolon";
    }
  };

  //////////
  const analyzeInput = () => {
    let currentToken = "";
    let tokens = [];
    let currentTokenSymbol = "";
    let currentType = "";

    const handleCurrentToken = (char, symbol) => {
      currentToken += char;
      currentTokenSymbol = symbol;
    };

    const pushToken = () => {
      if (currentToken !== "") {
        tokens.push({
          symbol: currentTokenSymbol,
          type: types.unknown,
          value: currentToken,
        });
        currentToken = "";
        currentTokenSymbol = "";
      }
    };

    for (const char of inputText) {
      switch (whoIsThisChar(char)) {
        case "space":
          pushToken();
          break;

        case "point":
          if (currentTokenSymbol === "number" && !currentToken.includes(".")) {
            handleCurrentToken(char, "real");
          } else if (currentToken !== "") {
            currentToken += char;
            currentTokenSymbol = "unknown";
          }
          break;

        case "number":
          if (currentTokenSymbol === "" || currentTokenSymbol === "number") {
            handleCurrentToken(char, "number");
          } else if (currentTokenSymbol === "real") {
            currentToken += char;
            //currentTokenSymbol = "real";
          } else if (currentTokenSymbol === "id") {
            handleCurrentToken(char, "id");
          } else if (currentToken !== "") {
            let tempChar = char;
            pushToken();
            currentToken = tempChar;
           // handleCurrentToken(char, "unknown");
          }
          break;

        case "letter":
          if (currentTokenSymbol === "id" || currentTokenSymbol === "") {
            handleCurrentToken(char, "id");
          } else if (currentToken !== "") {
            handleCurrentToken(char, "unknown");
          }
          break;
        case "addition":
          if (currentTokenSymbol === "") {
            handleCurrentToken(char, "addition");
          } else if (
            currentTokenSymbol === "number" ||
            currentTokenSymbol === "real"
          ) {
            tokens.push({
              symbol: currentTokenSymbol,
              type: types.unknown,
              value: currentToken,
            });
            currentTokenSymbol = "addition";
            currentToken = "";
            currentToken += char;
            tokens.push({
              symbol: currentTokenSymbol,
              type: types.unknown,
              value: currentToken,
            });
            currentToken = "";
            currentTokenSymbol = "";
          }
          break;

        case "multiplication":
          if (currentTokenSymbol === "") {
            handleCurrentToken(char, "multiplication");
          } else if (
            currentTokenSymbol === "number" ||
            currentTokenSymbol === "real"
          ) {
            tokens.push({
              symbol: currentTokenSymbol,
              type: types.unknown,
              value: currentToken,
            });
            currentTokenSymbol = "multiplication";
            currentToken = "";
            currentToken += char;
            tokens.push({
              symbol: currentTokenSymbol,
              type: types.unknown,
              value: currentToken,
            });
            currentToken = "";
            currentTokenSymbol = "";
          }
          break;

        case "relational":
          if (currentToken === "" && char === "=") {
            handleCurrentToken(char, "asignation");
          }else if (char === "=") {
            pushToken();
            handleCurrentToken(char, "asignation");
          }
          break;

        default:
          if (currentToken !== "") {
            // currentToken += char;
            currentTokenSymbol = "";
          }
          break;
      }
    }

    if (currentToken !== "") {
      tokens.push({
        symbol: currentTokenSymbol,
        type: types.unknown,
        value: currentToken,
      });
    }

    console.log(tokens);
    setTokens(tokens);
  };
  /////////

  return (
    <>
      <div>
        <textarea
          cols={100}
          rows={5}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></textarea>
        <button onClick={analyzeInput}>Analyze</button>
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
