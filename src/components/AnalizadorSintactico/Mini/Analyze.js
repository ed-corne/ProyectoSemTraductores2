// Define la tabla LR(1)
import { analyzeInput } from "../../AnalizadorLexico/complete/AnalyzeInput";
const lr1Table = {
    0: { 0: 'd2', 5: '', 23: '', E: 1 },
    1: { 0: '', 5: 'r2', 23: 'r2', E: '' },
    2: { 0: '', 5: 'd3', 23: 'r2', E: '' },
    3: { 0: 'd2', 5: '', 23: '', E: 4 },
    4: { 0: '', 5: '', 23: 'r1', E: '' },
  };
  
  // Pila para el analizador sintáctico
  const stack = [];
  // Entrada (cadena a analizar)
  const input = analyzeInput("a + b"); // Ejemplo de entrada
  
  // Función de análisis sintáctico
  export function analyze() {
    let currentState = 0; // Estado inicial
    let inputIndex = 0; // Índice de entrada
  let a = 1;
    while (true) {
      const currentSymbol = input[inputIndex].id;
      console.log(currentSymbol)
      const action = lr1Table[currentState][currentSymbol];
      console.log(action)

      if (!lr1Table[currentState][currentSymbol]) {
        console.log(lr1Table[currentState][currentSymbol])
        console.error('Error de análisis sintáctico');
        break;
      }
  
      if (action.startsWith('d')) {
        // Desplazar
        stack.push(currentSymbol);
        stack.push(action.substr(1)); // Nuevo estado
        inputIndex++;
      } else if (action.startsWith('r')) {
        // Reducción
        const productionIndex = parseInt(action.substr(1));
        // Realiza la reducción según la producción
        reduce(productionIndex);
      } else if (action === 'r1') {
        // Aceptación
        console.log('Análisis sintáctico completado con éxito');
        break;
      }
    }
  }
  
  // Función para realizar una reducción
  function reduce(productionIndex) {
    // Implementa las reducciones según las producciones de la gramática
    switch (productionIndex) {
      case 0:
        // E → id + E
        stack.pop(); // Pop 'E'
        stack.pop(); // Pop '+'
        stack.pop(); // Pop 'id'
        stack.push('E'); // Push 'E'
        // Realiza transición de estado según 'E'
        currentState = stack[stack.length - 2];
        stack.push(lr1Table[currentState]['E']);
        break;
  
      case 2:
        // E → id
        stack.pop(); // Pop 'id'
        stack.push('E'); // Push 'E'
        // Realiza transición de estado según 'E'
        currentState = stack[stack.length - 2];
        stack.push(lr1Table[currentState]['E']);
        break;
  
      default:
        console.error('Error de reducción');
        break;
    }
  }
  
  // Inicia el análisis sintáctico
  //analyze();
  