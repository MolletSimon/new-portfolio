import { useContext } from "react";
import LanguageContext from "../../../language-context";
import { t } from "../../../text";

export function Portfolio() {
  const {language, _} = useContext(LanguageContext);
  const github = () => {
    window.open("https://github.com/MolletSimon/new-portfolio", "_blank");
  };

  const site = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div
      className="rounded-md bg-pastelBlue flex flex-col p-6 hover:transition-all 
           cursor-pointer hover:scale-110 justify-between"
    >
      <div className="hover:text-primary" onClick={() => site()}>
        <h1 className="text-center m-2 text-lg font-semibold">
          This website 💼
        </h1>
        <p className="text-center">
          {t[language].works.small.portfolio}
        </p>
      </div>
      <div className="font-normal text-xs mt-4 italic flex items-center justify-evenly w-full text-primary flex-wrap">
        <span>@React</span>
        <span>@Figma</span>
        <span>@Tailwind</span>
        <img
          src="images/github.png"
          alt="github"
          width={30}
          className="hover:scale-110"
          onClick={github}
        />
      </div>
    </div>
  );
}
