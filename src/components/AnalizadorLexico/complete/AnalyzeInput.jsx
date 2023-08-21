import { whoIsThisChar, dataTypes, reservedWords, types } from "./SymbolType";

export const analyzeInput = (inputText) => {
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
        if (currentToken in dataTypes) {
          handleCurrentToken("", "dataType");
        } else if (currentToken in reservedWords) {
          handleCurrentToken("", "reservedWord");
        }
        pushToken();
        break;
      case "point":
        if (currentTokenSymbol === "number" && !currentToken.includes(".")) {
          handleCurrentToken(char, "real");
        } else if (currentToken !== "") {
          handleCurrentToken(char, "string");
        }
        break;
      case "number":
        if (currentTokenSymbol === "" || currentTokenSymbol === "number") {
          handleCurrentToken(char, "number");
        } else if (currentTokenSymbol === "real") {
          handleCurrentToken(char, "real");
        } else if (currentTokenSymbol === "id") {
          handleCurrentToken(char, "id");
        } else if (currentToken !== "") {
          let tempChar = char;
          pushToken();
          currentToken = tempChar;
        }
        break;
      case "letter":
        if (currentTokenSymbol === "id" || currentTokenSymbol === "") {
          handleCurrentToken(char, "id");
        } else if (currentToken !== "") {
          handleCurrentToken(char, "string");
        }
        break;
      case "addition":
        if (currentTokenSymbol === "") {
          handleCurrentToken(char, "addition");
        } else if (
          currentTokenSymbol === "number" ||
          currentTokenSymbol === "real"
        ) {
          pushToken();
          handleCurrentToken(char, "addition");
          pushToken();
        }
        break;
      case "multiplication":
        if (currentTokenSymbol === "") {
          handleCurrentToken(char, "multiplication");
        } else if (
          currentTokenSymbol === "number" ||
          currentTokenSymbol === "real"
        ) {
          pushToken();
          handleCurrentToken(char, "addition");
          pushToken();
        }
        break;
      case "relational":
        if (currentToken === "" && char === "=") {
          handleCurrentToken(char, "asignation");
        } else if (currentToken === "" && char === "!") {
          handleCurrentToken(char, "not");
        } else if (currentToken === "") {
          handleCurrentToken(char, "relational");
        } else if (
          currentToken !== "" &&
          (currentTokenSymbol === "asignation" ||
            currentTokenSymbol === "relational" ||
            currentTokenSymbol === "not")
        ) {
          handleCurrentToken(char, "relational");
        } else if (currentToken !== "") {
          pushToken();
          handleCurrentToken(char, "addition");
          pushToken();
        }
        break;
      case "and":
        if (currentToken === "" || currentTokenSymbol === "and") {
          handleCurrentToken(char, "and");
        } else if (currentToken !== "") {
          pushToken();
          handleCurrentToken(char, "and");
          pushToken();
        }
        break;
      case "or":
        if (currentToken === "" || currentTokenSymbol === "or") {
          handleCurrentToken(char, "or");
        } else if (currentToken !== "") {
          pushToken();
          handleCurrentToken(char, "or");
          pushToken();
        }
        break;
      case "brackets":
        if (currentToken === "" || currentTokenSymbol === "brackets") {
          handleCurrentToken(char, "brackets");
        } else if (currentToken !== "") {
          pushToken();
          handleCurrentToken(char, "brackets");
          pushToken();
        }

        break;
      case "parenthesis":
        if (currentToken === "" || currentTokenSymbol === "parenthesis") {
          handleCurrentToken(char, "parenthesis");
        } else if (currentToken !== "") {
          pushToken();
          handleCurrentToken(char, "parenthesis");
          pushToken();
        }

        break;
      case "semicolon":
        if (currentToken === "" || currentTokenSymbol === "semicolon") {
          handleCurrentToken(char, "semicolon");
        } else if (currentToken !== "") {
          pushToken();
          handleCurrentToken(char, "semicolon");
          pushToken();
        }

        break;

      default:
        handleCurrentToken(char, "string");
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
  //setTokens(tokens);
  return tokens;
};
