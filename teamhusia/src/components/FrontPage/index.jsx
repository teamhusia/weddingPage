import Contact from "../Contact";
import Footer from "../Footer";
import Invitation from "../Invitation";
import Menu from "../Menu";
import ProgressiveBackground from "../ProgressiveBackground";
import Roadmap from "../Roadmap";
import Schedule from "../Schedule";

const FrontPage = () => {
  return (
    <div>
      <ProgressiveBackground
        fullImageSrc="/stars-edited.jpg"
        miniatureSrc="/stars-edited-small.jpg"
      >
        <Menu />
        <Invitation />
        <Roadmap />
        <Schedule />
        <Contact />
        <Footer />
      </ProgressiveBackground>
    </div>
  );
};

export default FrontPage;
