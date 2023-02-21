import Contact from "../Contact";
import Footer from "../Footer";
import Invitation from "../Invitation";
import Menu from "../Menu";
import ProgressiveBackground from "../ProgressiveBackground";
import Roadmap from "../Roadmap";
import { colors } from "../../theme/colors";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  background-size: cover;
  color: ${colors.darkNavy};
`;
const FrontPage = () => {
  return (
    <div>
      <ProgressiveBackground
        fullImageSrc="/stars-edited.jpg"
        miniatureSrc="/stars-edited-small.jpg"
      >
        <Menu />
        <StyledDiv>
          <Invitation />
          <Roadmap />
          <Contact />
        </StyledDiv>
        <Footer />
      </ProgressiveBackground>
    </div>
  );
};

export default FrontPage;
