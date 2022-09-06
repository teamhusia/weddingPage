import SvgGB from './components/SvgGB';
import SvgKR from './components/SvgKR';
import SvgPL from './components/SvgPL';
import { colors } from '../../theme/colors';
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Container = styled.div`
  /* background-color: ${colors.lightNavy}; */
  width: fit-content;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 2em 0;
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
            <SvgKR/>
        </StyledButton>
        <StyledButton
          onClick={() => {
            i18n.changeLanguage("pl");
          }}>
            <SvgPL/>
        </StyledButton>
        <StyledButton
          onClick={() => {
            i18n.changeLanguage("en");
          }}>
            <SvgGB/>
        </StyledButton>        
      </StyledDiv>
      
    </Container>
  );
};

export default LanguageControl;
