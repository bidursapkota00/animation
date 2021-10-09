import Script from "next/script";
import { useEffect } from "react";

const ToFrom = () => {
  useEffect(() => {
    gsap.to("#b", 3, { delay: 2, x: 700, repeatDelay: 2, repeat: -1 });
    gsap.from("#g", 3, { delay: 2, x: 700, repeatDelay: 2, repeat: -1 });
    gsap.fromTo(
      "#r",
      3,
      { x: 200 },
      { delay: 2, x: 700, repeatDelay: 2, repeat: -1 }
    );
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
      <div id="b" className="circle">
        {" "}
        <p>gsap.to()</p>{" "}
      </div>
      <div id="g" className="circle">
        {" "}
        <p>gsap.from()</p>{" "}
      </div>
      <div id="r" className="circle">
        {" "}
        <p>gsap.fromTo()</p>{" "}
      </div>
    </div>
  );
};

export default ToFrom;
