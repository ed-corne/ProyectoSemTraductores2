import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
const Home = () => {
  return (
    <div className="homePage">
      <div className="homePage__menu">
        <h1 className="homePage__title">Analizadores</h1>
        <Link to="/mini" className="homePage__link">
          Lexico Mini
        </Link>

        <Link to="/complete" className="homePage__link">
          Lexico Completo
        </Link>
        <Link to="/sintactic" className="homePage__link">
          Sintactico Mini
        </Link>
        <Link to="/sintactic-complete" className="homePage__link">
          Sintactico Completo
        </Link>
        <h2>Herramientas Extra</h2>
        <Link to="/csv-loader" className="homePage__link">
          Convertir csv a JSON
        </Link>
      </div>
      
    </div>
  );
};

export default Home;
