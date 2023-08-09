import Contact from "../Contact";
import Footer from "../Footer";
import Invitation from "../Invitation";
import Livestream from "../Livestream";
import Menu from "../Menu";
import ProgressiveBackground from "../ProgressiveBackground";
import Roadmap from "../Roadmap";
import Schedule from "../Schedule";

// import CountDown from "../CountDown";

const FrontPage = () => {
  return (
    <div>
      <ProgressiveBackground
        fullImageSrc="/stars-edited.jpg"
        miniatureSrc="/stars-edited-small.jpg"
      >
        <Menu />
        <Livestream />
        <Invitation />
        {/* <CountDown /> */}
        <Roadmap />
        <Schedule />
        <Contact />
        <Footer />
      </ProgressiveBackground>
    </div>
  );
};

export default FrontPage;
