export const tokenTypes = {
  id: { id: 0, name: "identificador", shortened: "identificador" },

  constanteEntero: { id: 1, name: "Entero", shortened: "entero" },
  constanteReal: { id: 2, name: "Real", shortened: "real"},
  cadena: { id: 3, name: "Cadena", shortened: "cadena"},
  dataType: { id: 4, name: "Tipo de dato", shortened: "tipo"},  

  "+": { id: 5, name: "Operador Suma", shortened: "opSuma" },
  "-": { id: 5, name: "Operador Suma", shortened: "opSuma"},

  "*": { id: 6, name: "Operador Multiplicacion", shortened: "opMul"},
  "/": { id: 6, name: "Operador Multiplicacion", shortened: "opMul" },

  "<": { id: 7, name: "Operador Relacional", shortened: "opRelac" },
  ">": { id: 7, name: "Operador Relacional", shortened: "opRelac" },
  "<=": { id: 7, name: "Operador Relacional", shortened: "opRelac" },
  ">=": { id: 7, name: "Operador Relacional", shortened: "opRelac" },

  "||": { id: 8, name: "Operador OR", shortened: "opOr" },
  "&&": { id: 9, name: "Operador AND", shortened: "opAnd" },
  "!": { id: 10, name: "Operador Not", shortened: "opNot" },
  "!=": { id: 11, name: "Operador Igualdad", shortened: "opIgualdad" },
  "==": { id: 11, name: "Operador Igualdad", shortened: "opIgualdad" },

  ";": { id: 12, name: "Punto y coma", shortened: ";" },
  ",": { id: 13, name: "Coma", shortened: "coma" },
  "(": { id: 14, name: "Parentesis Apertura", shortened: "(" },
  ")": { id: 15, name: "Parentesis Cierre", shortened: ")" },
  "{": { id: 16, name: "Llave Apertura", shortened: "{" },
  "}": { id: 17, name: "Llave cierre", shortened: "}" },
  "=": { id: 18, name: "Igual", shortened: "=" },

  if: { id: 19, name: "Condicional if", shortened: "if" },
  while: { id: 20, name: "Condicional while", shortened: "while" },
  return: { id: 21, name: "Palabra reserbada", shortened: "return" },
  else: { id: 22, name: "Condicional else", shortened: "else" },
  $: { id: 23, name: "Terminal", shortened: "$" },
};

export const keywords = ["if", "while", "return", "else", "constante"];
export const dataType = ["int", "float", "char", "void", "string"];
export const operators = [
  "||",
  "&&",
  "+",
  "-",
  "==",
  "<",
  ">",
  "<=",
  ">=",
  "!=",
  "*",
  "/",
  "|",
  "&",
  "!",
  "=",
];
export const punctuation = [";", ",", "(", ")", "{", "}"];
export const digits = /[0-9]/;
export const letters = /[a-zA-Z]/;