import "./LanguageControl.css";

import SvgGB from "./components/SvgGB";
import SvgKR from "./components/SvgKR";
import SvgPL from "./components/SvgPL";
import { useTranslation } from "react-i18next";

// const Container = styled.div`
//   /* background-color: ${colors.lightNavy}; */
//   width: fit-content;
//   display: flex;
//   align-items: center;
//   align-content: center;
//   justify-content: center;
// `;

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
        <SvgKR />
      </button>
      <button
        className="icon-button"
        onClick={() => {
          i18n.changeLanguage("pl");
        }}
      >
        <SvgPL />
      </button>
      <button
        className="icon-button"
        onClick={() => {
          i18n.changeLanguage("en");
        }}
      >
        <SvgGB />
      </button>
    </div>
  );
};

export default LanguageControl;
