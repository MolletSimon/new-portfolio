import AnimatedText from "react-animated-text-content";
import { Fade } from "react-reveal";

export default function Landing() {
  return (
    <div className="min-h-screen">
      <Fade cascade>
        <div className="grid grid-cols-6 grid-rows-1 items-center min-h-full">
          <h1 className="text-title tracking-title col-span-4 leading-[78px] ml-[93px]  mt-36">
            Hey there! I’m{" "}
            <AnimatedText
              type="chars"
              interval={0.04}
              tag="span"
              duration={1.5}
              className="text-[#BBE5ED]"
              animation={{
                y: "-100px",
                ease: "ease-in-out",
              }}
            >
              Simon
            </AnimatedText>
            , a french
            <span className="text-[#BBE5ED]">
              {" "}
              <AnimatedText
                type="chars"
                interval={0.04}
                tag="span"
                duration={1.5}
                className="text-[#BBE5ED]"
                animation={{
                  y: "-100px",
                  ease: "ease-in-out",
                }}
              >
                frontend
              </AnimatedText>
            </span>{" "}
            engineer passionate by React and all the JS environment.
          </h1>
          <div className="col-span-2">
            <img
              className="ml-[93px] mt-36"
              src="images/pp.png"
              alt="profile-picture"
              width={377}
              height={344}
            />
          </div>
        </div>
      </Fade>
    </div>
  );
}

// ml-[93px]  mt-36
