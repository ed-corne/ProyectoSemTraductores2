# Analizador Léxico con React y Vite


Este proyecto consiste en la implementación de un Analizador Léxico utilizando la combinación de las tecnologías React y Vite. Un analizador léxico es una parte esencial de los compiladores que se encarga de transformar el código fuente en una secuencia de tokens significativos, facilitando así el proceso de análisis sintáctico y semántico.

## 📂 Actividades de la materia
1. [¿Qué es es un analizador léxico ?](./src/components/AnalizadorLexico)
2. [Mini generador léxico ](./src/components/AnalizadorLexico/mini/)
3. [Analizador léxico completo.](./src/components/AnalizadorLexico/complete/)

## Características

- Implementación de un analizador léxico para un lenguaje de programación específico.
- Utilización de la biblioteca React para construir la interfaz de usuario.
- Aprovechamiento de la herramienta de construcción Vite para la configuración del entorno de desarrollo.

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


## Estructura del Proyecto

- `src/`: Contiene los archivos fuente del proyecto.
  - `components/`: Componentes de React utilizados en la interfaz de usuario.
    - `AnalizadorLexico/`: Dentro de esta carpeta se encuentran todos los archivos para la parte del analizador lexico
  - `App.js`: Punto de entrada de la aplicación React.
  - `index.css`: Estilos globales de la aplicación.
  - `main.js`: Punto de entrada para el archivo de configuración de Vite.
- `public/`: Contiene archivos estáticos accesibles públicamente.
- `package.json`: Archivo de configuración de dependencias y scripts.


---

**Autores:** Edwin Joel Cornejo Chavez <edwin.cornejo9126@alumnos.udg.mx>