import "./GoogleMapsLink.css";

import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

const GoogleMapsLink = ({ url }) => {
  const { t, i18n } = useTranslation();
  return (
    <Button
      href={url}
      variant="contained"
      color="primary"
      size="large"
      target={"_blank"}
      sx={{ borderRadius: "1em" }}
    >
      {t("GOOGLE_MAPS_BTN")}
    </Button>
  );
};

export default GoogleMapsLink;
