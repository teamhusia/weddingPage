import "./Glass.css";

import { BrowserView, MobileView } from "react-device-detect";

const Glass = ({ children, className }) => {
  return (
    <div className={`${className} col center`}>
      <BrowserView>
        <div className="glass">
          <div className="glass-content">{children}</div>
        </div>
      </BrowserView>
      <MobileView>
        <div className="glass">
          <div className="glass-content">{children}</div>
        </div>
      </MobileView>
    </div>
  );
};

export default Glass;
