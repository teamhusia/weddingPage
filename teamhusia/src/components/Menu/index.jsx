import "./Menu.css";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import LanguageControl from "../LanguageControl";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Menu = ({}) => {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    setOpen(prev => !prev);
    const el = document.getElementById(sectionId);
    const vh = window.innerHeight;
    const y = el.getBoundingClientRect().top + window.pageYOffset - vh * 0.6;
    if (el) {
      window.scrollTo({ top: y, behaviour: "smooth" });
    }
  };

  return (
    <>
      <div className="menu">
        <div className={open ? "menu-content open" : "menu-content closed"}>
          <div className="menu-header">#TEAMHUSIA</div>
          <div className="navigation-list">
            {/* <a
              href="https://forms.gle/t4Aki38R7dKnPxZo7"
              target="_blank"
              // onClick={e => handleScroll(e, "section-rsvp")}
            >
              {t("MENU_RSVP")}
            </a> */}
            {/* <div className="divider" /> */}
            <a
              href="#section-livestream"
              onClick={e => handleScroll(e, "section-livestream")}
            >
              {t("MENU_LIVESTREAM")}
            </a>
            <a
              href="#section-invitation"
              onClick={e => handleScroll(e, "section-invitation")}
            >
              {t("MENU_HOME")}
            </a>
            <a
              href="#section-newsletter"
              onClick={e => handleScroll(e, "section-newsletter")}
            >
              {t("MENU_NEWSLETTER")}
            </a>
            <a
              href="#section-roadmap"
              onClick={e => handleScroll(e, "section-roadmap")}
            >
              {t("MENU_ROADMAP")}
            </a>
            <a
              href="#section-schedule"
              onClick={e => handleScroll(e, "section-schedule")}
            >
              {t("SCHEDULE")}
            </a>

            <a
              href="#section-contact"
              onClick={e => handleScroll(e, "section-contact")}
            >
              {t("MENU_CONTACT")}
            </a>
          </div>
        </div>
        <div className="lang-ctrl-container">
          <LanguageControl onClose={() => setOpen(false)} />
        </div>
        <button
          className="toggle-btn"
          onClick={e => {
            setOpen(prev => !prev);
            e.stopPropagation();
          }}
        >
          {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </button>
      </div>
      {open && <div className="menu-backdrop"></div>}
    </>
  );
};

export default Menu;
