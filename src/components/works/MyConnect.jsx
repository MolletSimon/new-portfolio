export function MyConnect() {
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
      <img
        className="md:block w-[400px] xl:w-[700px] hidden object-cover rounded-md hover:scale-110 hover:transition-all cursor-pointer shadow-xl"
        src="images/MyConnect/Home.png"
        width={700}
        onClick={handleClickImage}
        alt="Where in the world"
      />
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl mb-5 flex justify-center w-full">
          My Connect{" "}
          <img
            src="images/github.png"
            className="ml-6 cursor-pointer hover:scale-105 hover:transition-all "
            width={40}
            alt="github"
            onClick={handleClickGithub}
          />
        </h2>
        <div className="p-10 bg-pastelPink rounded-md rounded-l-none shadow-xl">
          <p className="font-light text-md">
            My Connect is a mobile application targeting a group of people. It
            aims to organise events bringing together young adults (called
            Connect). <br />
            The idea of the application is to help the organization with a feed
            where people can post content ✉️, a shared calendar 📆, the notion
            of group, poll etc. The application has been designed and developed
            to work on Android, iOS, on tablet and smartphone format.
          </p>
        </div>
        <div className="font-normal text-xs p-4 italic flex justify-evenly w-full text-primary">
          <p>@Angular</p>
          <p>@Express.js</p>
          <p>@MongoDB</p>
          <p>@Firebase</p>
          <p>@Heroku</p>
        </div>
      </div>
    </div>
  );
}
