import React, { useState } from "react";
import { analyze } from "./AnalyzeGrammar";
import "../../../styles/sintactic.css";
import "../../../styles/generateCode.css";
import TreeComponent from "./TreeComponent";
import App from "../../GeneracionCodigo/App";

const SintacticPage = () => {
  const [input, setInput] = useState(""); // Entrada del usuario
  const [sintacticData, setSintacticData] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [transitionTable, setTransitionTable] = useState("in:wipe:down");
  const [treeData, setTreeData] = useState([]);
  const [error, setError] = useState(false);
  const [showErrorMsg, setShowErrorMsg] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const [showTree, setShowTree] = useState(false);
  const [showTreeModal, setShowTreeModal] = useState(false);

  const handleSintacticAnalyze = () => {
    const values = analyze(input);
    console.log(values.error);
    if (values.error === true) {
      setShowErrorMsg(true);
      setError(true);
      setShowCode(false);
      setShowTree(false);
    } else {
      setShowErrorMsg(true);
      setError(false);
      setShowCode(true);
      setShowTree(true);
    }
    setSintacticData(values.history);
    setTreeData(values.tree);
    setTransitionTable("in:wipe:down");
    setShowTable(true);
  };

  const clean = () => {
    setInput("");
    setTransitionTable("out:wipe:up");
    setShowErrorMsg(false);
    setShowTree(false);
    setShowCode(false);
  };

  const handleShowTree = () => {
    setShowTreeModal(!showTreeModal);
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
          {showErrorMsg ? (
            error ? (
              <h2 className="msg invalid">Invalid Input</h2>
            ) : (
              <h2 className="msg valid">Valid Input</h2>
            )
          ) : null}
          {showCode && (
            <div>
              <App input={input} />
            </div>
          )}
          {showTree && (
            <div>
              <button onClick={handleShowTree} className="btn_tree">
                Show Tree
              </button>
            </div>
          )}
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
        </div>
      )}
      {showTreeModal && (
        <div className="modal">
          <div className="result tree">
            <h2 className="title_modal color">Arbol</h2>
            <TreeComponent treeData={treeData} />
            <button onClick={handleShowTree} className="close">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SintacticPage;
