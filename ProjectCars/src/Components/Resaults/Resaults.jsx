import React from "react";
import CarCard from "../CarCard/CarCard";
import AudiR8 from "../../Images/audi-r8.jpg";
import Porsche911 from "../../Images/porsche-911.jpg";
import BmwM5 from "../../Images/bmw-m5.jpg";
import NissanGTR from "../../Images/nissan-gtr.jpg";
import AudiRs6 from "../../Images/audi-rs6.jpg";
import Chevrolet from "../../Images/chevrolet-camaro.jpg";
import Doge from "../../Images/doge-hellcat.jpg";
import Ford from "../../Images/ford-mustang.jpg";
import Kia from "../../Images/kia-stinger.jpg";
import Lexus from "../../Images/lexus-lc500.jpg";
import Mercedes from "../../Images/mercedes-c63s.jpg";
import Toyota from "../../Images/toyota-supra.jpg";
import "./style.css";

const Resault = () => {
  return (
    <div className="Grid">
      <CarCard
        ImgUrl={AudiR8}
        name="Audi"
        model="R8 Grenn Hell"
        engine="5200 cc"
      />
      <CarCard
        ImgUrl={Porsche911}
        name="Porsche 911"
        model="Carrera 4S"
        engine="3000 cc"
      />
      <CarCard
        ImgUrl={BmwM5}
        name="Bmw"
        model="M5 Competition"
        engine="4400 cc"
      />
      <CarCard
        ImgUrl={NissanGTR}
        name="Nissan"
        model="GR-R Prestige"
        engine="3700 cc"
      />
      <CarCard
        ImgUrl={AudiRs6}
        name="Audi"
        model="Rs6 C8 Performance"
        engine="4000 cc"
      />
      <CarCard
        ImgUrl={Chevrolet}
        name="Chevrolet"
        model="Camaro SS"
        engine="6200 cc"
      />
      <CarCard
        ImgUrl={Doge}
        name="Doge"
        model="Challenger Hellcat"
        engine="6200 cc"
      />
      <CarCard
        ImgUrl={Ford}
        name="Ford"
        model="Mustang GT V8"
        engine="5000 cc"
      />
      <CarCard
        ImgUrl={Kia}
        name="Kia"
        model="Stinger V6 BiTurbo"
        engine="3300 cc"
      />
      <CarCard
        ImgUrl={Lexus}
        name="Lexus"
        model="LC500 Superturismo "
        engine="5000 cc"
      />
      <CarCard
        ImgUrl={Mercedes}
        name="Mercedes"
        model="C63S AMG"
        engine="4000 cc"
      />
      <CarCard
        ImgUrl={Toyota}
        name="Toyota"
        model="GR Supra TwinTurbo"
        engine="3000 cc"
      />
    </div>
  );
};

export default Resault;
