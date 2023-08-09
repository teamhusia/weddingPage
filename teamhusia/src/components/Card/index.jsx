import "./Card.css";

import { BrowserView, MobileView } from "react-device-detect";

import SeparatorText from "../SeparatorText";

const Card = ({ children, className, title }) => {
  return (
    <div className={`col center`}>
      {title && (
        <>
        <BrowserView>
          <SeparatorText width="10em" color="#d2c98d">
            <h1 className="card-title">{title}</h1>          
          </SeparatorText>
        </BrowserView>
        <MobileView>
          <h1 className="card-title">{title}</h1>    
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
