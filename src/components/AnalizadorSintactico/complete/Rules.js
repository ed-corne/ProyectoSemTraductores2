export const rules = {
  //R1 <programa> ::= <Definiciones> 
  1: {
    rule: "<programa> ::= <Definiciones>",
    noTerminal: "programa",
    symbolsSequence: "<Definiciones>",
    symbolsNumber: 1,
  },
  2: {
    rule: "<Definiciones> ::= \e ",
    noTerminal: "Definiciones",
    symbolsSequence: "",
    symbolsNumber: 0,
  },
  3: {
    rule: "<Definiciones> ::= <Definicion> <Definiciones> ",
    noTerminal: "Definiciones",
    symbolsSequence: "<Definicion> <Definiciones> ",
    symbolsNumber: 2,
  },
  4: {
    rule: "<Definicion> ::= <DefVar>",
    noTerminal: "Definicion",
    symbolsSequence: "<DefVar>",
    symbolsNumber: 1,
  },
  5: {
    rule: "<Definicion> ::= <DefFunc> ",
    noTerminal: "Definicion",
    symbolsSequence: "<DefFunc>",
    symbolsNumber: 1,
  },
  //R6 <DefVar> ::= tipo identificador <ListaVar> ; 
  6: {
    rule: "<DefVar> ::= tipo identificador <ListaVar> ; ",
    noTerminal: "DefVar",
    symbolsSequence: "tipo identificador <ListaVar> ;",
    symbolsNumber: 4,
  },
  7: {
    rule: "<ListaVar> ::= \e",
    noTerminal: "ListaVar",
    symbolsSequence: "",
    symbolsNumber: 0,
  },
  9: {
    rule: "<DefFunc> ::= tipo identificador ( <Parametros> ) <BloqFunc>",
    noTerminal: "DefFunc",
    symbolsSequence: "tipo identificador ( <Parametros> ) <BloqFunc>",
    symbolsNumber: 6,
  },
  10: {
    rule: "<Parametros> ::= e",
    noTerminal: "Parametros",
    symbolsSequence: "",
    symbolsNumber: 0,
  },
  14: {
    rule: "<BloqFunc> ::= { <DefLocales> }",
    noTerminal: "BloqFunc",
    symbolsSequence: "{ <DefLocales> }",
    symbolsNumber: 3,
  },
  15: {
    rule: "<DefLocales> ::= e ",
    noTerminal: "DefLocales",
    symbolsSequence: "",
    symbolsNumber: 0,
  },
  16: {
    rule: "<DefLocales> ::= <DefLocal> <DefLocales> ",
    noTerminal: "DefLocales",
    symbolsSequence: "<DefLocal> <DefLocales>",
    symbolsNumber: 2,
  },
  18: {
    rule: "<DefLocal> ::= <Sentencia>",
    noTerminal: "DefLocal",
    symbolsSequence: "Sentencia",
    symbolsNumber: 1,
  },
  //R24 <Sentencia> ::= return <ValorRegresa> ;
  24: {
    rule: "<Sentencia> ::= return <ValorRegresa> ;",
    noTerminal: "Sentencia",
    symbolsSequence: "return <ValorRegresa> ;",
    symbolsNumber: 3,
  },
  25: {
    rule: "<Sentencia> ::= <LlamadaFunc> ;",
    noTerminal: "Sentencia",
    symbolsSequence: "<LlamadaFunc> ;",
    symbolsNumber: 2,
  },
  30: {
    rule: "<ValorRegresa> ::= <Expresion>",
    noTerminal: "ValorRegresa",
    symbolsSequence: "Expresion",
    symbolsNumber: 1,
  },
  32: {
    rule: "<Argumentos> ::= <Expresion> <ListaArgumentos>",
    noTerminal: "Argumentos",
    symbolsSequence: "<Expresion> <ListaArgumentos>",
    symbolsNumber: 2,
  },
  33: {
    rule: "<ListaArgumentos> ::= e",
    noTerminal: "ListaArgumentos",
    symbolsSequence: "",
    symbolsNumber: 0,
  },
  37: {
    rule: "<Termino> ::= entero",
    noTerminal: "Termino",
    symbolsSequence: "entero",
    symbolsNumber: 1,
  },
  39: {
    rule: "<Termino> ::= cadena",
    noTerminal: "Termino",
    symbolsSequence: "cadena",
    symbolsNumber: 1,
  },
  40: {
    rule: "<LlamadaFunc> ::= identificador ( <Argumentos> ) ",
    noTerminal: "LlamadaFunc",
    symbolsSequence: "identificador ( <Argumentos> )",
    symbolsNumber: 4,
  },
  52: {
    rule: "<Expresion> ::= <Termino>",
    noTerminal: "Expresion",
    symbolsSequence: "Termino",
    symbolsNumber: 1,
  },
};
