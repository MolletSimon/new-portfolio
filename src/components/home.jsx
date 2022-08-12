export default function Home() {
  return (
    <div
      className="min-h-screen grid grid-rows-2 grid-cols-6 p-10 gap-8"
      id="home"
    >
      <div
        className="col-span-4 bg-witw bg-cover hover:scale-110 transition-all 
        flex items-center justify-center p-20 duration-500 rounded-lg shadow-lg 
        cursor-pointer hover:ml-14 hover:before:blur-md hover:before:bg-inherit hover:bg- hover:text-black hover:select: hover:backdrop-brightness-150 
        text-transparent"
      >
        <p>
          Where in the world is a collection of 4 geography games. The idea came
          out following a challenge on Frontend Mentor, I did most of the
          application from scratch using React for the frontend, Firebase for
          the backend, Figma for the design and Tailwind for the CSS integration
        </p>
      </div>
      <div
        className="col-span-2 bg-mycomob bg-cover hover:scale-110 transition-all 
      duration-500 rounded-lg shadow-lg cursor-pointer"
      ></div>
      <div
        className="col-span-2 bg-dwt bg-cover hover:scale-110 transition-all 
      duration-500 rounded-2xl shadow-lg cursor-pointer"
      ></div>
      <div
        className="col-span-4 bg-myco bg-cover hover:scale-110 transition-all 
      duration-500 rounded-lg shadow-lg cursor-pointer"
      ></div>
    </div>
  );
}
