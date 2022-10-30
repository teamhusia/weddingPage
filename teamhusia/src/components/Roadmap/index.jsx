import "./Roadmap.css";

import { BrowserView, MobileView } from "react-device-detect";

import Card from "../Card";
import Footer from "../Footer";
import GoogleMapsLink from "../GoogleMapsLink";
import Image from "./components/Image";
import Menu from "../Menu";
import Section from "../Section";
import { useTranslation } from "react-i18next";

const Roadmap = ({}) => {
  const { t, i18n } = useTranslation();

  return (
    <div className="roadmap">
      <BrowserView>
        <Menu />
        <Section>
          <Card>
            <section>
              <h1>{t("CEREMONY_LOC_TITLE")}</h1>
              <Image
                src="/R6__8443_Fara_landscape_cut2.jpg"
                width="100%"
                height="14em"
              />
              <p>{t("CEREMONY_LOC_DESCRIPTION")}</p>
              <GoogleMapsLink url="https://goo.gl/maps/HUeqLMmVau3j2xDH7" />
            </section>
          </Card>
        </Section>
        <Section>
          <Card>
            <section>
              <h1>{t("CELEBRATION_LOC_TITLE")}</h1>
              <Image
                src="/Stary_kamionek_cut1.jpg"
                width="100%"
                height="14em"
              />
              <p>{t("CELEBRATION_LOC_DESCRIPTION")}</p>
              <GoogleMapsLink url="https://goo.gl/maps/wBc6bgRYD93waBHe8" />
            </section>
          </Card>
        </Section>
        <div className="last">
          <Section>
            <Card>
              <section>
                <h1>{t("ACCOMODATION_LOC_TITLE")}</h1>
                <Image src="/hotel.jpg" width="100%" height="14em" />
                <p>{t("ACCOMODATION_LOC_DESCRIPTION")}</p>
                <GoogleMapsLink url="https://goo.gl/maps/ZthM6nBdzNFefsbT7" />
              </section>
            </Card>
          </Section>
        </div>
        <Footer />
      </BrowserView>

      <MobileView>
        <Menu />
        <Section>
          <Card>
            <section>
              <h1>{t("CEREMONY_LOC_TITLE")}</h1>
              <Image
                src="/R6__8443_Fara_landscape_cut2.jpg"
                width="100%"
                height="9em"
              />
              <p>{t("CEREMONY_LOC_DESCRIPTION")}</p>
              <GoogleMapsLink url="https://goo.gl/maps/HUeqLMmVau3j2xDH7" />
            </section>
          </Card>
        </Section>
        <Section>
          <Card>
            <section>
              <h1>{t("CELEBRATION_LOC_TITLE")}</h1>
              <Image src="/Stary_kamionek_cut1.jpg" width="100%" height="9em" />
              <p>{t("CELEBRATION_LOC_DESCRIPTION")}</p>
              <GoogleMapsLink url="https://goo.gl/maps/wBc6bgRYD93waBHe8" />
            </section>
          </Card>
        </Section>
        <div className="last">
          <Section>
            <Card>
              <section>
                <h1>{t("ACCOMODATION_LOC_TITLE")}</h1>
                <Image src="/hotel.jpg" width="100%" height="9em" />
                <p>{t("ACCOMODATION_LOC_DESCRIPTION")}</p>
                <GoogleMapsLink url="https://goo.gl/maps/ZthM6nBdzNFefsbT7" />
              </section>
            </Card>
          </Section>
        </div>
        {/* <Footer /> */}
      </MobileView>
    </div>
  );
};

export default Roadmap;
