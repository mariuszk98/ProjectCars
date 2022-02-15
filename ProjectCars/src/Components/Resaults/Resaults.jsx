import React from "react";
import "./style.css";
import data from "../../Consts/data";
import CarCard from "../CarCard/CarCard";

const Resault = ({ carName }) => {
  const filtredCars = data.filter((car) => {
    return car.name.toLowerCase().includes(carName.toLowerCase());
  });

  return (
    <div className="Grid">
      {filtredCars.map((data) => {
        return (
          <CarCard
            ImgUrl={data.ImgUrl}
            name={data.name}
            model={data.model}
            engine={data.engine}
          />
        );
      })}
    </div>
  );
};

export default Resault;
