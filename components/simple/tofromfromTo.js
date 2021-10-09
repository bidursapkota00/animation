import { useEffect } from "react";

const ToFrom = () => {
  useEffect(() => {
    gsap.to("#b", 3, { delay: 2, x: 700, repeatDelay: 2, repeat: -1 });
    gsap.from("#g", 3, { delay: 2, x: 700, repeatDelay: 2, repeat: -1 });
    gsap.fromTo("#r", 3, { x: 200 }, { delay: 2, x: 700, repeatDelay: 2, repeat: -1 });
  });
  return (
    <div>
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
