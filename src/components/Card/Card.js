import "./Card.css";

function Card({ picture }) {
  return (
    <div className="card">
      <div className="card1-image">
        <img src={picture} alt="card" />
      </div>

      <div className="card-text">
        <h2 className="card-maintext">103/143 West Street,</h2>
        <h2 className="card-maintext"> Crows Nest</h2>

        <div className="card-subtext">
          <p>10 Bedroom</p>
          <p>150 M</p>
          <p>2 Garage</p>
        </div>

        <div className="card-footertext">
          <p>Posted by X Builder</p>
          <button>$45,545</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
