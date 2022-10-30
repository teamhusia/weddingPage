import "./Menu.css";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import LanguageControl from "../LanguageControl";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Menu = ({}) => {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="menu">
        <div className={open ? "menu-content open" : "menu-content closed"}>
          <div className="menu-header">#TEAMHUSIA</div>
          <div className="navigation-list">
            <Link to={"/"}>{t("MENU_HOME")}</Link>
            <div className="divider" />
            <Link to={"/roadmap"}>{t("MENU_ROADMAP")}</Link>
            <div className="divider" />
            {/* <Link to={"/team"}>{t("MENU_TEAM")}</Link>
            <div className="divider" /> */}
            <Link to={"/contact"}>{t("MENU_CONTACT")}</Link>
          </div>
        </div>
        <div className="lang-ctrl-container">
          <LanguageControl />
        </div>
        <button className="toggle-btn" onClick={() => setOpen(!open)}>
          {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </button>
      </div>
      {open && <div className="menu-backdrop"></div>}
    </>
  );
};

export default Menu;
