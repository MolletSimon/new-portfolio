import { useContext } from "react";
import LanguageContext from "../../language-context";
import { t } from "../../text";
import { WorkCard } from "../../lib/workCard";

export function MyConnect() {
  const { language, _ } = useContext(LanguageContext);
  const handleClickImage = () => {
    window.open("https://github.com/MolletSimon/my-connect", "_blank");
  };

  const handleClickGithub = () => {
    window.open("https://github.com/MolletSimon/my-connect", "_blank");
  };
  return (
    <div
      id="my-connect"
      data-aos="fade-up-right"
      className="flex justify-center md:m-20 lg:m-40 mt-20 w-full md:w-auto"
    >
      <WorkCard
        img="images/MyConnect/Home.png"
        title={t[language].works.myconnect.name}
        text={t[language].works.myconnect.title}
        secondaryText={t[language].works.myconnect.desc}
      />
    </div>
  );
}
