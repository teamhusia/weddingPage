import "./Roadmap.css";

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

import Card from "../Card";
import GoogleMapsLink from "../GoogleMapsLink";
import Image from "./components/Image";
import Section from "../Section";
import { useTranslation } from "react-i18next";

const Roadmap = ({}) => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <BrowserView>
        <Section>
          <Card>
            <div className="row">
              <div className="left">
                <h1>The ceremony</h1>
                <Image
                  src="/R6__8443_Fara_landscape_cut2.jpg"
                  width="100%"
                  height="9em"
                />
              </div>
              <div className="right">
                <p>
                  Our wedding ceremony will be held at the <b>Poznań Fara</b>{" "}
                  &mdash; a beautiful Roman Catholic basilica located in the
                  very heart of the Old Town district in Poznań.
                </p>
              </div>
            </div>
          </Card>
          <GoogleMapsLink url="https://goo.gl/maps/wBc6bgRYD93waBHe8" />
          <Card>
            <section>
              <h1>The celebration</h1>
              <Image src="/Stary_kamionek_cut1.jpg" width="100%" height="9em" />
              <p>
                Once our vows are completed, we would like to invite you to join
                us at our celebratory party venue in <b>Stary Kamionek</b>.
              </p>
            </section>
          </Card>
          <GoogleMapsLink url="https://goo.gl/maps/HUeqLMmVau3j2xDH7" />
          <Card>
            <section>
              <h1>The accomodation</h1>
              <Image src="/Stary_kamionek_cut1.jpg" width="100%" height="9em" />
              <p>
                In case you were looking for an after-party accomodation, we
                would like to recommend the <b>Hotel Ilon Podolany</b>.
              </p>
            </section>
          </Card>
          <GoogleMapsLink url="https://goo.gl/maps/ZthM6nBdzNFefsbT7" />
        </Section>
      </BrowserView>

      <MobileView>
        <Section>
          <Card>
            <section>
              <h1>The ceremony</h1>
              <Image
                src="/R6__8443_Fara_landscape_cut2.jpg"
                width="100%"
                height="9em"
              />
              <p>
                Our wedding ceremony will be held at the <b>Poznań Fara</b>{" "}
                &mdash; a beautiful Roman Catholic basilica located in the very
                heart of the Old Town district in Poznań.
              </p>
            </section>
          </Card>
          <GoogleMapsLink url="https://goo.gl/maps/wBc6bgRYD93waBHe8" />
        </Section>
        <Section>
          <Card>
            <section>
              <h1>The celebration</h1>
              <Image src="/Stary_kamionek_cut1.jpg" width="100%" height="9em" />
              <p>
                Once our vows are completed, we would like to invite you to join
                us at our celebratory party venue in <b>Stary Kamionek</b>.
              </p>
            </section>
          </Card>
          <GoogleMapsLink url="https://goo.gl/maps/HUeqLMmVau3j2xDH7" />
        </Section>
        <Section>
          <Card>
            <section>
              <h1>The accomodation</h1>
              <Image src="/Stary_kamionek_cut1.jpg" width="100%" height="9em" />
              <p>
                In case you were looking for an after-party accomodation, we
                would like to recommend the <b>Hotel Ilon Podolany</b>.
              </p>
            </section>
          </Card>
          <GoogleMapsLink url="https://goo.gl/maps/ZthM6nBdzNFefsbT7" />
        </Section>
      </MobileView>
    </>
  );
};

export default Roadmap;
