import React from "react";
import "./App.css";

export const SearchInput = () => {
  return (
    <>
      <div className="input-info">
        <p className="text">Search Your Favorite Cars</p>
        <input className="input" placeholder="Search car..." />
      </div>
    </>
  );
};

export default SearchInput;
