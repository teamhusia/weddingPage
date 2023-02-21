import "./Team.css";

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

import Board from "../Board";
import Card from "../Card";
import GoogleMapsLink from "../GoogleMapsLink";
import { useTranslation } from "react-i18next";

const Team = () => {
  const { t, i18n } = useTranslation();

  return (
    <section id="section-team" className="scroll-target">
      <BrowserView>
        <Board>
          <Card>Board</Card>
          <GoogleMapsLink url="https://goo.gl/maps/ZthM6nBdzNFefsbT7" />
        </Board>
      </BrowserView>

      <MobileView>
        <Board>Board mobile</Board>
      </MobileView>
    </section>
  );
};

export default Team;
