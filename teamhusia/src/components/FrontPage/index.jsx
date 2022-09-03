import Invitation from "../Invitation"
import LanguageControl from "../LanguageControl";
import ProgressiveBackground from '../ProgressiveBackground';
import { colors } from "../../theme/colors";
import styled from "styled-components"

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  background-size: cover;
  color: ${colors.darkNavy};
  /* padding-bottom: 2em; */
`;
const FrontPage = () => {
  return (
    <ProgressiveBackground
      fullImageSrc="/stars1-edited.png"
      miniatureSrc="/stars1-edited-mini.png">
      <StyledDiv>
        <LanguageControl />
        <Invitation />
      </StyledDiv>
    </ProgressiveBackground>
  )
}

export default FrontPage;