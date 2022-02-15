import React, { useState } from "react";
import SearchInput from "../../Components/SearchInput/SearchInput";
import Resault from "../../Components/Resaults/Resaults";

const MainContainers = () => {
  const [inputValue, setInputValue] = useState("");
  const setCarName = (car) => {
    setInputValue(car);
  };
  return (
    <>
      <SearchInput setCar={setCarName} />
      <Resault carName={inputValue} />
    </>
  );
};

export default MainContainers;
