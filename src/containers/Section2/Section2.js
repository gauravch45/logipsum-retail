import React, { useRef, useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

import "./Section2.css";
gsap.registerPlugin(ScrollTrigger);

function Section2() {
  let div1 = useRef(null);
  let div2 = useRef(null);
  let div3 = useRef(null);
  let div4 = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      div1,
      { x: -500, opacity: 0, duration: 5 },
      {
        x: 0,
        opacity: 1,
        ease: "power2",
        scrollTrigger: {
          trigger: div1,
          markers: false,
          scrub: true,
          start: "-100 50%",
          end: "60 30%",
        },
      }
    );
    gsap.fromTo(
      div2,
      { x: -500, opacity: 0, duration: 5 },
      {
        x: 0,
        opacity: 1,
        ease: "power2",
        scrollTrigger: {
          trigger: div1,
          markers: false,
          scrub: true,
          start: "-100 50%",
          end: "60 30%",
        },
      }
    );
    gsap.fromTo(
      div3,
      { x: -500, opacity: 0, duration: 5 },
      {
        x: 0,
        opacity: 1,
        ease: "power2",
        scrollTrigger: {
          trigger: div1,
          markers: false,
          scrub: true,
          start: "-100 50%",
          end: "60 30%",
        },
      }
    );
    gsap.fromTo(
      div4,
      { x: -500, opacity: 0, duration: 5 },
      {
        x: 0,
        opacity: 1,
        ease: "power2",
        scrollTrigger: {
          trigger: div1,
          markers: false,
          scrub: true,
          start: "-100 50%",
          end: "60 30%",
        },
      }
    );
  }, []);
  return (
    <div className="Section2">
      <h1 className="section2-text">
        We are available in many well-known countries
      </h1>

      <div className="rectangle">
        <div ref={(el) => (div1 = el)} className="america .card">
          <p>America</p>
        </div>

        <div ref={(el) => (div2 = el)} className="spain .card">
          <p>Spain</p>
        </div>

        <div ref={(el) => (div3 = el)} className="london .card">
          <p>London</p>
        </div>

        <div ref={(el) => (div4 = el)} className="france .card">
          <p>France</p>
        </div>
      </div>
    </div>
  );
}

export default Section2;
