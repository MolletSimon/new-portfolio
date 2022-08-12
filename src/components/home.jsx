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
    </div>
  );
}
