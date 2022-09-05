import Button from '@mui/material/Button';
import { KR_SIGNATURE } from '../../../i18n/translations/kr';
import styled from "styled-components"
import { useTranslation } from "react-i18next";

const StyledDiv = styled.div`
  white-space: pre-line;
  padding: 3em 5em 3em 5em ;
`;

const NamesGrid = styled.div`
  display: grid;
  grid-template-columns: 5fr 1fr 5fr 1fr repeat(2, 3fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  margin: 3em 0;
`;

const Bold = styled.div`
  font-weight: bold;
`;

const InvitationContent = () => {  
  const { t, i18n } = useTranslation();
  
  return (
    <StyledDiv>
      {i18n.language === 'en' && <h2>{t("INVITATION_HEADER")}</h2>}
      <h1>{t("INVITATION_NAMES")}</h1>
      <h2>{t("INVITATION_NAMES_2")}</h2>
      <p>{t("INVITATION_TEXT")}</p>
      <h2>{t("INVITATION_DATE")}</h2>
      <h2>{t("INVITATION_TIME")}</h2>
      <p>{t("INVITATION_PLACE")}</p>
      <p>{t("INVITATION_PLACE_2")}</p>
      
      {i18n.language === 'kr' && (
        <NamesGrid>
          {KR_SIGNATURE.GROOM.map((el, index) => <span key={index}>{index===5 ? <Bold>{el}</Bold> : el}</span>)}
          {KR_SIGNATURE.BRIDE.map((el, index) => <span key={index}>{index===5 ? <Bold>{el}</Bold> : el}</span>)}
        </NamesGrid>
      )}
      
      <Button variant="contained" size="large">{t("INVITATION_RSVP_BUTTON")}</Button>
    </StyledDiv>
  )
}

export default InvitationContent;