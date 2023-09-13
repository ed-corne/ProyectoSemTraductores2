import {
  tokenTypes,
  keywords,
  dataType,
  operators,
  punctuation,
  digits,
  letters,
} from "./SymbolType";

export const analyzeInput = (inputText) => {
  let currentToken = "";
  const foundTokens = [];
  const inputCode = inputText + "$";

  let state = 0; // Estado inicial
  let isFloatingPoint = false;

  for (let i = 0; i < inputCode.length; i++) {
    const char = inputCode[i];

    switch (state) {
      case 0:
        if (char.charCodeAt(0) === 20) {
          state = 0;
        } else if (letters.test(char)) {
          state = 1; // Estado para identificadores o palabras clave
          currentToken += char;
        } else if (digits.test(char)) {
          state = 2; // Estado para números enteros
          currentToken += char;
        } else if (char === '"') {
          state = 4; // Cambia al estado para cadenas
          currentToken += char;
        } else if (operators.includes(char)) {
          state = 3; // Estado para operadores
          currentToken += char;
        } else if (punctuation.includes(char)) {
          foundTokens.push({
            lexema: char,
            token: tokenTypes[char].name,
            id: tokenTypes[char].id,
          });
          currentToken = "";
        } else if (char === '$') {
          foundTokens.push({
            lexema: char,
            token: tokenTypes["$"].name,
            id: tokenTypes["$"].id,
          });
        }
        break;
      case 1:
        if (letters.test(char) || digits.test(char)) {
          currentToken += char;
        } else {
          if (keywords.includes(currentToken)) {
            foundTokens.push({
              lexema: currentToken,
              token: tokenTypes[currentToken].name,
              id: tokenTypes[currentToken].id,
            });
          } else if (dataType.includes(currentToken)) {
            foundTokens.push({
              lexema: currentToken,
              token: tokenTypes["dataType"].name,
              id: tokenTypes["dataType"].id,
            });
          } else {
            foundTokens.push({
              lexema: currentToken,
              token: tokenTypes["id"].name,
              id: tokenTypes["id"].id,
            });
          }
          currentToken = "";
          state = 0; // Vuelve al estado inicial
          i--; // Revisa el caracter actual nuevamente
        }
        break;
      case 2:
        if (digits.test(char)) {
          currentToken += char;
        } else if (char === ".") {
          //state = 4; // Cambia al estado para números reales
          currentToken += char;
          isFloatingPoint = true; // Indica que es un número real
        } else {
          foundTokens.push({
            lexema: isFloatingPoint
              ? parseFloat(currentToken)
              : parseInt(currentToken, 10),
            token: isFloatingPoint
              ? tokenTypes["constanteReal"].name
              : tokenTypes["constanteEntero"].name,
            id: isFloatingPoint
              ? tokenTypes["constanteReal"].id
              : tokenTypes["constanteEntero"].id,
          });
          currentToken = "";
          state = 0; // Vuelve al estado inicial
          i--; // Revisa el caracter actual nuevamente
          isFloatingPoint = false; // Reinicia el estado de número real
        }
        break;

      case 3:
        if (operators.includes(currentToken + char)) {
          currentToken += char;
        } else {
          foundTokens.push({
            lexema: currentToken,
            token: tokenTypes[currentToken].name,
            id: tokenTypes[currentToken].id,
          });
          currentToken = "";
          state = 0; // Vuelve al estado inicial
          i--; // Revisa el caracter actual nuevamente
        }
        break;
      case 4: // Estado para cadenas
        currentToken += char;
        if (char === '"') {
          foundTokens.push({
            lexema: currentToken,
            token: tokenTypes["cadena"].name,
            id: tokenTypes["cadena"].id,
          });
          currentToken = "";
          state = 0; // Vuelve al estado inicial
        }
        break;
      default:
        // Handle error state
        currentToken += char;
        foundTokens.push({
          lexema: currentToken,
          token: "Error",
          id: "Error",
        });
        break;
    }
  }

  return foundTokens;
};
