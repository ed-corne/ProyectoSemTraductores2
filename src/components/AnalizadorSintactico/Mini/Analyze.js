// import the funcion to analyze the input, it is the lexical analyzer
import { analyzeInput } from "../../AnalizadorLexico/complete/AnalyzeInput";
// import the table that Define the table of the grammar
import { lr1Table } from "./Gramatica";
// import the classes that we are going to use for save the elements in the stack
import { ElementoPila, Terminal, NoTerminal, Elemento } from "./ElementoPila";

// Main function to process the sintactic analysis
export const analyze = (input) => {
  // stack of elements (can be terminal, no terminal and element)
  const stack = [];

  // initialize the stack with "$0"
  const terminalTope = new Terminal("$");
  const terminalTope1 = new Terminal("0");
  stack.push(terminalTope);
  stack.push(terminalTope1);

  // array of the tokens that was analyzed by the lexical analyzer.
  const tokens = analyzeInput(input);
  // the actual elements in the stack, are copied to the stack history
  const stackCopy = [...stack];

  const history = [];

  // Expansion of the tokens
  for (let token in tokens) {
    // add to the input string a $ to the correct funcion of the Table LR1
    //becouse we need to know when the string was finished
    const inputCopy = input + "$";
    const subString = inputCopy.substring(token); // to save all the process
    const stackTop = stack[stack.length - 1].valorEP; // the row of the LR1 Table
    const inputTop = tokens[token].shortened; // the column of the LR1 Table
    const accion = lr1Table[stackTop][inputTop]; // the accion that was retuted by lr1Table
    const stackCopy = [...stack]; // create a copy of the actual stack
    // save the data of actual satck, input and the output
    history.push({
      stack: stackCopy,
      input: subString,
      output: accion,
    });
    // create new objects for the input and output and add them to the stack
    const newTerminal = new Terminal(tokens[token]);
    stack.push(newTerminal);
    const newElemento = new Elemento(accion);
    stack.push(newElemento);
  }

  // reduction of the input
  while (true) {
    const stackTop = stack[stack.length - 1].valorEP; // the last element that was added to the stack in the expansion
    const inputTop = "$"; // the input is empty, so we need $ to the reduccion process
    const accion = lr1Table[Math.abs(stackTop)][inputTop]; // the accion that was retuted by lr1Table
    const numberToRemove = accion === -1 ? 6 : accion === -2 ? 4 : 0; // number of elements to remove of the stack
    // if the accion doesn't exists, finish the reduction
    if (!accion) {
      break;
    }
    // remove the element from the stack
    for (let i = 0; i < numberToRemove; i++) {
      stack.pop();
    }
    // Create new objects
    const newNoTerminal = new NoTerminal("E");
    stack.push(newNoTerminal);
    const antepenultimate = stack[stack.length - 2].valorEP; // antepenultimate stack element
    const stackTop1 = stack[stack.length - 1].valorEP; // last stack element
    const accionInternStack = lr1Table[Math.abs(antepenultimate)][stackTop1]; // compare the last elemnt with the "E"
    const newElemento = new Elemento(accionInternStack);
    stack.push(newElemento);
    // create a copy of the actual stack
    const stackCopy1 = [...stack];
    // The normal accion compare the las element of the stack with the input "$"
    const accion2 = lr1Table[stack[stack.length - 1].valorEP][inputTop];
    // save the data of actual satck, input and the output
    history.push({
      stack: stackCopy1,
      input: "$",
      output: accion2,
    });
  }
  console.log("history final", history);
  return history;
};
