import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
const Home = () => {
  return (
    <div className="homePage">
      <h1 className="homePage__title">Lexical analyzer</h1>
      <div className="homePage__menu">
        <Link to="/mini" className="homePage__link">
          Mini
        </Link>

        <Link to="/complete" className="homePage__link">
          complete
        </Link>
      </div>
    </div>
  );
};

export default Home;
