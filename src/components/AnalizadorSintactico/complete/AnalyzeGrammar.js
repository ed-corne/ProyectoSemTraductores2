import { analyzeInput } from "../../AnalizadorLexico/complete/AnalyzeInput"; //lexical analyzer
import { lrTable } from "./Grammar"; // the table of the grammar
import {
  //classes that we are going to use for save the elements in the stack
  ElementoPila,
  Terminal,
  NoTerminal,
  Elemento,
} from "../Mini/ElementoPila";
import { rules } from "./Rules"; //rules of the grammar

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
  console.log(tokens);

  const history = []; // to save all the process
  // expantion and reduccion of the input
  let token = 0;
  try {
    while (token < tokens.length) {
      //crste a new array from token to the end of the array and extract only lexema value
      const lexemas = tokens.slice(token).map((token) => token.lexema);
      const subString = lexemas.join(" ");

      const stackTop = stack[stack.length - 1].valorEP; // the row of the LR1 Table
      const inputTop = tokens[token].shortened; // the column of the LR1 Table
      console.log(stackTop, "--", inputTop);
      const accion = lrTable[stackTop][inputTop]; // the accion that was retuted by lr1Table

      const stackCopy = [...stack]; // create a copy of the actual stack
      // save the data of actual satck, input and the output
      history.push({
        stack: stackCopy,
        input: subString,
        output: accion,
      });

      // validate if the accion is a reduction or not
      if (accion < 0) {
        //reduction
        //get the corresponding rule
        const rule = rules[Math.abs(accion)];

        // remove elements from the stack
        for (let i = 0; i < rule.symbolsNumber * 2; i++) {
          stack.pop();
        }

        const stackTop = stack[stack.length - 1].valorEP; //new stackTop after remove elements from the stack

        const reductionAccion = lrTable[stackTop][rule.noTerminal]; // the accion that was retuted by lr1Table

        const newNoTerminal = new NoTerminal(rule.noTerminal); // add the no terminal of the rule
        stack.push(newNoTerminal);

        const newElemento = new Elemento(reductionAccion); // add the element to the stack
        stack.push(newElemento);
        console.log(stack);
      } else {
        //expantion
        // create new objects for the input and output and add them to the stack
        const newTerminal = new Terminal(tokens[token].lexema);
        stack.push(newTerminal);
        const newElemento = new Elemento(accion);
        stack.push(newElemento);
        token++; // only move to the next token if is an expantion
      }
    }
  } catch (e) {
    console.error(e);
  }
  console.log(stack);
  console.log("history final", history);
  return history;
};
