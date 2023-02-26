import { useContext } from "react";
import "../App.css";
import LanguageContext from "../language-context";
import { t } from "../text";

export default function Header() {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div className="w-full flex flex-row justify-between p-10">
      <div className="ml-10 flex">
        <img
          className="rounded-full w-8 h-8 object-cover shadow-md mr-6 hover:scale-125 hover:cursor-pointer hover:transition-all duration-500"
          src="images/fr.png"
          alt="french flag"
          onClick={() => setLanguage("fr")}
        />
        <img
          className="rounded-full w-8 h-8 object-cover shadow-md hover:scale-125 hover:cursor-pointer hover:transition-all duration-500"
          src="images/en.png"
          alt="uk flag"
          onClick={() => setLanguage("en")}
        />
      </div>
      <nav className="scroll-smooth items-center flex flex-col md:flex-row">
        <a
          className="text-nav tracking-widest hover:text-primary mr-16 effect-shine hover:font-bold hover:scale-110 hover:transition-all duration-500 cursor-pointer"
          href="#about"
        >
          {t[language].header.about}
        </a>
        <a
          className="text-nav tracking-widest hover:text-primary mr-16 effect-shine hover:font-bold hover:scale-110 hover:transition-all duration-500 cursor-pointer"
          href="#experiences"
        >
          {t[language].header.experiences}
        </a>
        <a
          className="text-nav tracking-widest hover:text-primary mr-16 effect-shine hover:font-bold hover:scale-110 hover:transition-all duration-500 cursor-pointer"
          href="#works"
        >
          {t[language].header.works}
        </a>
        <a
          className="text-nav tracking-widest hover:text-primary mr-16 effect-shine hover:font-bold hover:scale-110 hover:transition-all duration-500 cursor-pointer"
          href="#contact"
        >
          {t[language].header.contact}
        </a>
      </nav>
    </div>
  );
}
