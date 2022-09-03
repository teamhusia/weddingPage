import SvgGB from './components/SvgGB';
import SvgKR from './components/SvgKR';
import SvgPL from './components/SvgPL';
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const StyledDiv = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  bottom:0;
  right: 0;
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
      
      {/* <button
        onClick={() => {
          i18n.changeLanguage("placeholder");
        }}>
          test
      </button> */}
      
    </StyledDiv>
  );
};

export default LanguageControl;
