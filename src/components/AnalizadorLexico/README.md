# Que es un analizador léxico

<aside>

✅ **Es la primera fase de un compilador**

✅ Su principal función consiste en leer los caracteres de entrada y elaborar como salida una secuencia de componentes léxicos que utiliza el analizador sintáctico para hacer el análisis

</aside>

## 🍃 ¿Que es?

Es la primera fase de un compilador, tiene como entrada el Código fuente de un programa y este ayuda a leer los caracteres de entrada para poder formar componentes a estos se les llama tokens y así poder identificarlos y posteriormente pasar la informacion al analizador sintáctico, es decir el proceso de traducción.

- los lenguajes de programacion contienen unas reglas especificas que definen el léxico, estas reglas suelen ser expresadas en expresiones regulares. que definen el conjunto de posibles secuencias de caracteres que forman un token.

## 🌱 Análisis

El analizador léxico analiza el código fuente,  y busca patrones específicos que coincidan con los tokens definidos. y así es como se encuentran los lexemas, estos son la base para construir los tokens.

**************Ejemplo**************

Por ejemplo, si tienes el código fuente:

```python
x = 42;
```

El analizador léxico identificaría varios lexemas:

- "x" como un identificador.
- "=" como un operador de asignación.
- "42" como un lexema numérico.
- ";" como un símbolo de finalización.

## 🍃 Token

**Un token es una cadena con un significado asignado y, por lo tanto, identificado**
«nombre de token» y un «valor de token»

- identificador
    
    nombres que elige el programador
    
- Palabra clave
    
    Nombres que ya están el lenguaje de programacion
    
- separador
    
    caracteres de puntuación y delimitadores emparejados;
    
- literal
    
    literales numéricos, lógicos, textuales, de referencia;
    
- comentario
    
    línea, bloque
    
- Ejemplos
    
    
    | Nombre simbólico | Ejemplos de valores de token |
    | --- | --- |
    | identificador | x, color, ARRIBA |
    | palabra clave | si, mientras, retorno |
    | separador | }, (, ; |
    | operador | +, <, = |
    | literal | verdadero, 6,02e23, "música" |
    | comentario | /* Recupera datos de usuario */, // debe ser negativo |

## 🌱 otras funciones

- Eliminar los comentarios del programa.
- Eliminar espacios en blanco, tabuladores, retorno de carro, etc, y en general, todo aquello que carezca de significado según la sintaxis del lenguaje.
- Reconocer los identificadores de usuario, números, palabras reservadas del lenguaje y tratarlos correctamente.
- Llevar la cuenta del número de línea por la que va leyendo, por si se produce algún error, dar información sobre donde se ha producido.
- Avisar de errores léxicos. Por ejemplo, si @ no pertenece al lenguaje, avisar de un error.
- Puede hacer funciones de preprocesador.


### Conceptos relacionados

<aside>

✅ **El lexema** es la secuencia de caracteres que el analizador léxico encuentra en el código fuente y que coincide con un patrón específico definido para un tipo de token

</aside>

<aside>

✅ **Automata Finito** consiste en un conjunto finito de estados, una entrada (alfabeto) y una serie de reglas de transición que determinan cómo el autómata cambia de estado en respuesta a una entrada dada.

</aside>

