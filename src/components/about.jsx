import { useContext } from "react";
import LanguageContext from "../language-context";
import { t } from "../text";

export default function About() {
  const { language, _ } = useContext(LanguageContext);

  return (
    <div className="min-h-screen" id="about">
      <div className="h-1"></div>
      <h1
        className="font-semibold text-5xl text-center mt-12"
        data-aos="fade-up"
      >
        About me
      </h1>
      <div className="flex w-full justify-around mt-8 flex-col md:flex-row items-center">
        <div className="md:w-1/2 m-6 md:m-10 lg:m-20 xl:m-40 xl:mt-20">
          <p
            className="text-center text-sm md:text-md lg:text-lg font-normal"
            data-aos="fade-up-right"
          >
            {t[language].about.hello}{" "}
            <span className="text-primary">Simon</span>,{" "}
            {t[language].about.fullstack}
            <br />
            <br />
            {t[language].about.passionnate}{" "}
            <a
              href="https://angular.io/start"
              className="text-primary hover:line-through italic"
              target="_blank"
            >
              Angular
            </a>
            . {t[language].about.mobile}{" "}
            <a
              href="https://reactnative.dev/"
              target="_blank"
              className="text-primary hover:line-through italic"
            >
              React Native
            </a>{" "}
            ⚛️ {t[language].about.and}{" "}
            <a
              href="https://fr.reactjs.org/"
              target="_blank"
              className="text-primary hover:line-through italic"
            >
              React
            </a>{" "}
            .<br /> {t[language].about.react}
            <br />
            <br />
            {t[language].about.working}{" "}
            <a
              href="https://www.matmut.fr/"
              target="_blank"
              className="text-primary hover:line-through italic"
            >
              Matmut
            </a>{" "}
            , {t[language].about.matmut}
            <br />
            <br />
            {t[language].about.comfortable}
            <div className="flex flex-col ml-6 mt-4 rounded-lg border-[1px] shadow-md border-primary">
              <span className="bg-pastelBlue p-2">
                {" "}
                {">"} JavaScript (ES2015, ES6+), TypeScript
              </span>
              <span className="bg-pastelPink p-2">
                {" "}
                {">"} React.js, Angular
              </span>
              <span className="bg-pastelBlue p-2">
                {" "}
                {">"} .NET Core, Express.js
              </span>
              <span className="bg-pastelPink p-2">
                {" "}
                {">"} ReactNative, Flutter
              </span>
            </div>
          </p>
        </div>
        <div className="w-1/2 flex flex-col m-20 justify-center items-center">
          <div className="w-full flex justify-between">
            <a
              href="https://www.linkedin.com/in/simon-mollet/"
              target="_blank"
              className="rounded-full border-2 border-pastelPink p-6 cursor-pointer 
            shadow-lg shadow-pastelPink hover:bg-pastelPink hover:transition-colors duration-700"
              data-aos="fade-down-right"
            >
              <img src="images/linkedin-plain.png" alt="linkedin" width={30} />
            </a>
            <a
              href="https://github.com/MolletSimon"
              target="_blank"
              className="rounded-full border-2 border-pastelPink p-6 cursor-pointer 
            shadow-lg shadow-pastelPink hover:bg-pastelPink hover:transition-colors duration-700"
              data-aos="fade-down-left"
            >
              <img src="images/github-plain.png" alt="github" width={30} />
            </a>
          </div>
          <div>
            <img
              src="images/memoji.png"
              alt="memoji"
              className="rounded-full"
              width={300}
            />
          </div>
          <div className="w-full flex justify-between">
            <a
              href="files/resume.pdf"
              className="rounded-full border-2 border-pastelPink p-6 cursor-pointer 
            shadow-lg shadow-pastelPink hover:bg-pastelPink hover:transition-colors duration-700"
              data-aos="fade-up-right"
              target="_blank"
            >
              <img src="images/cv.png" alt="resume" width={30} />
            </a>
            <a
              href="mailto:simonmollet.developpement@gmail.com"
              className="rounded-full border-2 border-pastelPink p-6 cursor-pointer 
            shadow-lg shadow-pastelPink hover:bg-pastelPink hover:transition-colors duration-700"
              data-aos="fade-up-left"
            >
              <img src="images/mail.png" alt="mail" width={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
