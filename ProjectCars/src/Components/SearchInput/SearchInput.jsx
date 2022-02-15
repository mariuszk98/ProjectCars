import React from "react";
import "./App.css";

export const SearchInput = ({ setCar }) => {
  return (
    <>
      <div className="input-info">
        <p className="text">Search Your Favorite Cars</p>
        <input
          onChange={(e) => setCar(e.target.value)}
          className="input"
          placeholder="Search car..."
        />
      </div>
    </>
  );
};

export default SearchInput;
