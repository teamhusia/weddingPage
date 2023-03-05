import "./Contact.css";

import { BrowserView, MobileView } from "react-device-detect";

import Board from "../Board";
import Card from "../Card";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t, i18n } = useTranslation();

  return (
    <section id="section-contact" className="contact scroll-target">
      <BrowserView>
        <Board>
          <Card className="card-contact">
            <h1>{t("Contact")}</h1>

            <img src="/both.jpg" className="roadmap-banner" />

            <div className="profile-list">
              <div className="profile">
                <h2>Katarzyna Koprowska</h2>
                <p>
                  ENG 07713415458
                  <br />
                  PL 667 674 077
                </p>
              </div>

              <div className="profile">
                <h2>Heungjae Choi</h2>
                <p>ENG 07492089086</p>
              </div>
            </div>
          </Card>
        </Board>
      </BrowserView>

      <MobileView>
        <Board>
          <Card className="contact">
            <h1>{t("MENU_CONTACT")}</h1>

            <img src="/both.jpg" className="roadmap-banner" />

            <div className="profile">
              <h2>Katarzyna Koprowska</h2>
              <p>
                ENG 07713415458
                <br />
                PL 667 674 077
              </p>
            </div>

            <div className="profile">
              <h2>Heungjae Choi</h2>
              <p>ENG 07492089086</p>
            </div>
          </Card>
        </Board>
      </MobileView>
    </section>
  );
};

export default Contact;
