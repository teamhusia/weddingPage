import "./LanguageControl.css";

import IconGB from "./components/IconGB";
import IconKR from "./components/IconKR";
import IconPL from "./components/IconPL";
import { useTranslation } from "react-i18next";

const LanguageControl = ({ onClose }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className="language-control">
      <button
        className={`icon-button ${
          i18n.language === "kr" ? "active" : "inactive"
        }`}
        onClick={() => {
          i18n.changeLanguage("kr");
          onClose();
        }}
      >
        <IconKR />
      </button>
      <button
        className={`icon-button ${
          i18n.language === "pl" || i18n.language === "pl-PL"
            ? "active"
            : "inactive"
        }`}
        onClick={() => {
          i18n.changeLanguage("pl");
          onClose();
        }}
      >
        <IconPL />
      </button>
      <button
        className={`icon-button ${
          i18n.language === "en" ? "active" : "inactive"
        }`}
        onClick={() => {
          i18n.changeLanguage("en");
          onClose();
        }}
      >
        <IconGB />
      </button>
    </div>
  );
};

export default LanguageControl;
