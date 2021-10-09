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
  );
};

export default Rotate;
