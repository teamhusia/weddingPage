import SvgGB from './components/SvgGB';
import SvgKR from './components/SvgKR';
import SvgPL from './components/SvgPL';
import { colors } from '../../theme/colors';
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Container = styled.div`
  /* background-color: ${colors.lightNavy}; */
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 2em 1em;
  z-index: 5;
`;

const StyledButton = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border: none;
  height: 3em; 
`;

const LanguageControl = () => {
  const { t, i18n } = useTranslation();

  return (
    <Container>

      <StyledDiv>
        <StyledButton
          onClick={() => {
            i18n.changeLanguage("kr");
          }}>
            <SvgKR width="1" height="1" />
        </StyledButton>
        <StyledButton
          onClick={() => {
            i18n.changeLanguage("pl");
          }}>
            <SvgPL width="10px" height="10px" />
        </StyledButton>
        <StyledButton
          onClick={() => {
            i18n.changeLanguage("en");
          }}>
            <SvgGB width="10px" height="10px" />
        </StyledButton>
        
      </StyledDiv>
    </Container>
  );
};

export default LanguageControl;
