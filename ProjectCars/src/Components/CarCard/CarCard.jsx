import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const CarCard = ({ ImgUrl, name, model, engine }) => {
  return (
    <div className="carCard">
      <img className="img" src={ImgUrl}></img>
      <div className="carInfo">
        <h1 className="nameCard">{name}</h1>
        <h2 className="modelCard">{model}</h2>
        <p className="engineCard">{engine}</p>
        <Link to={`/car/ ${name}`}>
          <button className="buttonCard">More Info</button>
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
