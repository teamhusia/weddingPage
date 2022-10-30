import "./Section.css";

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

const Section = ({ children, className }) => {
  return (
    <>
      <BrowserView>
        <section className={`${className} main-section browser`}>
          {children}
        </section>
      </BrowserView>
      <MobileView>
        <section className={`${className} main-section mobile`}>
          {children}
        </section>
      </MobileView>
    </>
  );
};

export default Section;
