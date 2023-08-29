# Proyecto Final: Compilador con React y Vite

¡Bienvenidos al repositorio del Seminario de Traductores 2! En este repositorio, encontrarás todos los recursos y actividades relacionados con el curso, así como el proyecto final: la construcción de un compilador. Utilizaremos la tecnología **React con Vite** para llevar a cabo este emocionante proyecto. A continuación, se detalla cómo navegar y utilizar este repositorio.
   
## 📂 Actividades de la materia

### 🍀 Analizador Léxico 
1. [¿Qué es es un analizador léxico ?](./src/components/AnalizadorLexico)
2. [Mini generador léxico ](./src/components/AnalizadorLexico/mini/)
3. [Analizador léxico completo.](./src/components/AnalizadorLexico/complete/)
### 🌿 Analizador Sintáctico 
5. [Mini analizador sintáctico (Excel)](./src/components/AnalizadorSintactico/Mini/)
6. [Mini analizador sintáctico (Codigo)](./src/components/AnalizadorSintactico/Mini/)

## Estructura del Proyecto

- `src/`: Contiene los archivos fuente del proyecto.
  - `components/`: Componentes de React utilizados en la interfaz de usuario.
    - `AnalizadorLexico/`: Dentro de esta carpeta se encuentran todos los archivos para la parte del analizador lexico
    - `AnalizadorSintactico/`: Dentro de esta carpeta se encuentran todos los archivos para la parte del analizador Sintactico
  - `App.js`: Punto de entrada de la aplicación React.
  - `index.css`: Estilos globales de la aplicación.
  - `main.js`: Punto de entrada para el archivo de configuración de Vite.
- `public/`: Contiene archivos estáticos accesibles públicamente.
- `package.json`: Archivo de configuración de dependencias y scripts.

## Instalación

1. Clona este repositorio a tu máquina local utilizando el siguiente comando:

   ```bash
   git clone https://github.com/tu-usuario/analizador-lexico-react-vite.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd analizador-lexico-react-vite
   ```

3. Instala las dependencias utilizando npm o yarn:

   ```bash
   npm install
   # o
   yarn install
   ```

## Uso

1. Inicia el servidor de desarrollo con el siguiente comando:

   ```bash
   npm run dev
   # o
   yarn dev
   ```

2. Abre tu navegador y visita `http://localhost:3000` para acceder a la interfaz de usuario del analizador léxico.

3. Ingresa el código fuente en el área de texto provista y presiona el botón "Analizar" para obtener los tokens generados por el analizador léxico.


---

**Autor:** Edwin Joel Cornejo Chavez <edwin.cornejo9126@alumnos.udg.mx> 💚
