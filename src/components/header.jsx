import { useContext, useState } from "react";
import "../App.css";
import LanguageContext from "../language-context";
import { t } from "../text";
import { Menu } from "lucide-react";
import { GripVertical } from "lucide-react";

export default function Header() {
  const { language, setLanguage } = useContext(LanguageContext);
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="w-full flex flex-row justify-between lg:p-10">
      <div className="lg:ml-10 flex flex-col lg:flex-row m-4 gap-4">
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

      <nav className="scroll-smooth lg:mr-16 lg:items-center gap-2 m-4 lg:gap-12 lg:flex items-end flex-row hidden">
        <a
          className="text-nav tracking-widest hover:text-primary effect-shine hover:font-bold hover:scale-110 hover:transition-all duration-500 cursor-pointer"
          href="#about"
        >
          {t[language].header.about}
        </a>
        <a
          className="text-nav tracking-widest hover:text-primary effect-shine hover:font-bold hover:scale-110 hover:transition-all duration-500 cursor-pointer"
          href="#experiences"
        >
          {t[language].header.experiences}
        </a>
        <a
          className="text-nav tracking-widest hover:text-primary effect-shine hover:font-bold hover:scale-110 hover:transition-all duration-500 cursor-pointer"
          href="#works"
        >
          {t[language].header.works}
        </a>
        <a
          className="text-nav tracking-widest hover:text-primary effect-shine hover:font-bold hover:scale-110 hover:transition-all duration-500 cursor-pointer"
          href="#contact"
        >
          {t[language].header.contact}
        </a>
      </nav>

      <div className="block lg:hidden mr-10 mt-10">
        <button
          onClick={() => setMenuOpened(!menuOpened)}
          className="text-2xl mr-10"
        >
          <Menu />
        </button>
        {menuOpened && (
          <div className="absolute top-16 right-0 bg-white w-48 shadow-md rounded-lg mr-10">
            <ul className="py-2">
              <a
                href="#about"
                className="block px-4 py-3 border-b text-nav tracking-widest hover:text-primary effect-shine hover:font-bold hover:scale-110 hover:transition-all duration-500 cursor-pointer"
              >
                {t[language].header.about}
              </a>
              <a
                href="#experiences"
                className="block px-4 py-3 border-b text-nav tracking-widest hover:text-primary effect-shine hover:font-bold hover:scale-110 hover:transition-all duration-500 cursor-pointer"
              >
                {t[language].header.experiences}
              </a>
              <a
                href="#works"
                className="block px-4 py-3 border-b text-nav tracking-widest hover:text-primary effect-shine hover:font-bold hover:scale-110 hover:transition-all duration-500 cursor-pointer"
              >
                {t[language].header.works}
              </a>
              <a
                href="#contact"
                className="block px-4 py-3 text-nav tracking-widest hover:text-primary effect-shine hover:font-bold hover:scale-110 hover:transition-all duration-500 cursor-pointer"
              >
                {t[language].header.contact}
              </a>
            </ul>
          </div>
        )}
      </div>

      {/* <div className="flex xl:hidden mr-6 h-fit mt-6">
        {menuOpened && (
          <div className=" bg-white flex flex-col items-end gap-4 p-4 rounded-lg h-fit mr-6">
            <a
              className="text-nav tracking-widest hover:text-primary effect-shine hover:font-bold hover:scale-110 hover:transition-all duration-500 cursor-pointer"
              href="#about"
            >
              {t[language].header.about}
            </a>
            <a
              className="text-nav tracking-widest hover:text-primary effect-shine hover:font-bold hover:scale-110 hover:transition-all duration-500 cursor-pointer"
              href="#experiences"
            >
              {t[language].header.experiences}
            </a>
            <a
              className="text-nav tracking-widest hover:text-primary effect-shine hover:font-bold hover:scale-110 hover:transition-all duration-500 cursor-pointer"
              href="#works"
            >
              {t[language].header.works}
            </a>
            <a
              className="text-nav tracking-widest hover:text-primary effect-shine hover:font-bold hover:scale-110 hover:transition-all duration-500 cursor-pointer"
              href="#contact"
            >
              {t[language].header.contact}
            </a>
          </div>
        )}
        <button
          onClick={() => setMenuOpened(!menuOpened)}
          className="absolute right-6"
        >
          <Menu />
        </button>
      </div> */}
    </div>
  );
}
