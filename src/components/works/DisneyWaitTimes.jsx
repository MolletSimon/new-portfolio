import { useContext } from "react";
import LanguageContext from "../../language-context";
import { t } from "../../text";
import { WorkCard } from "../../lib/workCard";

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
      <WorkCard
        img="images/DisneyWaitTimes/Home.png"
        title="Disney Wait Times 🕝"
        text={t[language].works.disneywaittimes.title}
      />
    </div>
  );
}
