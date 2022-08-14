import { useState } from "react";
import AnimatedText from "react-animated-text-content";
import { Fade, Flip } from "react-reveal";
import "../App.css";
import Jello from "react-reveal/Jello";
import { useEffect } from "react";

export default function Landing() {
  const [hoverImg, setHoverImg] = useState(false);

  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-6 grid-rows-1 items-center min-h-full">
        <h1 className="text-5xl leading-[60px] xl:text-title tracking-title col-span-3 xl:col-span-4 xl:leading-[78px] ml-[93px] font-semibold mt-36">
          Hey there! <span className="jello-image ">👋🏻</span> <br />
          <p className="whitespace-nowrap">
            I’m <span className="simon">S</span>
            <span className="simon">i</span>
            <span className="simon2">m</span>
            <span className="simon2">o</span>
            <span className="simon3">n</span>,
          </p>
          <p className="whitespace-nowrap">
            a french
            <span className="simon"> f</span>
            <span className="simon">r</span>
            <span className="simon">o</span>
            <span className="simon2">n</span>
            <span className="simon2">t</span>
            <span className="simon2">e</span>
            <span className="simon3">n</span>
            <span className="simon3">d</span>
          </p>{" "}
          engineer passionate by React and all the JS environment.
        </h1>

        <div className="col-span-3 xl:col-span-2 items-center flex justify-center">
          <img
            className="ml-[93px] mt-36 jello-image"
            src="images/pp.png"
            alt="profile-picture"
            width={377}
            height={344}
          />
        </div>
      </div>
    </div>
  );
}

// ml-[93px]  mt-36
