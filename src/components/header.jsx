import "../App.css";

export default function Header() {
  return (
    <nav className="w-full flex justify-end p-10 scroll-smooth flex-col md:flex-row">
      <a
        className="text-nav tracking-widest hover:text-primary mr-16 effect-shine hover:font-bold hover:scale-110 hover:transition-all duration-500 cursor-pointer"
        href="#about"
      >
        ABOUT ME
      </a>
      <a
        className="text-nav tracking-widest hover:text-primary mr-16 effect-shine hover:font-bold hover:scale-110 hover:transition-all duration-500 cursor-pointer"
        href="#works"
      >
        PROJECTS
      </a>
      <a
        className="text-nav tracking-widest hover:text-primary mr-16 effect-shine hover:font-bold hover:scale-110 hover:transition-all duration-500 cursor-pointer"
        href="#experiences"
      >
        EXPERIENCES
      </a>
    </nav>
  );
}
