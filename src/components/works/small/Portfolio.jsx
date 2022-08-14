export function Portfolio() {
  const github = () => {
    window.open("https://github.com/MolletSimon/new-portfolio", "_blank");
  };

  const site = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div
      className="rounded-md bg-pastelBlue flex flex-col justify-between p-6 hover:transition-all 
           cursor-pointer hover:scale-110"
    >
      <div className="hover:text-primary" onClick={() => site()}>
        <h1 className="text-center m-2 text-lg font-semibold">
          This website 💼
        </h1>
        <p>This portfolio has been designed and built by myself.</p>
      </div>
      <div className="font-normal text-xs mt-4 italic flex items-center justify-evenly w-full text-primary">
        <span>@React</span>
        <span>@Figma</span>
        <span>@Tailwind</span>
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
