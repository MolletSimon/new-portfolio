import { useContext } from "react";
import "../App.css";
import LanguageContext from "../language-context";
import { t } from "../text.js";

export default function Landing() {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div className="min-h-[80vh] flex flex-col justify-between">
      <div className="grid grid-cols-6 grid-rows-1 items-center min-h-full">
        <h1 className="order-last text-3xl ml-4 md:ml-10 mt-20 md:leading-[60px] xl:text-title tracking-title col-span-6 sm:col-span-3 xl:col-span-4 xl:leading-[78px] lg:ml-[93px] font-semibold md:mt-36">
          {t[language].landing.hey} <span className="jello-image ">👋🏻</span>{" "}
          <br />
          <p className="whitespace-nowrap">
            {t[language].landing.I}
            <span className="simon"> S</span>
            <span className="simon">i</span>
            <span className="simon2">m</span>
            <span className="simon2">o</span>
            <span className="simon3">n</span>,
          </p>
          <div className="flex w-full">
            <p className="whitespace-nowrap">
              <span className="simon">f</span>
              <span className="simon">u</span>
              <span className="simon">l</span>
              <span className="simon2">l</span>
              <span className="simon2">s</span>
              <span className="simon2">t</span>
              <span className="simon3">a</span>
              <span className="simon3">c</span>
              <span className="simon3">k </span>
            </p>{" "}
            {t[language].landing.engineer}.
          </div>
        </h1>

        <div className="sm:col-span-3 xl:col-span-2 items-center flex justify-center w-screen sm:w-auto">
          <img
            className="sm:block mt-8 sm:mt-36 jello-image lg:mr-28 w-[250px] md:w-[250px] lg:w-[377px]"
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
