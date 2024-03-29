import { IPAddress } from "./works/small/IPAddress";
import { Portfolio } from "./works/small/Portfolio";
import { SmallProjects } from "./works/small/SmallProjects";
import { SoccerStats } from "./works/small/SoccerStats";
import { DisneyWaitTimes } from "./works/DisneyWaitTimes";
import { MyConnect } from "./works/MyConnect";
import { MyConnectMobile } from "./works/MyConnectMobile";
import { WhereInTheWorld } from "./works/WhereInTheWorld";
import { useContext } from "react";
import LanguageContext from "../language-context";
import { t } from "../text";
import { OnGoal } from "./works/OnGoal";
import { OnGoalWeb } from "./works/OnGoalWeb";

export default function Works() {
  const { language, setLanguage } = useContext(LanguageContext);
  return (
    <div className="w-full min-h-screen" id="works">
      <div className="h-1"></div>
      <h1
        className="font-semibold text-5xl text-center mt-20"
        data-aos="fade-up"
      >
        {t[language].works.project}
      </h1>
      <OnGoalWeb />
      <OnGoal />
      <WhereInTheWorld />
      <MyConnectMobile />
      <MyConnect />
      <DisneyWaitTimes />
      <h1
        className="text-center m-10 font-semibold text-3xl"
        data-aos="fade-up"
      >
        {t[language].works.smallProject}
      </h1>
      <div className="flex w-full justify-center mb-12">
        <div
          className="grid grid-rows-2 grid-cols-2 lg:grid-rows-1 lg:grid-cols-4 md:w-4/5 lg:w-2/3 self-center gap-2"
          data-aos="flip-up"
        >
          <SoccerStats></SoccerStats>
          <Portfolio></Portfolio>
          <IPAddress></IPAddress>
          <SmallProjects></SmallProjects>
        </div>
      </div>
    </div>
  );
}
