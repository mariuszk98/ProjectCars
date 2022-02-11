import React from "react";
import { Link } from "react-router-dom";

const CarInfo = ({
  imgUrl,
  name,
  power,
  speed,
  info,
  gearbox,
  drive,
  production,
}) => {
  return (
    <div className="containers">
      <img className="imgUrl" src={imgUrl} />
      <div className="infoCars">
        <h1 className="nameCar">{name}</h1>
        <p className="info">{power}</p>
        <p>{speed}</p>
        <p>{info}</p>
        <p>{gearbox}</p>
        <p>{drive}</p>
        <p>{production}</p>
        <Link to={`/`}>
          <button className="buttonBack">Back to home</button>
        </Link>
      </div>
    </div>
  );
};

export default CarInfo;
