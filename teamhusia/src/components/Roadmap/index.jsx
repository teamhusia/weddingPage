import "./Roadmap.css";

import { BrowserView, MobileView } from "react-device-detect";

import Board from "../Board";
import Card from "../Card";
import GoogleMapsLink from "../GoogleMapsLink";
import Image from "./components/Image";
import { useTranslation } from "react-i18next";

const Roadmap = ({}) => {
  const { t, i18n } = useTranslation();
  console.log(i18n.language);

  return (
    <section id="section-roadmap" className="min-fullscreen scroll-target">
      <div className="roadmap">
        <Board>
          <Card>
            <div>
              <h1>{t("ROADMAP")}</h1>
            </div>
            <BrowserView>
              <img
                src="/map-wide-opt.png"
                width="100%"
                alt="A map showing the main landmarks of the event"
              />

              <article>
                <h2>{t("CEREMONY_LOC_TITLE")}</h2>
                <h3 className="roadmap-subtitle">
                  {t("CEREMONY_LOC_SUBTITLE")}
                </h3>
                <Image
                  src="/R6__8443_Fara_landscape_cut2.jpg"
                  width="100%"
                  height="14em"
                />
                <div className="roadmap-content">
                  <p>{t("CEREMONY_LOC_DESCRIPTION")}</p>
                  <GoogleMapsLink url="https://goo.gl/maps/HUeqLMmVau3j2xDH7" />
                </div>
              </article>

              <article>
                <h2>{t("CELEBRATION_LOC_TITLE")}</h2>
                <h3 className="roadmap-subtitle">
                  {t("CELEBRATION_LOC_SUBTITLE")}
                </h3>
                <Image
                  src="/Stary_kamionek_cut1.jpg"
                  width="100%"
                  height="14em"
                />
                <div className="roadmap-content">
                  <p>{t("CELEBRATION_LOC_DESCRIPTION")}</p>
                  <GoogleMapsLink url="https://goo.gl/maps/wBc6bgRYD93waBHe8" />
                </div>
              </article>

              {i18n.language !== "pl" && (
                <article>
                  <h2>{t("KASIAS_HOUSE_TITLE")}</h2>
                  <h3 className="roadmap-subtitle">
                    {t("KASIAS_HOUSE_SUBTITLE")}
                  </h3>
                  <Image src="/morszynska-cut.jpg" width="100%" height="14em" />
                  <div className="roadmap-content">
                    <p>{t("KASIAS_HOUSE_DESCRIPTION")}</p>
                    <GoogleMapsLink url="https://goo.gl/maps/zprAcdU9XbKxdsWdA" />
                  </div>
                </article>
              )}

              <article>
                <h2>{t("ACCOMODATION_LOC_TITLE")}</h2>
                <h3 className="roadmap-subtitle">
                  {t("ACCOMODATION_LOC_SUBTITLE")}
                </h3>
                <Image src="/hotel.jpg" width="100%" height="14em" />
                <div className="roadmap-content">
                  <p>{t("ACCOMODATION_LOC_DESCRIPTION")}</p>
                  <GoogleMapsLink url="https://goo.gl/maps/ZthM6nBdzNFefsbT7" />
                </div>
              </article>

              {i18n.language !== "pl" && (
                <article>
                  <h2>{t("AIRPORT_LOC_TITLE")}</h2>
                  <div className="roadmap-content">
                    <p>
                      {t("AIRPORT_LOC_DESCRIPTION")} <br />
                      {t("AIRPORT_FLIGHTS_TEXT")}
                    </p>
                    <div className="row">
                      <img
                        src="flights-1.jpg"
                        width="300px"
                        style={{ borderRadius: "1em" }}
                        alt="calendar showing possible flights from the UK"
                      />
                      <img
                        src="flights-2.png"
                        width="300px"
                        style={{ borderRadius: "1em" }}
                        alt="calendar showing possible flights from the UK"
                      />
                    </div>
                    <GoogleMapsLink url="https://goo.gl/maps/ZthM6nBdzNFefsbT7" />
                  </div>
                </article>
              )}
            </BrowserView>

            <MobileView>
              <Image src="/map-narrow-opt.png" width="100%" height="14em" />
              <article>
                <h2>{t("CEREMONY_LOC_TITLE")}</h2>
                <h3 className="roadmap-subtitle">
                  {t("CEREMONY_LOC_SUBTITLE")}
                </h3>
                <Image
                  src="/R6__8443_Fara_landscape_cut2.jpg"
                  width="100%"
                  height="9em"
                />
                <div className="roadmap-content">
                  <p>{t("CEREMONY_LOC_DESCRIPTION")}</p>
                  <GoogleMapsLink url="https://goo.gl/maps/HUeqLMmVau3j2xDH7" />
                </div>
              </article>
              <article>
                <h2>{t("CELEBRATION_LOC_TITLE")}</h2>
                <h3 className="roadmap-subtitle">
                  {t("CELEBRATION_LOC_SUBTITLE")}
                </h3>
                <Image
                  src="/Stary_kamionek_cut1.jpg"
                  width="100%"
                  height="9em"
                />
                <div className="roadmap-content">
                  <p>{t("CELEBRATION_LOC_DESCRIPTION")}</p>
                  <GoogleMapsLink url="https://goo.gl/maps/wBc6bgRYD93waBHe8" />
                </div>
              </article>
              <article>
                <h2>{t("ACCOMODATION_LOC_TITLE")}</h2>
                <h3 className="roadmap-subtitle">
                  {t("ACCOMODATION_LOC_SUBTITLE")}
                </h3>
                <Image src="/hotel.jpg" width="100%" height="9em" />
                <div className="roadmap-content">
                  <p>{t("ACCOMODATION_LOC_DESCRIPTION")}</p>
                  <GoogleMapsLink url="https://goo.gl/maps/ZthM6nBdzNFefsbT7" />
                </div>
              </article>

              {i18n.language !== "pl" && (
                <article>
                  <h2>{t("KASIAS_HOUSE_TITLE")}</h2>
                  <h3 className="roadmap-subtitle">
                    {t("KASIAS_HOUSE_SUBTITLE")}
                  </h3>
                  <Image src="/morszynska-cut.jpg" width="100%" height="14em" />
                  <div className="roadmap-content">
                    <p>{t("KASIAS_HOUSE_DESCRIPTION")}</p>
                    <GoogleMapsLink url="https://goo.gl/maps/zprAcdU9XbKxdsWdA" />
                  </div>
                </article>
              )}

              <article>
                <h2>{t("ACCOMODATION_LOC_TITLE")}</h2>
                <h3 className="roadmap-subtitle">
                  {t("ACCOMODATION_LOC_SUBTITLE")}
                </h3>
                <Image src="/hotel.jpg" width="100%" height="14em" />
                <div className="roadmap-content">
                  <p>{t("ACCOMODATION_LOC_DESCRIPTION")}</p>
                  <GoogleMapsLink url="https://goo.gl/maps/ZthM6nBdzNFefsbT7" />
                </div>
              </article>

              {i18n.language !== "pl" && (
                <article>
                  <h2>{t("AIRPORT_LOC_TITLE")}</h2>
                  <div className="roadmap-content">
                    <p>
                      {t("AIRPORT_LOC_DESCRIPTION")} <br />
                      {t("AIRPORT_FLIGHTS_TEXT")}
                    </p>
                    <div>
                      <img
                        src="flights-1.jpg"
                        width="300px"
                        style={{ borderRadius: "1em" }}
                        alt="calendar showing possible flights from the UK"
                      />
                      <img
                        src="flights-2.png"
                        width="300px"
                        style={{ borderRadius: "1em" }}
                        alt="calendar showing possible flights from the UK"
                      />
                    </div>
                    <GoogleMapsLink url="https://goo.gl/maps/ZthM6nBdzNFefsbT7" />
                  </div>
                </article>
              )}
            </MobileView>
          </Card>
        </Board>
      </div>
    </section>
  );
};

export default Roadmap;
