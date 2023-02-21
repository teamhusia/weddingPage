import "./App.css";

import FrontPage from "./components/FrontPage";
import ProgressiveBackground from "./components/ProgressiveBackground";

function App() {
  return (
    <div>
      <ProgressiveBackground
        fullImageSrc="/stars-edited.jpg"
        miniatureSrc="/stars-edited-small.jpg"
      >
        <FrontPage />
      </ProgressiveBackground>
    </div>
  );
}

export default App;
