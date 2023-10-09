import React, { useState } from "react";

function CsvLoader() {
  const [csvArray, setCsvArray] = useState({});

  function parseCSV(csvData) {
    const lines = csvData.split("\n");
    const result = {};

    if (lines.length === 0) {
      return result; // Retorna una matriz vacía si el archivo CSV está vacío
    }

    // Obtener encabezados de columna desde la primera fila
    const headers = lines[0].split(",");

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line === "") continue; // Saltar líneas vacías

      const values = line.split(",");
      const state = parseInt(values[0].trim(), 10);
      const rowData = {};

      for (let j = 1; j < headers.length; j++) {
        const header = headers[j].trim();
        const value = j < values.length ? values[j].trim() : ""; // Verificar si el valor existe
        if (value !== "") {
          let newValue = value;
          if (newValue.includes("d")) {
            newValue = value.replace("d", "");
          } else if (newValue.includes("r")) {
            newValue = value.replace("r", "");
            newValue = newValue * -1;
          }
          rowData[header] = parseInt(newValue, 10);
          //rowData[header] = value;
        }
      }

      //result.push(rowData);
      result[state] = rowData;
    }

    return result;
  }

  function handleFileSelect(event) {
    const file = event.target.files[0];

    if (!file) {
      console.error("No se seleccionó ningún archivo.");
      return;
    }

    const reader = new FileReader();

    reader.onload = function (e) {
      const csvData = e.target.result;
      const parsedCsvArray = parseCSV(csvData);
      console.log(parsedCsvArray);
      setCsvArray(parsedCsvArray);
    };

    reader.readAsText(file);
  }

  return (
    <div>
      <h2>Convert CSV to JSON</h2>
      <input type="file" onChange={handleFileSelect} accept=".csv" />
      <div>
        <h3>Result</h3>
        <pre>{JSON.stringify(csvArray, null, 2)}</pre>
      </div>
    </div>
  );
}

export default CsvLoader;
