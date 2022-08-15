export default function About() {
  return (
    <div className="min-h-screen" id="about">
      <div className="h-1"></div>
      <h1
        className="font-semibold text-5xl text-center mt-12"
        data-aos="fade-up"
      >
        About me
      </h1>
      <div className="flex w-full justify-around mt-16">
        <div className="w-1/2 md:m-10 lg:m-20 xl:m-40 xl:mt-20">
          <p
            className="text-sm md:text-md lg:text-lg font-normal"
            data-aos="fade-up-right"
          >
            Hello ! I'm <span className="text-primary">Simon</span>, a french
            frontend engineer. <br />
            <br />
            Passionate by development since 2017, I really discovered frontend 3
            years ago with{" "}
            <a
              href="https://angular.io/start"
              className="text-primary hover:line-through italic"
              target="_blank"
            >
              Angular
            </a>
            . I also started mobile development with Ionic at the same time,
            which leads me to{" "}
            <a
              href="https://reactnative.dev/"
              target="_blank"
              className="text-primary hover:line-through italic"
            >
              React Native
            </a>{" "}
            ⚛️ and then{" "}
            <a
              href="https://fr.reactjs.org/"
              target="_blank"
              className="text-primary hover:line-through italic"
            >
              React
            </a>{" "}
            .<br /> I really appreciate working with React (or its environment
            like Preact or Next), the architecture and its lightweight made me
            felt in love with it.
            <br />
            <br />I am currently working for{" "}
            <a
              href="https://www.attineos.com/"
              target="_blank"
              className="text-primary hover:line-through italic"
            >
              Attineos
            </a>{" "}
            🐘, a software and computing services company, as an apprentice
            full-stack engineer. My main mission are building web applications
            for an insurance company with Angular and .NET Core environment.
            <br />
            <br />I am comfortable with many technlogies but here are the main :
            <div className="flex flex-col ml-6">
              <span> {">"} JavaScript (ES2015, ES6+), TypeScript</span>
              <span> {">"} React.js, Angular</span>
              <span> {">"} .NET Core, Express.js</span>
              <span> {">"} ReactNative, Flutter</span>
            </div>
          </p>
        </div>
        <div className="w-1/2 flex flex-col m-20 justify-center items-center">
          <div className="w-full flex justify-between">
            <a
              href="https://www.linkedin.com/in/simon-mollet/"
              target="_blank"
              className="rounded-full border-2 border-pastelPink p-6 cursor-pointer 
            shadow-lg shadow-pastelPink hover:bg-pastelPink hover:transition-colors duration-700"
              data-aos="fade-down-right"
            >
              <img src="images/linkedin-plain.png" alt="linkedin" width={30} />
            </a>
            <a
              href="https://github.com/MolletSimon"
              target="_blank"
              className="rounded-full border-2 border-pastelPink p-6 cursor-pointer 
            shadow-lg shadow-pastelPink hover:bg-pastelPink hover:transition-colors duration-700"
              data-aos="fade-down-left"
            >
              <img src="images/github-plain.png" alt="github" width={30} />
            </a>
          </div>
          <div>
            <img
              src="images/memoji.png"
              alt="memoji"
              className="rounded-full"
              width={300}
            />
          </div>
          <div className="w-full flex justify-between">
            <a
              href="files/resume.pdf"
              className="rounded-full border-2 border-pastelPink p-6 cursor-pointer 
            shadow-lg shadow-pastelPink hover:bg-pastelPink hover:transition-colors duration-700"
              data-aos="fade-up-right"
            >
              <img src="images/cv.png" alt="resume" width={30} />
            </a>
            <a
              href="mailto:mollet.simon.pro@gmail.com"
              className="rounded-full border-2 border-pastelPink p-6 cursor-pointer 
            shadow-lg shadow-pastelPink hover:bg-pastelPink hover:transition-colors duration-700"
              data-aos="fade-up-left"
            >
              <img src="images/mail.png" alt="mail" width={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
