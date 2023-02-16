import { useState } from "react";
import Pulse from "react-reveal/Pulse";
import "../App.css";

export default function Experience() {
  const [corp, setCorp] = useState(0);
  const experiences = [
    {
      job: "Freelance Fullstack Engineer",
      corp: "@Matmut",
      color: "#000069",
      site: "https://www.matmut.fr/",
      missions: [
        "Web development for major French insurance company",
        ".NET 5.0, .Net Framework MVC",
        "React.js",
        "Docker, Git",
      ],
      period: "Mars 2023 - Present",
    },
    {
      job: "Apprentice Fullstack Engineer",
      corp: "@Attineos 🐘",
      color: "#FF9601",
      site: "https://www.attineos.com/",
      missions: [
        "Web development for major Swiss group",
        ".NET Core 3.1",
        "Angular 8+",
        "Scrum, CICD, Git flow",
      ],
      period: "October 2021 - December 2022",
    },
    {
      site: "https://www.econocom.com/",
      corp: "@Econocom",
      color: "#3E0E81",
      job: "Apprentice Fullstack Engineer",
      missions: [
        "Web and software development",
        "SqlServer database - T-SQL stored procedure",
        ".NETFramework or .NETCore Backend",
        "Angular or AngularJS Frontend",
      ],
      period: "October 2019 - October 2021",
    },
    {
      site: "https://www.digiworks.fr/",
      job: "Fullstack Developer Trainee",
      color: "#2A0030",
      corp: "@Digiworks Agency 🕹",
      missions: [
        "Backend development for a large French group with Symfony",
        "Conception and modelisation of database",
        "Configuration of the firewall",
        "VR Application development with Unity3D",
      ],
      period: "January 2019 - February 2019",
    },
    {
      site: "http://www.overspeed.fr/",
      corp: "@Overspeed ⚡️",
      color: "#142EF0",
      job: "Web Developer Trainee",
      missions: [
        "Database modelisation",
        "Conception of an API with the Laravel framework",
        "Realisation of a custom map, including POI and paths placement, with Leaflet.js",
      ],
      period: "March 2018 - June 2018",
    },
  ];
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
        <div className="grid grid-cols-10 grid-rows-10 lg:w-1/2">
          <div className="row-span-full col-span-3 border-l-2 border-l-pastelPink">
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
