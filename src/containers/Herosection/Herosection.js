import Searchtypes from "../../components/Searchtypes/Searchtypes";
import gsap from "gsap";
import React, { useState, useRef, useEffect } from "react";
import house from "./hero-background.png";

import "./Herosection.css";

function Herosection() {
  let textitem = useRef(null);
  let textitem2 = useRef(null);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    gsap.to(textitem, {
      opacity: 1,
      duration: 2,
      delay: 0.5,
    });
    gsap.to(textitem2, {
      scale: 1,
      duration: 1,
    });
  }, []);

  const searchOptions = (input) => {
    if (
      selectedOption === "rent" ||
      selectedOption === "buy" ||
      selectedOption === "sell"
    ) {
      setSelectedOption(null);
    } else {
      setSelectedOption(input);
    }
  };

  const handleSearchTypeChange = (value) => {
    if (value === "cancel") {
      setSelectedOption("none");
    }
  };

  return (
    <div className="Herosection" id="home">
      <div className="Herosection-content">
        <div className="herosection-background">
          <img alt="background" src={house} />
        </div>

        <div className="content-text">
          <h1
            ref={(el) => {
              textitem = el;
            }}
          >
            Easy way to find a perfect property
          </h1>
          <p
            ref={(el) => {
              textitem2 = el;
            }}
          >
            We provide a complete service for the sale, purchase or rental of
            real estate.
          </p>
        </div>
        <div className="Herosection-searchbar">
          <div className="searchbar-searchtab">
            <div className="searchtab-rent dropdown">
              <button
                className={
                  selectedOption === "rent"
                    ? "active dropbtn"
                    : "searchtab dropbtn"
                }
                onClick={(e) => {
                  searchOptions(e.target.value);
                }}
                value={"rent"}
              >
                Rent
              </button>
            </div>
            <div className="searchtab-buy dropdown">
              <button
                className={
                  selectedOption === "buy"
                    ? "active dropbtn"
                    : "searchtab dropbtn"
                }
                onClick={(e) => {
                  searchOptions(e.target.value);
                }}
                value={"buy"}
              >
                Buy
              </button>
            </div>
            <div className="searchtab-sell dropdown">
              <button
                className={
                  selectedOption === "sell"
                    ? "active dropbtn"
                    : "searchtab dropbtn"
                }
                onClick={(e) => {
                  searchOptions(e.target.value);
                }}
                value={"sell"}
              >
                Sell
              </button>
            </div>
          </div>
          <div className="search-type dropdown-content">
            {selectedOption === "sell" ||
            selectedOption === "buy" ||
            selectedOption === "rent" ? (
              <Searchtypes
                value={selectedOption}
                onSearchTypeChange={handleSearchTypeChange}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
