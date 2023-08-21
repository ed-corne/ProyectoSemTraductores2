export const types = {
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

export const dataTypes = {
    int: "tipo entero",
    float: "tipo real",
    void: "tipo vacio",
  };

  export const reservedWords = {
    if: "if ReservedWord",
    else: "else ReservedWord",
    while: "while ReservedWord",
    return: "return ReservedWord",
  };

  export const whoIsThisChar = (char) => {
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