import { useContext } from "react";
import LanguageContext from "../../../language-context";
import { t } from "../../../text";

export function SoccerStats() {
  const {language, _} = useContext(LanguageContext);

  const site = () => {
    window.open("https://github.com/MolletSimon/Soccer-Stats", "_blank");
  };
  return (
    <div
      className="rounded-md bg-pastelPink flex flex-col p-6 hover:transition-all 
           cursor-pointer hover:scale-110 justify-between "
    >
      <div className="hover:text-primary" onClick={site}>
        <h1 className="text-center m-2 text-lg font-semibold">
          Soccer stats 📱
        </h1>
        <p className="text-center">
          {t[language].works.small.soccer}
        </p>
      </div>
      <div className="font-normal text-xs mt-4 italic flex items-center justify-evenly w-full text-primary flex-wrap">
        <span>@Ionic</span>
        <span>@Angular</span>
      </div>
    </div>
  );
}
