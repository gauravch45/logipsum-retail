import Header from "./components/Header/Header";
import Herosection from "./components/Herosection/Herosection";
import Section2 from "./components/Section2/Section2";
import Section3 from "./components/Section3/Section3";
import Section4 from "./components/Section4/Section4";
import Footer from "./components/Footer/Footer";
import Lenis from "@studio-freight/lenis";

import "./App.css";

//Lenis is use to make scrolling smooth
function App() {
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    // console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <div className="App">
      <Header />
      <Herosection />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  );
}

export default App;
