import "./Team.css";

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

import Card from "../Card";
import GoogleMapsLink from "../GoogleMapsLink";
import Menu from "../Menu";
import Section from "../Section";
import { useTranslation } from "react-i18next";

const Team = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <BrowserView>
        <Menu />
        <Section>
          <Card>Section</Card>
          <GoogleMapsLink url="https://goo.gl/maps/ZthM6nBdzNFefsbT7" />
        </Section>
      </BrowserView>

      <MobileView>
        <Menu />
        <Section>Section mobile</Section>
      </MobileView>
    </>
  );
};

export default Team;
