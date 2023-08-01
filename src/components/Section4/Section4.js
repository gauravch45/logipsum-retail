import backimage from "./background.png";

import "./Section4.css";

function Section4() {
  return (
    <div className="Section4">
      <div className="section4-container">
        <div className="section4-text">
          <h1> Find your best Real Estate</h1>
          <p>
            We provide a complete service for the sale, purchase or rental of
            real estate.
          </p>
          <button>Contact Us</button>
        </div>

        <div className="section4-image">
          <img alt="background" src={backimage} />
        </div>
      </div>
    </div>
  );
}

export default Section4;
