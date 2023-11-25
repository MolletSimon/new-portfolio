import { useContext } from "react";
import LanguageContext from "../../language-context";
import { t } from "../../text";
import { WorkCard } from "../../lib/workCard";

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
      <WorkCard
        img="images/WITW/where.png"
        title="Where in the world 🌍🕹️"
        text={t[language].works.witw.title}
        secondaryText={t[language].works.witw.desc}
      />
    </div>
  );
}
