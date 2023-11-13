// TreeComponent.js
import React from "react";
import Tree from "react-d3-tree";

/* example of tree structure
const data = {
  name: "Programa",
  children: [
    {
      name: "Definiciones",
      children: [
        {
          name: "Definicion",
          children: [
            {
              name: "DefVar",
              children: [
                { name: "int" },
                { name: "hola" },
                { name: "ListVar" },
                { name: ";" },
              ],
            },
          ],
        },
        [{ name: "Definiciones" }],
      ],
    },
  ],
};
*/
const TreeComponent = ({ treeData }) => {
  return (
    <Tree
      data={treeData}
      orientation="vertical"
      translate={{ x: 100, y: 200 }}
    />
  );
};

export default TreeComponent;
