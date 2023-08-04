import Header from "./containers/Header/Header";
import Herosection from "./containers/Herosection/Herosection";
import Section2 from "./containers/Section2/Section2";
import Section3 from "./containers/Section3/Section3";
import Section4 from "./containers/Section4/Section4";
import Footer from "./containers/Footer/Footer";
import Lenis from "@studio-freight/lenis";

import "./App.css";
import { useState } from "react";
import Login from "./components/Login/Login";

//Lenis is use to make scrolling smooth
function App() {
  const [login, setLogin] = useState(false);
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    // console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  const loginStatus = (value) => {
    setLogin(value);
  };

  console.log(login);

  return (
    <div className="App" id="home">
      <Header input={loginStatus} />
      {login === true ? <Login /> : <Herosection />}
      
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  );
}

export default App;
