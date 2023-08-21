# Analizador Léxico Completo en React

Este es un analizador léxico completo implementado en React que tiene la capacidad de identificar varios tipos de tokens en una cadena de entrada. El analizador léxico divide la cadena en tokens y los clasifica en diferentes categorías, como identificadores, enteros, reales, operadores, paréntesis, llaves, palabras reservadas, etc., siguiendo las reglas de tokenización especificadas.

## Capturas de Pantalla

### Menú
![Menú](https://github.com/ed-corne/ProyectoSemTraductores2/blob/main/src/assets/menu_lexico.png)

### Funcionamiento del Analizador
![Funcionamiento del Analizador](https://github.com/ed-corne/ProyectoSemTraductores2/blob/main/src/assets/cmplete_lexico.png)


## Características

- **Identificación de Tokens:** El analizador es capaz de reconocer una variedad de tokens, incluyendo identificadores, enteros, reales, operadores, paréntesis, llaves, palabras reservadas, etc., siguiendo las reglas de tokenización especificadas.

- **Reglas de Tokenización:** El analizador sigue las reglas definidas para tokenizar diferentes elementos:
  - Identificadores: Comienzan con una letra y pueden estar seguidos por letras o dígitos.
  - Enteros: Consisten en uno o más dígitos.
  - Reales: Consisten en un entero seguido de un punto y otro entero.
  - Operadores: +, -, *, /, =, <, >, <=, >=, !=, ==, &&, ||, !.
  - Símbolos: (, ), {, }, ;.

- **Interfaz Gráfica Amigable:** La aplicación presenta una interfaz gráfica intuitiva con un menú y una sección donde se muestra el funcionamiento del analizador léxico.

- **Palabras Reservadas:** El analizador reconoce y resalta palabras reservadas como if, while, return, else, int, float y void.

---

Este proyecto fue creado con ❤️ por Edwin Cornejo.