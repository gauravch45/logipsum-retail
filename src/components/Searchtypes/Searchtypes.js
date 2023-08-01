import React, { useState, useEffect } from "react";

import "./stypes.css";
//import searchbtn from "./search-button.jpg";

function Searchtypes({ value, onSearchTypeChange }) {
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    if (value === "rent" || value === "buy" || value === "sell") {
      setUpdate(true);
    } else {
      setUpdate(false);
    }
  }, [value]);

  const buttonClick = (input) => {
    if (input === "cancel") {
      setUpdate(false);
      sendValueToHerosection("cancel");
    }
  };

  const sendValueToHerosection = (value) => {
    onSearchTypeChange(value);
  };
  return (
    <div className={update === true ? "Searchtypes" : "searchclose"}>
      <div className="types">
        <div className="location">
          <h2>Location</h2>
          <input type="search" placeholder="Select Your City"></input>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="18"
            viewBox="0 0 14 18"
            fill="none"
          >
            <path
              d="M13 7.66669C13 12.3334 7 16.3334 7 16.3334C7 16.3334 1 12.3334 1 7.66669C1 6.07539 1.63214 4.54926 2.75736 3.42405C3.88258 2.29883 5.4087 1.66669 7 1.66669C8.5913 1.66669 10.1174 2.29883 11.2426 3.42405C12.3679 4.54926 13 6.07539 13 7.66669Z"
              stroke="#8F90A6"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 9.66669C8.10457 9.66669 9 8.77126 9 7.66669C9 6.56212 8.10457 5.66669 7 5.66669C5.89543 5.66669 5 6.56212 5 7.66669C5 8.77126 5.89543 9.66669 7 9.66669Z"
              stroke="#8F90A6"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="line" />

        <div className="property">
          <h2>Property Type</h2>
          <input type="search" placeholder="Choose Property Type"></input>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
          >
            <path
              d="M1 1L7 7L13 1"
              stroke="#8F90A6"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="line" />

        <div className="pricerange">
          <h2>Price Range</h2>
          <input type="search" placeholder="Choose Price Range"></input>
        </div>
        <div className="buttonactions">
          <div className="searchbutton">
            <button
              onClick={(e) => {
                buttonClick(e.target.value);
              }}
              value={"search"}
            />
          </div>

          <div className="cancelbutton">
            <button
              onClick={(e) => {
                buttonClick(e.target.value);
              }}
              value={"cancel"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Searchtypes;
