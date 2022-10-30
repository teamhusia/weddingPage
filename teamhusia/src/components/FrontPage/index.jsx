import Contact from "../Contact";
import Invitation from "../Invitation";
import LanguageControl from "../LanguageControl";
import ProgressiveBackground from "../ProgressiveBackground";
import Roadmap from "../Roadmap";
import Team from "../Team";
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
    <ProgressiveBackground
      fullImageSrc="/stars-edited.jpg"
      miniatureSrc="/stars-edited-small.jpg"
    >
      <StyledDiv>
        <LanguageControl />
        <Invitation />
        <Roadmap />
        <Team />
        <Contact />
      </StyledDiv>
    </ProgressiveBackground>
  );
};

export default FrontPage;
