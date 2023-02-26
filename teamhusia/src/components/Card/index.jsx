import "./Card.css";

import { BrowserView, MobileView } from "react-device-detect";

const Card = ({ children, className }) => {
  return (
    <div className={className}>
      <BrowserView>
        <div className="card">
          <div className="card-content">{children}</div>
        </div>
      </BrowserView>
      <MobileView>
        <div className="card">
          <div className="card-content">{children}</div>
        </div>
      </MobileView>
    </div>
  );
};

export default Card;
