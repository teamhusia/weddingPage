import "./Card.css";

import { BrowserView, MobileView } from "react-device-detect";

const Card = ({ children, className }) => {
  return (
    <div className={`col center`}>
      <BrowserView>
        <div className={`card ${className}`}>
          <div className="card-content">{children}</div>
        </div>
      </BrowserView>
      <MobileView>
        <div className={`card ${className}`}>
          <div className="card-content">{children}</div>
        </div>
      </MobileView>
    </div>
  );
};

export default Card;
