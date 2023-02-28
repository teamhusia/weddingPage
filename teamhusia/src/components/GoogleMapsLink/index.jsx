import "./GoogleMapsLink.css";

import CustomButton from "../CustomButton";
import { useTranslation } from "react-i18next";

const GoogleMapsLink = ({ url }) => {
  const { t, i18n } = useTranslation();
  return (
    <CustomButton href={url} target={"_blank"}>
      {t("GOOGLE_MAPS_BTN")}
    </CustomButton>
  );
};

export default GoogleMapsLink;
