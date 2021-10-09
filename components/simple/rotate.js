import Script from "next/script";
import { useEffect } from "react";

const Rotate = () => {
  useEffect(() => {
    gsap.to(".rect", 3, {
      delay: 1,
      rotate: 2880,
      skewX: 45,
      fill: "yellow",
      ease: "power1.in",
      repeat: -1,
      repeatDelay: 2,
    });
  });
  return (
    <div>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/gsap.js"></Script>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/CSSRulePlugin.js"></Script>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/Draggable.js"></Script>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/EaselPlugin.js"></Script>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/MotionPathPlugin.js"></Script>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/PixiPlugin.js"></Script>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/TextPlugin.js"></Script>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/ScrollToPlugin.js"></Script>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/ScrollTrigger.js"></Script>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/EasePack.js"></Script>
      <svg width="900" height="650">
        <rect
          className="rect"
          x="400"
          y="300"
          width="100"
          height="100"
          fill="indigo"
          stroke="black"
        />
        <rect
          className="rect"
          x="200"
          y="300"
          width="100"
          height="100"
          fill="indigo"
          stroke="black"
        />
      </svg>
    </div>
  );
};

export default Rotate;
