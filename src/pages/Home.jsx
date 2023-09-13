import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
const Home = () => {
  return (
    <div className="homePage">
      <h1 className="homePage__title">Analyzers</h1>
      <div className="homePage__menu">
        <Link to="/mini" className="homePage__link">
          Mini Lexical
        </Link>

        <Link to="/complete" className="homePage__link">
          Complete Lexical
        </Link>
        <Link to="/sintactic" className="homePage__link">
          Sintactico
        </Link>
      </div>
    </div>
  );
};

export default Home;
