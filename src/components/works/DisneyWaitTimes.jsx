export function DisneyWaitTimes() {
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
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl mb-5 flex justify-center w-full">
          Disney Wait Times{" "}
          <img
            src="images/github.png"
            className="ml-6 cursor-pointer hover:scale-105 hover:transition-all "
            width={40}
            alt="github"
            onClick={handleClickGithub}
          />
        </h2>
        <div className="p-10 bg-pastelBlue rounded-md rounded-r-none shadow-xl">
          <p className="font-light text-md">
            Hybrid application that display the wait times for Walt Disney
            Studios et Disneyland Park Paris. Made with React Native and ❤️
          </p>
        </div>
        <div className="font-normal text-xs p-4 italic flex justify-evenly w-full text-primary">
          <p>@Flutter</p>
          <p>@Express.js</p>
          <p>@MongoDB</p>
          <p>@Firebase</p>
          <p>@Heroku</p>
          <p>@Figma</p>
        </div>
      </div>
      <img
        className="md:block w-[400px] xl:w-[700px] object-cover hidden rounded-2xl hover:scale-110 hover:transition-all cursor-pointer shadow-xl"
        src="images/DisneyWaitTimes/Home.png"
        onClick={handleClickImage}
        alt="Disney"
      />
    </div>
  );
}
