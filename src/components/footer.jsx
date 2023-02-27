import { useContext } from "react";
import LanguageContext from "../language-context";
import { t } from "../text";

export default function Footer() {
  const {language, _} = useContext(LanguageContext);
  return (
    <div className="mt-32 mb-10">
      <p className="italic text-sm text-center">
        {t[language].footer.made} <br />{" "}
        {t[language].footer.inspired}
      </p>
    </div>
  );
}
