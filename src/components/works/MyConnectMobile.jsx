export function MyConnectMobile() {
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
      <div className="flex flex-col items-center justify-center ">
        <h2 className="text-3xl mb-5 flex justify-center w-full">
          My Connect{" "}
          <img
            src="images/github.png"
            className="ml-6 cursor-pointer hover:scale-105 hover:transition-all object-cover"
            width={40}
            alt="github"
            onClick={handleClickGithub}
          />
        </h2>
        <div className="p-10 bg-pastelBlue rounded-md rounded-r-none shadow-xl">
          <p className="font-light text-md">
            My Connect is a mobile application 📱 developed for a group of
            people that organized event that assemble young adults (named
            Connect). <br />
            The idea of the application is to help the organization with a feed
            where people can posts content ✉️, a shared calendar 📆, the notion
            of group, poll etc. The application has been thought, designed and
            developed to work on Android, iOS, on tablet and smartphone format.
          </p>
        </div>
        <div className="font-normal text-xs p-4 italic flex justify-evenly w-full text-primary flex-wrap">
          <p>@Flutter</p>
          <p>@Express.js</p>
          <p>@MongoDB</p>
          <p>@Firebase</p>
          <p>@Heroku</p>
          <p>@Figma</p>
        </div>
      </div>
      <img
        className="md:block w-[400px] xl:w-[700px] hidden object-cover rounded-md hover:scale-110 hover:transition-all cursor-pointer shadow-xl"
        src="images/MyConnectMobile/Home.png"
        onClick={handleClickImage}
        alt="Where in the world"
      />
    </div>
  );
}
