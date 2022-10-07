import "./LanguageControl.css";

import IconGB from "./components/IconGB";
import IconKR from "./components/IconKR";
import IconPL from "./components/IconPL";
import { useTranslation } from "react-i18next";

const LanguageControl = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="language-control">
      <button
        className="icon-button"
        onClick={() => {
          i18n.changeLanguage("kr");
        }}
      >
        <IconKR />
      </button>
      <button
        className="icon-button"
        onClick={() => {
          i18n.changeLanguage("pl");
        }}
      >
        <IconPL />
      </button>
      <button
        className="icon-button"
        onClick={() => {
          i18n.changeLanguage("en");
        }}
      >
        <IconGB />
      </button>
    </div>
  );
};

export default LanguageControl;
