import Button from '@mui/material/Button';
import styled from "styled-components"
import { useTranslation } from "react-i18next";

const InvitationContent = () => {  
  const { t, i18n } = useTranslation();
  
  const StyledDiv = styled.div`
  white-space: pre-line;
`;
  return (
    <StyledDiv>
      <h2>{t("INVITATION_HEADER")}</h2>
      <h1>{t("INVITATION_NAMES")}</h1>
      <h2>{t("INVITATION_NAMES_2")}</h2>
      <p>{t("INVITATION_TEXT")}</p>
      <h2>{t("INVITATION_DATE")}</h2>
      <h2>{t("INVITATION_TIME")}</h2>
      <p>{t("INVITATION_PLACE")}</p>
      <p>{t("INVITATION_PLACE_2")}</p>
      <Button variant="contained" size="large">{t("INVITATION_RSVP_BUTTON")}</Button>
    </StyledDiv>
  )
}

export default InvitationContent;