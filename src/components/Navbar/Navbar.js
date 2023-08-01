import { useState } from "react";

import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  return (
    <div className="Navbar-container">
      <nav className="Navbar">
        <ul className={click ? "Navbar-active" : "Navbar-un"}>
          <li className="Navbar-list">
            <a href="\">Home</a>
          </li>
          <li className="Navbar-list">
            <a href="#properties">Properties</a>
          </li>
          <li className="Navbar-list">
            <a href="#agents">Agents</a>
          </li>
          <li className="Navbar-list">
            <a href="#blog">Blog</a>
          </li>
          <li>
            <button className="login-button">LOG IN</button>
          </li>
        </ul>

        <div
          className={click ? "hamburger-active" : "hamburger"}
          onClick={() => {
            setClick(!click);
          }}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
