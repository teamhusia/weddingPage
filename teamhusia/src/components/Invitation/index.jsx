import InvitationContent from "./components/InvitationContent";
import { colors } from "../../theme/colors";
import styled from "styled-components";

const StyledDiv = styled.div`
  text-align: center;
  width: fit-content;
  height: fit-content;
  background-color: ${colors.beigeWarm};
  background: url('/pobrane.png') repeat ;
  border-radius: 1em;
  /* color: ${colors.beigeWarm}; */
  padding: 4em 5em 9em 5em;
  transition: 'height 2s';
`;

const Invitation = () => {
  return (
    <StyledDiv>
      <InvitationContent />    
    </StyledDiv>
  );
};
export default Invitation;
