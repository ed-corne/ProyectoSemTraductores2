import React, { useState } from "react";
import "../../styles/generateCode.css";

const App = ({ input }) => {
  const [cCode, setCCode] = useState(input);
  const [assemblyCode, setAssemblyCode] = useState("");
  const [showCode, setShowCode] = useState(false);

  // Request to the backend, send the c code and return the assembly code
  const handleConvert = async () => {
    try {
      console.log("Enviando solicitud de conversión...");
      const response = await fetch("http://localhost:3001/convert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cCode }),
      });

      const result = await response.json();
      console.log("Respuesta recibida:", result);
      setAssemblyCode(result.assemblyCode);
      handleShowCode();
    } catch (error) {
      console.error("Error al comunicarse con el servidor:", error);
    }
  };

  const handleShowCode = () => {
    setShowCode(!showCode);
  };

  return (
    <div className="App">
      <button onClick={handleConvert} className="btn_code">Assembly Code</button>
      {showCode && (
        <div className="modal">
          <div className="result">
            <h2 className="title_modal">Result Assembly Code</h2>
            <pre>{assemblyCode}</pre>
            <button onClick={handleShowCode} className="close">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
