import React, { useState } from "react";
import { analyze } from "./AnalyzeGrammar";
import "../../../styles/sintactic.css";
import TreeComponent from "./TreeComponent";

const SintacticPage = () => {
  const [input, setInput] = useState(""); // Entrada del usuario
  const [sintacticData, setSintacticData] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [transitionTable, setTransitionTable] = useState("in:wipe:down");
  const [treeData, setTreeData] = useState([]);

  const handleSintacticAnalyze = () => {
    const values = analyze(input);
    setSintacticData(values[0]);
    setTreeData(values[1]);
    setTransitionTable("in:wipe:down");
    setShowTable(true);
  };

  const clean = () => {
    setInput("");
    setTransitionTable("out:wipe:up");
  };

  return (
    <div className="mainContainer" transition-style={"in:wipe:down"}>
      <h2 className="mainContainer__title">Sintactic analyzer </h2>

      <div className="codeContainer">
        <h2 className="subTitle">Input</h2>
        <textarea
          placeholder="Enter the text to analyze"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="codeContainer__area shadow-drop-center"
        />
        <div className="btnsContaniner">
          <button onClick={clean} className="--clean scale-down-center">
            Clean
          </button>
          <button
            onClick={handleSintacticAnalyze}
            className=" --analyze scale-down-center "
          >
            Analyze
          </button>
        </div>
      </div>
      {showTable && (
        <div
          className="processContainer table-container"
          transition-style={transitionTable}
        >
          <h2 className="subTitle">Syntactic analysis</h2>
          <table className="processContainer__table">
            <tr className="tableHead">
              <th className="tableHead__column --radiusLeft">Stack</th>
              <th className="tableHead__column">Input</th>
              <th className="tableHead__column --radiusRight">Output</th>
            </tr>
            {sintacticData.map((process, index) => (
              <tr key={index} className="tableBody">
                <td className="tableBody__column">
                  {process.stack.map((item) => item.valorEP)}
                </td>
                <td className="tableBody__column">{process.input}</td>
                <td className="tableBody__column">{process.output}</td>
              </tr>
            ))}
          </table>
          <div className="processContainer__table tree">
            <TreeComponent treeData={treeData} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SintacticPage;
