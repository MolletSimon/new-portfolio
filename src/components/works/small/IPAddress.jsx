export function IPAddress() {
  const github = () => {
    window.open("https://github.com/MolletSimon/ip-adress-tracker", "_blank");
  };

  const site = () => {
    window.open("https://ip-adress-tracker-rust.vercel.app/", "_blank");
  };
  return (
    <div
      className="rounded-md bg-pastelPink flex flex-col p-6 hover:transition-all 
           cursor-pointer hover:scale-110 justify-between"
    >
      <div className="hover:text-primary" onClick={site}>
        <h1 className="text-center m-2 text-lg font-semibold">
          IP Address Tracker 🔍
        </h1>
        <p className="text-center">
          Single Page Application that gives you the information on american IP
          Address.
        </p>
      </div>
      <div className="font-normal text-xs mt-4 italic flex items-center justify-evenly w-full text-primary flex-wrap">
        <span>@React</span>
        <span>@Tailwind</span>
        <span>@Leaflet</span>
        <img
          src="images/github.png"
          alt="github"
          width={30}
          className="hover:scale-110"
          onClick={github}
        />
      </div>
    </div>
  );
}
