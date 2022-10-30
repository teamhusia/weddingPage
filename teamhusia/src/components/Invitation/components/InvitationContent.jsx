import { FARA_MAPS_URL, STARY_KAMIONEK_MAPS_URL } from "../../../const";

import { Box } from "@mui/system";
import { KR_SIGNATURE } from "../../../i18n/translations/kr";
import Link from "@mui/material/Link";
import RoomIcon from "@mui/icons-material/Room";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const StyledDiv = styled.div`
  white-space: pre-line;
  padding: 2em 1.5em 4em 1.5em;
  /* padding: 3em 5em 3em 5em; */
`;

const NamesGrid = styled.div`
  display: grid;
  grid-template-columns: 5fr 1fr 5fr 1fr repeat(2, 3fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  margin: 3em 0;
`;

const Bold = styled.span`
  font-weight: bold;
`;

const NoWrapSpan = styled.span`
  display: inline-block;
  min-width: fit-content;
  white-space: nowrap;
`;

const InvitationContent = () => {
  const { t, i18n } = useTranslation();

  return (
    <StyledDiv>
      {i18n.language === "en" && <h2>{t("INVITATION_HEADER")}</h2>}
      <h1>{t("INVITATION_NAMES")}</h1>
      <h2>{t("INVITATION_NAMES_2")}</h2>
      <p>{t("INVITATION_TEXT")}</p>

      {i18n.language === "kr" && (
        <>
          <NamesGrid>
            {KR_SIGNATURE.GROOM.map((el, index) => (
              <span key={index}>
                {index === 5 ? (
                  <Bold>
                    <NoWrapSpan>{el}</NoWrapSpan>
                  </Bold>
                ) : index > 2 ? (
                  <NoWrapSpan>{el}</NoWrapSpan>
                ) : (
                  <span>{el}</span>
                )}
              </span>
            ))}
            {KR_SIGNATURE.BRIDE.map((el, index) => (
              <span key={index}>
                {index === 5 ? (
                  <Bold>
                    <NoWrapSpan>{el}</NoWrapSpan>
                  </Bold>
                ) : index > 2 ? (
                  <NoWrapSpan>{el}</NoWrapSpan>
                ) : (
                  <span>{el}</span>
                )}
              </span>
            ))}
          </NamesGrid>
        </>
      )}

      <h2>{t("INVITATION_DATE")}</h2>
      <h2>{t("INVITATION_TIME")}</h2>

      {i18n.language === "kr" ? (
        <Box textAlign="left" fontWeight="bold" maxWidth="800px">
          <p>
            {t("INVITATION_PLACE")}
            {" ("}
            <Link href={FARA_MAPS_URL} target="#" underline="always">
              {t("LINK_LABEL")}
            </Link>
            {")"}
          </p>
          <p>
            {t("INVITATION_PLACE_2")}
            {" ("}
            <Link href={STARY_KAMIONEK_MAPS_URL} target="#" underline="always">
              {t("LINK_LABEL")}
            </Link>
            {")"}
          </p>
        </Box>
      ) : (
        <>
          <p>
            {t("INVITATION_PLACE")}
            <Link href={FARA_MAPS_URL} target="#">
              <RoomIcon />
            </Link>
          </p>
          <p>
            {t("INVITATION_PLACE_2")}
            <Link href={STARY_KAMIONEK_MAPS_URL} target="#">
              <RoomIcon />
            </Link>
          </p>
        </>
      )}
    </StyledDiv>
  );
};

export default InvitationContent;
