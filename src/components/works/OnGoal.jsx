import { useContext } from "react";
import { t } from "../../text";
import LanguageContext from "../../language-context";
import { WorkCard } from "../../lib/workCard";

export function OnGoal() {
  const { language, _ } = useContext(LanguageContext);
  return (
    <div className="md:m-20 lg:m-40 mt-20 w-full md:w-auto">
      <WorkCard
        title={t[language].works.ongoalmobile.name}
        img="images/ongoal.png"
        text={t[language].works.ongoalmobile.title}
        secondaryText={t[language].works.ongoalmobile.desc}
      />
    </div>
  );
}
