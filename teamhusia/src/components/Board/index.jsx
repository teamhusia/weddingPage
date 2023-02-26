import "./Board.css";

import {
  BrowserView,
  MobileView,
} from "react-device-detect";

const Board = ({ children, className, first }) => {
  return (
    <div style={{ padding: 0, margin: 0 }}>
      <BrowserView>
        <div className={`main-section`}>{children}</div>
      </BrowserView>
      <MobileView>
        <div className={`main-section ${first ? "first" : ""}`}>{children}</div>
      </MobileView>
    </div>
  );
};

export default Board;
