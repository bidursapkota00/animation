import Script from "next/script";
import { useEffect } from "react";

const Draw = () => {
  useEffect(() => {
    gsap.registerPlugin(MotionPathPlugin);

    let timeline = gsap
      .timeline({
        repeat: -1,
        repeatDelay: 5,
        defaults: { duration: 12, ease: "power1.inOut" },
      })

      .to("#hand", {
        motionPath: {
          path: "#path",
          align: "#path",
          alignOrigin: [0.28, 0.08],
        },
      })

      .to("#path", { strokeDasharray: "4046, " + "0" }, "<");

    document.getElementById("pause").onclick = () => timeline.pause();
    document.getElementById("play").onclick = () => timeline.play();
    document.getElementById("reverse").onclick = () => timeline.reverse();
    document.getElementById("seek").onclick = () => timeline.seek(5);
    document.getElementById("restart").onclick = () => timeline.restart();

    //Calculating path length:
    //console.log(document.getElementById("path").getTotalLength());
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

      <svg height="600" width="900">
        <image
          id="hand"
          href="./hand.png"
          x="325"
          y="480"
          width="100px"
          height="100px"
        />
        <path
          id="path"
          d="M364.5,493.5c-109,26-197.9-28.2-243.4
		-92.6-2.3-3.2-13.4-17.9-11.6-21.4,3.8-7.5,21.7,1.4,27.7,
		3.4,11.3,3.9,70.1,20.6,68.3,36.5-2.5,23-54.1-27.9-58.8
		-34-8.3-10.9-47.6-83.9-7.5-71.4,10.2,3.2,26.9,24.9,21.2,
		35.8-8.2,15.7-20.5,1.3-21-10.5-2-40.1,51.1-64.8,78.2-81.2,
		29.1-17.5,63.8-26.9,91-46.5,29.7-21.5,49.1-53.5,74.8-79.2,
		12.1-12.1,38.3-46.2,50.3-25.3,10.2,17.6-5.2,39.4,12,56.4,
		10.8,10.6,31.5,11.3,37.1,26.8,4.5,12.6-12.4,27.3-4.1,37.7
		s31.4,2.9,40.5-1.9c17-9.1,67-65.8,80.1-26,9.6,29.1-23.5,
		55.7,13.1,78.8,24.4,15.3,62.5,18.1,90.4,15.5,30.3-2.8,85.6
		-25.9,74.2-67.4-10.5-38.1-69.7-6.1-86.3,7.7-29.3,24.4-50.9,
		71.4-27.6,106.3,20.1,30.2,63.9,46.3,98.2,34.9,46.6-15.4,
		24.5-50.5-13.1-59.3-41.8-9.7-79.9,11.2-112.5,35.6C620.1,
		363.9,606,377.5,591,390c-6.7,5.7-42,20.6-30-2,15.3-28.9,
		77.9,23.5,86.3,39.6,24.1,46.8-30.5,72.5-68.2,57.1-12.6-5.2
		-25-14.2-33.2-25.2-5.5-7.3-23.1-51.1.1-51.5,16.6-.3,4.6,
		31.2.1,37.2-9.3,12.4-28.5,20.5-42.3,26.4-25,10.8-58.1,13.4
		-84.8,10.5-21.1-2.3-79.8-36.1-38.9-56.3,26.7-13.1,76.4,12.9,
		94.1,32.9,20.6,23.2,32.3,69.9-6.4,82.5-36.7,12.1-77.1-25.1
		-99.6-49.2-17-18.2-34.8-44.1-56.9-56.8-10.7-6.2-39.1-7.5
		-29.8,10.8s40.9,7.4,51.6-.1c29.9-21,29.3-64.6,23.2-97-6.9
		-36.6-37-62-72.9-67.5-42.2-6.5-80.3,12.2-89.7,55.8-6.2,28.9,
		7.7,84.4,48.9,66.7,34-14.7,10.5-71.9-21.8-55.7-12.9,6.4-18,
		25.5-4.8,34.8,9.3,6.5,29.6,1,25-13-2.9-8.8-18.5-11.6-22-2
		-5.2,14.4,21.4,3.7,6,3"
          fill="none"
          stroke="blue"
          strokeWidth="4"
          strokeDasharray="0 4046"
        />
      </svg>
      <button id="pause">pause</button>
      <button id="play">play</button>
      <button id="reverse">reverse</button>
      <button id="seek">seek</button>
      <button id="restart">restart</button>
    </div>
  );
};

export default Draw;
