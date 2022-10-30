import "./Card.css";

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

const Card = ({ children }) => {
  return (
    <>
      <BrowserView>
        <div className="card browser">
          <div className="card-content">{children}</div>
        </div>
      </BrowserView>
      <MobileView>
        <div className="card mobile">
          <div className="card-content">{children}</div>
        </div>
      </MobileView>
    </>
  );
};

export default Card;
