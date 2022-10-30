import "./Contact.css";

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

import Card from "../Card";
import Footer from "../Footer";
import Menu from "../Menu";
import Section from "../Section";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="contact">
      <BrowserView>
        <Menu />
        <Section>
          <Card className="card-contact">
            <h1>{t("Contact")}</h1>

            <div className="profile-list">
              <div className="profile">
                <img src="/HJ-pic.jpg" className="profile-picture" />
                <h2>Heungjae Choi</h2>
                <p>ENG 07492089086</p>
              </div>

              <div className="profile">
                <img src="/KS2-pic.jpg" className="profile-picture" />
                <h2>Katarzyna Koprowska</h2>
                <p>ENG 07713415458</p>
                <p>PL 667 674 077</p>
              </div>
            </div>
          </Card>
        </Section>
      </BrowserView>

      <MobileView>
        <Menu />
        <Card className="contact">
          <h1>{t("MENU_CONTACT")}</h1>

          <div className="profile">
            <img src="/HJ-pic.jpg" className="profile-picture" />
            <h2>Heungjae Choi</h2>
            <p>ENG 07492089086</p>
          </div>

          <div className="profile">
            <img src="/KS2-pic.jpg" className="profile-picture" />
            <h2>Katarzyna Koprowska</h2>
            <p>ENG 07713415458</p>
            <p>PL 667 674 077</p>
          </div>
        </Card>
        <Footer />
      </MobileView>
    </div>
  );
};

export default Contact;
