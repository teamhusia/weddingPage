import "./Card.css";

import { BrowserView, MobileView } from "react-device-detect";

import SeparatorText from "../SeparatorText";

const Card = ({ children, className, title }) => {
  return (
    <div className={`col center`}>
      {title && (
        <>
        <BrowserView>
          {/* <SeparatorText width="10em" color="#d2c98d"> */}
            <p className="card-title">{title}</p>          
          {/* </SeparatorText> */}
        </BrowserView>
        <MobileView>
          <p className="card-title">{title}</p>    
        </MobileView>
        </>
      )}
      <div className={`card ${className}`}>
        <div className="card-content">{children}</div>
      </div>
    </div>
  );
};

export default Card;
