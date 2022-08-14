import { IPAddress } from "./works/small/IPAddress";
import { Portfolio } from "./works/small/Portfolio";
import { SmallProjects } from "./works/small/SmallProjects";
import { SoccerStats } from "./works/small/SoccerStats";
import { DisneyWaitTimes } from "./works/DisneyWaitTimes";
import { MyConnect } from "./works/MyConnect";
import { MyConnectMobile } from "./works/MyConnectMobile";
import { WhereInTheWorld } from "./works/WhereInTheWorld";

export default function Home() {
  return (
    <div className="w-full min-h-screen" id="works">
      <div className="h-1"></div>
      <WhereInTheWorld />
      <MyConnectMobile />
      <MyConnect />
      <DisneyWaitTimes />
      <h1
        className="text-center m-10 font-semibold text-3xl"
        data-aos="fade-up"
      >
        Other small projects
      </h1>
      <div className="flex w-full justify-center mb-12">
        <div
          className="grid grid-cols-4 w-2/3 self-center gap-2"
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
