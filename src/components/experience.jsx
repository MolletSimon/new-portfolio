import { useContext } from "react";
import { useState } from "react";
import Pulse from "react-reveal/Pulse";
import "../App.css";
import LanguageContext from "../language-context";
import { t } from "../text";

export default function Experience() {
  const [corp, setCorp] = useState(0);
  const { language, _ } = useContext(LanguageContext);

  const selectCorp = (corp) => {
    console.log(corp);
    setCorp(corp);
  };

  const experiences = t[language].experiences;
  return (
    <div className="w-full mb-10" id="experiences">
      <div className="h-1"></div>
      <h1
        className="font-semibold text-5xl text-center mt-32"
        data-aos="fade-up"
      >
        Experiences
      </h1>
      <div className="flex justify-center">
        <div className="h-1 border-b-[2px] border-pastelPink mt-16 w-1/2"></div>
      </div>
      <div className="flex w-full justify-center mt-16" data-aos="fade-up-left">
        <div className="sm:grid sm:grid-cols-10 sm:grid-rows-10 lg:w-1/2">
          <div className="sm:block hidden row-span-full col-span-3 border-l-2 border-l-pastelPink">
            <div
              onClick={() => setCorp(0)}
              className={`hover:bg-pastelPink cursor-pointer ${
                corp === 0 &&
                "bg-pastelPink border-l-2 border-l-primar rounded-r-md"
              } pb-4 pt-4 pl-4 hover:transition-colors hover:duration-500`}
            >
              Matmut
            </div>
            <div
              onClick={() => setCorp(1)}
              className={`hover:bg-pastelPink cursor-pointer ${
                corp === 1 &&
                "bg-pastelPink border-l-2 border-l-primar rounded-r-md"
              } pb-4 pt-4 pl-4 hover:transition-colors hover:duration-500`}
            >
              Attineos
            </div>
            <div
              onClick={() => setCorp(2)}
              className={`hover:bg-pastelPink ${
                corp === 2 &&
                "bg-pastelPink border-l-2 border-l-primary rounded-r-md"
              } cursor-pointer pb-4 pt-4 pl-4 hover:transition-colors hover:duration-500`}
            >
              Econocom
            </div>
            <div
              onClick={() => setCorp(3)}
              className={`hover:bg-pastelPink ${
                corp === 3 &&
                "bg-pastelPink border-l-2 border-l-primary rounded-r-md"
              } cursor-pointer pb-4 pt-4 pl-4 hover:transition-colors hover:duration-500`}
            >
              Digiworks
            </div>
            <div
              onClick={() => setCorp(4)}
              className={`hover:bg-pastelPink ${
                corp === 4 &&
                "bg-pastelPink border-l-2 border-l-primary rounded-r-md"
              } cursor-pointer pb-4 pt-4 pl-4 hover:transition-colors hover:duration-500`}
            >
              Overspeed
            </div>
          </div>
          <div className="w-full flex justify-center text-xl mb-6 sm:hidden">
            <select
              onChange={(e) => selectCorp(e.target.value)}
              className="border border-b-4 border-pastelPink block w-full rounded-lg p-2 mx-2"
            >
              <option value={0}>Matmut</option>
              <option value={1}>Attineos</option>
              <option value={2}>Econocom</option>
              <option value={3}>Digiworks</option>
              <option value={4}>Overspeed</option>
            </select>
          </div>
          <div className="row-span-full col-span-7 ml-6">
            <h2 className="font-semibold text-lg">{experiences[corp].job}</h2>
            <a
              href={experiences[corp].site}
              target="_blank"
              style={{
                color: experiences[corp].color,
              }}
            >
              {experiences[corp].corp}
            </a>
            <h4 className="mt-4 italic font-light mb-4 text-primary">
              {experiences[corp].period}
            </h4>
            {experiences[corp].missions.map((e) => (
              <Pulse spy={corp}>
                <p className="ml-6 p-1">• {e}</p>
              </Pulse>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
