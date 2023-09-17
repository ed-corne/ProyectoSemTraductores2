## 🌿 Analizador Sintáctico (Implementación usando Objetos)

🍀 En esta práctica se utilizo una pila de objetos, se creo una clase ElementoPila, y 3 mas que heredan de esta clase las cuales son **Terminal, NoTerminal y Elemento**.

- [Clase Elemento pila](https://github.com/ed-corne/ProyectoSemTraductores2/blob/d089e8323c184778405a53108527beb4a6a938ca/src/components/AnalizadorSintactico/Mini/ElementoPila.js)

🍃 Despues de esto se cargo la gramatica en una tabla **LR(1)**.

- [Gramatica]([./src/components/AnalizadorSintactico/Mini/](https://github.com/ed-corne/ProyectoSemTraductores2/blob/d089e8323c184778405a53108527beb4a6a938ca/src/components/AnalizadorSintactico/Mini/Gramatica.js)

🌱 Posteriormente se creo una **funcion para analizar la entrada**, esto usando el analizador lexico para determinar los tokens y despues ya proceder con el algoritmo del analisis sintactico.

- [Funcion para el analisis sintactico](https://github.com/ed-corne/ProyectoSemTraductores2/blob/d089e8323c184778405a53108527beb4a6a938ca/src/components/AnalizadorSintactico/Mini/Analyze.js)

🌳 Finalmente solo se crea una **interfaz grafica** para renderizar la informacion del analisis.

- [Componente que renderiza los datos del analisis.](https://github.com/ed-corne/ProyectoSemTraductores2/blob/d089e8323c184778405a53108527beb4a6a938ca/src/components/AnalizadorSintactico/Mini/sintactic.jsx)

### 📷 Imagenes del funcionamiento del programa

1. Inicio de la pagina

    ![Menu](https://github.com/ed-corne/ProyectoSemTraductores2/blob/main/src/assets/newMenu.png)

2. Interfaz del analizador sintactico

    ![Mini sintactico](https://github.com/ed-corne/ProyectoSemTraductores2/blob/main/src/assets/miniSintac1.png)

3. Funcionamiento del analizador sintactico

    ![Funcionamiento del sintactico](https://github.com/ed-corne/ProyectoSemTraductores2/blob/main/src/assets/miniSintac2.png)

-----
Edwin Cornejo 💚👨🏻‍💻
