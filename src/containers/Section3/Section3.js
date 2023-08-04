import Card from "../../components/Card/Card";
import card1 from "./card1.png";
import card2 from "./card2.png";
import card3 from "./card3.png";
import card4 from "./card4.png";
import card5 from "./card5.png";
import card6 from "./card6.png";

import "./Section3.css";

function Section3() {
  return (
    <div className="Section3  " id="properties">
      <div className="section3-header">
        <div className="center">
          <h1> Recently Added </h1>
        </div>
        <div className="center">
          <a href={"/"}>See all</a>
        </div>
      </div>

      <div className="card-list">
        <Card picture={card1} />
        <Card picture={card2} />
        <Card picture={card3} />
        <Card picture={card4} />
        <Card picture={card5} />
        <Card picture={card6} />
      </div>
    </div>
  );
}

export default Section3;
