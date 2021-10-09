import Rotate from "../components/simple/rotate";
import ToFrom from "../components/simple/tofromfromTo";
import WheelCircle from "../components/simple/wheelCircle";
import Draw from "../components/complex/draw";
import Script from "next/script";
import { useEffect, useState } from "react";

export default function Home() {
  const [time, setTime] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setTime(true)
    }, 3000);
  })
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
      {/* DrawSVGPlugin.js, Flip.js, GSDevTools.js, InertiaPlugin.js, MorphSVGPlugin.js, MotionPathHelper.js,
         Physics2DPlugin.js, PhysicsPropsPlugin.js, ScrambleTextPlugin.js, SplitText.js, CustomBounce.js,
          and CustomWiggle.js */}
      {/* <script src="/[YOUR_DIRECTORY]/DrawSVGPlugin.js"></script> */}
      {time && (
        <>
          (<Rotate />
          <ToFrom />
          <WheelCircle />
          <Draw />)
        </>
      )}
    </div>
  );
}
