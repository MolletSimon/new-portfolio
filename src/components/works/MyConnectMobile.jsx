import { useContext } from "react";
import LanguageContext from "../../language-context";
import { t } from "../../text";
import { WorkCard } from "../../lib/workCard";

export function MyConnectMobile() {
  const { language, _ } = useContext(LanguageContext);

  const handleClickImage = () => {
    window.open("https://github.com/MolletSimon/my-econnect-mobile", "_blank");
  };

  const handleClickGithub = () => {
    window.open("https://github.com/MolletSimon/my-econnect-mobile", "_blank");
  };
  return (
    <div
      id="my-connect-mobile"
      data-aos="fade-up-left"
      className="flex justify-center lg:m-40 md:m-20 mt-20 w-full md:w-auto"
    >
      <WorkCard
        img="images/MyConnectMobile/Home.png"
        title="My Connect - Mobile"
        text={t[language].works.myconnectmobile.title}
        secondaryText={t[language].works.myconnectmobile.desc}
      />
    </div>
  );
}
