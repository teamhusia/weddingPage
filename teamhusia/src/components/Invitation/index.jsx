// import HeaderImage from "./components/HeaderImage";

import InvitationContent from "./components/InvitationContent";
import { colors } from "../../theme/colors";
import styled from "styled-components";

const StyledDiv = styled.div`
  text-align: center;
  width: fit-content;
  height: fit-content;
  background-color: ${colors.beigeWarm};
  background: url('/noise-texture.png') repeat ;
  border-radius: 1em;
  overflow: hidden;
  transition: 'height 2s';
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Invitation = () => {
  return (
    <StyledDiv>
      {/* <HeaderImage src="/teamhusia-opt.jpg" alt="The groom Heungjae and the bride Katarzyna"/> */}
      <InvitationContent />    
    </StyledDiv>
  );
};
export default Invitation;
