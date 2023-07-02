import { useContext } from "react";
import LanguageContext from "../../language-context";
import { t } from "../../text";

export function DisneyWaitTimes() {
  const { language, _ } = useContext(LanguageContext);
  const handleClickImage = () => {
    window.open("https://github.com/MolletSimon/Disney-Wait-Times", "_blank");
  };

  const handleClickGithub = () => {
    window.open("https://github.com/MolletSimon/Disney-Wait-Times", "_blank");
  };
  return (
    <div
      id="disney"
      data-aos="fade-up-left"
      className="flex justify-center md:m-20 mt-20 lg:m-40"
    >
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl mb-5 flex justify-center w-full">
          Disney Wait Times{" "}
          <img
            src="images/github.png"
            className="ml-6 cursor-pointer hover:scale-105 hover:transition-all "
            width={40}
            alt="github"
            onClick={handleClickGithub}
          />
        </h2>
        <div className="p-10 hover:scale-110 transition-all border-l-2 border-t-2 border-b-2 border-pastelBlue rounded-lg rounded-r-none shadow-xl">
          <p className="font-light text-md">
            {t[language].works.disneywaittimes.title}
          </p>
        </div>
        <div className="font-normal text-xs p-4 italic flex justify-evenly w-full text-primary">
          <p>@Flutter</p>
          <p>@Express.js</p>
          <p>@MongoDB</p>
          <p>@Firebase</p>
          <p>@Heroku</p>
          <p>@Figma</p>
        </div>
      </div>
      <img
        className="md:block w-[400px] xl:w-[700px] object-cover hidden rounded-2xl hover:scale-110 hover:transition-all cursor-pointer shadow-xl"
        src="images/DisneyWaitTimes/Home.png"
        onClick={handleClickImage}
        alt="Disney"
      />
    </div>
  );
}
