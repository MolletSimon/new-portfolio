import { useContext } from "react";
import LanguageContext from "../../../language-context";
import { t } from "../../../text";

export function SmallProjects() {
  const {language, _} = useContext(LanguageContext);

  const site = () => {
    window.open(
      "https://github.com/MolletSimon/All-my-small-projects",
      "_blank"
    );
  };

  return (
    <div
      className="rounded-md bg-pastelBlue flex flex-col p-6 hover:transition-all 
          hover:text-primary cursor-pointer hover:scale-110 justify-between"
      onClick={site}
    >
      <h1 className="text-center m-2 text-xl font-semibold">
        All small projects 🖇
      </h1>
      <p className="text-center">{t[language].works.small.small}</p>
      <div className="font-normal text-xs mt-4 italic flex justify-evenly w-full text-primary flex-wrap">
        <span>@React</span>
        <span>@Tailwind</span>
        <span>@Next</span>
        <span>@Ionic</span>
      </div>
    </div>
  );
}
