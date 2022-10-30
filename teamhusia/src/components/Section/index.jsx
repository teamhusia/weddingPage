import "./Section.css";

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

const Section = ({ children, className, first }) => {
  return (
    <div style={{ padding: 0, margin: 0 }}>
      <BrowserView>
        <section className={`main-section browser`}>{children}</section>
      </BrowserView>
      <MobileView>
        <section className={`main-section mobile ${first ? "first" : ""}`}>
          {children}
        </section>
      </MobileView>
    </div>
  );
};

export default Section;
