import "../App.css";

export default function Header() {
  return (
    <nav
      className="w-full flex justify-end p-10 scroll-smooth"
      data-aos="flip-up"
      data-aos-once="true"
    >
      <a
        className="text-nav tracking-widest mr-16 hover:line-through cursor-pointer"
        href="#works"
      >
        WORKS
      </a>
      <a
        className="text-nav tracking-widest mr-16 hover:line-through cursor-pointer"
        href="#experiences"
      >
        EXPERIENCES
      </a>
      <a
        className="text-nav tracking-widest mr-16 hover:line-through cursor-pointer"
        href="#about"
      >
        ABOUT ME
      </a>
    </nav>
  );
}
