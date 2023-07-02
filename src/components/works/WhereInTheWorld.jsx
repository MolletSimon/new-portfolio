import { useContext } from "react";
import LanguageContext from "../../language-context";
import { t } from "../../text";

export function WhereInTheWorld() {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleClickImage = () => {
    window.open("https://whereintheworld.online", "_blank");
  };

  const handleClickGithub = () => {
    window.open(
      "https://github.com/MolletSimon/where-in-the-world-the-game",
      "_blank"
    );
  };
  return (
    <div
      id="where-in-the-world"
      data-aos="fade-up-right"
      className="flex justify-center w-full md:w-auto mt-20 md:m-20 lg:m-40"
    >
      <img
        className="md:block w-[400px] xl:w-[700px] hidden rounded-md hover:scale-110 hover:transition-all object-cover cursor-pointer shadow-xl"
        src="images/WITW/Home.png"
        onClick={handleClickImage}
        alt="Where in the world"
      />
      <div className="flex flex-col items-center justify-center mt-20 md:mt-0">
        <h2 className="text-3xl mb-5 flex justify-center w-full">
          Where in the world{" "}
          <img
            src="images/github.png"
            className="ml-6 cursor-pointer hover:scale-105 hover:transition-all "
            width={40}
            alt="github"
            onClick={handleClickGithub}
          />
        </h2>
        <div className="p-10 hover:scale-110 transition-all rounded-lg rounded-l-none shadow-xl border-pastelPink border-r-2 border-t-2 border-b-2">
          <p className="font-light text-md italic">
            {t[language].works.witw.title} 🎮. 
            <br />
            {t[language].works.witw.desc}
          </p>
        </div>
        <div className="font-normal text-xs p-4 italic flex justify-evenly w-full text-primary flex-wrap">
          <p>@React</p>
          <p>@TailwindCSS</p>
          <p>@Firebase</p>
          <p>@Figma</p>
        </div>
      </div>
    </div>
  );
}
