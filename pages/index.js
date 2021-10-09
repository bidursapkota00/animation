import Head from "next/head";
import Rotate from "../components/simple/rotate";
import ToFrom from "../components/simple/tofromfromTo";
import WheelCircle from "../components/simple/wheelCircle";
import Draw from "../components/complex/draw";

export default function Home() {
  return (
    <div>
      <Head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/gsap.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/CSSRulePlugin.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/Draggable.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/EaselPlugin.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/MotionPathPlugin.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/PixiPlugin.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/TextPlugin.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/ScrollToPlugin.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/ScrollTrigger.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/EasePack.js"></script>

        {/* DrawSVGPlugin.js, Flip.js, GSDevTools.js, InertiaPlugin.js, MorphSVGPlugin.js, MotionPathHelper.js,
         Physics2DPlugin.js, PhysicsPropsPlugin.js, ScrambleTextPlugin.js, SplitText.js, CustomBounce.js,
          and CustomWiggle.js */}

        {/* <script src="/[YOUR_DIRECTORY]/DrawSVGPlugin.js"></script> */}
      </Head>

      <Rotate />
      <ToFrom />
      <WheelCircle />
      <Draw />
    </div>
  );
}
