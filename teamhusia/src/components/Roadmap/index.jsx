import "./Roadmap.css";

import { BrowserView, MobileView } from "react-device-detect";

import Board from "../Board";
import Card from "../Card";
import GoogleMapsLink from "../GoogleMapsLink";
import Image from "./components/Image";
import { useTranslation } from "react-i18next";

const Roadmap = ({}) => {
  const { t, i18n } = useTranslation();

  return (
    <section id="section-roadmap" className="min-fullscreen scroll-target">
      <div className="roadmap">
        <BrowserView>
          <Board>
            <Card>
              <article>
                <h1>{t("CEREMONY_LOC_TITLE")}</h1>
                <Image
                  src="/R6__8443_Fara_landscape_cut2.jpg"
                  width="100%"
                  height="14em"
                />
                <p>{t("CEREMONY_LOC_DESCRIPTION")}</p>
                <GoogleMapsLink url="https://goo.gl/maps/HUeqLMmVau3j2xDH7" />
              </article>
            </Card>
          </Board>
          <Board>
            <Card>
              <article>
                <h1>{t("CELEBRATION_LOC_TITLE")}</h1>
                <Image
                  src="/Stary_kamionek_cut1.jpg"
                  width="100%"
                  height="14em"
                />
                <p>{t("CELEBRATION_LOC_DESCRIPTION")}</p>
                <GoogleMapsLink url="https://goo.gl/maps/wBc6bgRYD93waBHe8" />
              </article>
            </Card>
          </Board>
          <div className="last">
            <Board>
              <Card>
                <article>
                  <h1>{t("ACCOMODATION_LOC_TITLE")}</h1>
                  <Image src="/hotel.jpg" width="100%" height="14em" />
                  <p>{t("ACCOMODATION_LOC_DESCRIPTION")}</p>
                  <GoogleMapsLink url="https://goo.gl/maps/ZthM6nBdzNFefsbT7" />
                </article>
              </Card>
            </Board>
          </div>
        </BrowserView>

        <MobileView>
          <Board>
            <Card>
              <article>
                <h1>{t("CEREMONY_LOC_TITLE")}</h1>
                <Image
                  src="/R6__8443_Fara_landscape_cut2.jpg"
                  width="100%"
                  height="9em"
                />
                <p>{t("CEREMONY_LOC_DESCRIPTION")}</p>
                <GoogleMapsLink url="https://goo.gl/maps/HUeqLMmVau3j2xDH7" />
              </article>
            </Card>
          </Board>
          <Board>
            <Card>
              <article>
                <h1>{t("CELEBRATION_LOC_TITLE")}</h1>
                <Image
                  src="/Stary_kamionek_cut1.jpg"
                  width="100%"
                  height="9em"
                />
                <p>{t("CELEBRATION_LOC_DESCRIPTION")}</p>
                <GoogleMapsLink url="https://goo.gl/maps/wBc6bgRYD93waBHe8" />
              </article>
            </Card>
          </Board>
          <div className="last">
            <Board>
              <Card>
                <article>
                  <h1>{t("ACCOMODATION_LOC_TITLE")}</h1>
                  <Image src="/hotel.jpg" width="100%" height="9em" />
                  <p>{t("ACCOMODATION_LOC_DESCRIPTION")}</p>
                  <GoogleMapsLink url="https://goo.gl/maps/ZthM6nBdzNFefsbT7" />
                </article>
              </Card>
            </Board>
          </div>
        </MobileView>
      </div>
    </section>
  );
};

export default Roadmap;
