import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="app-logo">
      <h1 className="name">KaspaCars</h1>
      <ul>
        <li className="list-info">
          <Link to="/">Home</Link>
          <Link to="/about">About </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
