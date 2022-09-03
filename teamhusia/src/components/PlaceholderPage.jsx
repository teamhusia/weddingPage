import { useTranslation } from "react-i18next";

const PlaceholderPage = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="fullscreen placeholder-page">
      <h1 className="align-left">
        {t('PLACEHOLDER_HEADER')}
      </h1>
      <h2 className="center">
        {t('PLACEHOLDER_CONTENT')}
      </h2>
      <h1 className="align-right">
        {t('PLACEHOLDER_SIGNED')}
      </h1>
      <button onClick={() => {i18n.changeLanguage('ko')}}>To korean</button>
      <button onClick={() => {i18n.changeLanguage('pl')}}>To polish</button>
      <button onClick={() => {i18n.changeLanguage('en')}}>To english</button>
    </div>
  )
}

export default PlaceholderPage;