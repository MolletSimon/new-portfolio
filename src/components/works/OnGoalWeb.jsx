import { useContext } from "react";
import { t } from "../../text";
import LanguageContext from "../../language-context";
import { WorkCard } from "../../lib/workCard";

export function OnGoalWeb() {
  const { language, _ } = useContext(LanguageContext);
  return (
    <div className="md:m-20 lg:m-40 mt-20 w-full md:w-auto">
      <WorkCard
        title="On Goal ⚽︎"
        img="images/ongoalweb.jpeg"
        text={t[language].works.ongoal.title}
        secondaryText={t[language].works.ongoal.desc}
      />
    </div>
  );
}
