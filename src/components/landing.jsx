import { useState } from "react";
import AnimatedText from "react-animated-text-content";
import { Fade, Flip } from "react-reveal";
import "../App.css";
import Bounce from "react-reveal/Bounce";
import { useEffect } from "react";

export default function Landing() {
  const [hoverImg, setHoverImg] = useState(false);

  return (
    <div className="min-h-[80vh] flex flex-col justify-between">
      <div className="grid grid-cols-6 grid-rows-1 items-center min-h-full">
        <h1 className="text-4xl xl:text-5xl leading-[60px] xl:text-title tracking-title col-span-6 lg:col-span-3 xl:col-span-4 xl:leading-[78px] ml-[93px] font-semibold mt-36">
          Hey there! <span className="jello-image ">👋🏻</span> <br />
          <p className="whitespace-nowrap">
            I’m <span className="simon">S</span>
            <span className="simon">i</span>
            <span className="simon2">m</span>
            <span className="simon2">o</span>
            <span className="simon3">n</span>,
          </p>
          <p className="whitespace-nowrap">
            <span className="simon">f</span>
            <span className="simon">r</span>
            <span className="simon">o</span>
            <span className="simon2">n</span>
            <span className="simon2">t</span>
            <span className="simon2">e</span>
            <span className="simon3">n</span>
            <span className="simon3">d </span>
            engineer.
          </p>{" "}
        </h1>

        <div className="lg:col-span-3 xl:col-span-2 items-center flex justify-center">
          <img
            className="hidden lg:block mt-36 jello-image mr-28 w-[250px] lg:w-[377px]"
            src="images/pp.png"
            alt="profile-picture"
          />
        </div>
      </div>
      <div className="flex w-full justify-center">
        <a href="#about">
          <img
            src="images/down-arrow.png"
            className="cursor-pointer"
            width={30}
            alt="down arrow"
          />
        </a>
      </div>
    </div>
  );
}

// ml-[93px]  mt-36
