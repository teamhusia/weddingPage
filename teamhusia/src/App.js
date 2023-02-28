import "./App.css";

import { BrowserView, MobileView } from "react-device-detect";

import FrontPage from "./components/FrontPage";
import ProgressiveBackground from "./components/ProgressiveBackground";

function App() {
  return (
    <div>
      <ProgressiveBackground
        fullImageSrc="/stars-edited.jpg"
        miniatureSrc="/stars-edited-small.jpg"
      >
        <BrowserView>
          <div className="browser">
            <FrontPage />
          </div>
        </BrowserView>
        <MobileView>
          <div className="mobile">
            <FrontPage />
          </div>
        </MobileView>
      </ProgressiveBackground>
    </div>
  );
}

export default App;
