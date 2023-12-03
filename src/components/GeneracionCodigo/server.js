//This code is part of the backend
// Is included in this proyect only for documentation
// for use this part of code you need to crerate a server using node js

const express = require("express");
const bodyParser = require("body-parser");
const { exec } = require("child_process");
const cors = require("cors"); // Importar el paquete cors
const fs = require("fs");
const app = express();
const port = 3001;

// Middleware para permitir CORS
app.use(cors());

// Middleware para analizar el cuerpo de las solicitudes como JSON
app.use(bodyParser.json());

// Ruta para la conversión de código C a ensamblador
app.post("/convert", (req, res) => {
  const cCode = req.body.cCode;
  console.log("Código C recibido:", cCode);

  // Guardar el código C en un archivo temporal
  fs.writeFileSync("temp.c", cCode);

  // Ejecutar el compilador GCC en el archivo temporal
  const childProcess = exec(
    "gcc -S -o output.s temp.c",
    (error, stdout, stderr) => {
      // Eliminar el archivo temporal después de usarlo
      fs.unlinkSync("temp.c");

      if (error) {
        console.error(`Error ejecutando gcc: ${error.message}`);
        console.error(`Salida estándar de gcc: ${stdout}`);
        console.error(`Salida de error de gcc: ${stderr}`);
        res.status(500).json({ error: "Error al convertir el código." });
      } else {
        console.log("Salida de gcc:", stdout);
        const assemblyCode = fs.readFileSync("output.s", "utf8");
        console.log("Código ensamblador generado por GCC:", assemblyCode);
        res.json({ assemblyCode: assemblyCode });
      }
    }
  );

  childProcess.on("exit", (code) => {
    console.log(`Proceso de gcc terminado con código de salida: ${code}`);
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor en http://localhost:${port}`);
});
