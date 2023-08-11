import "./Newsletter.css"

import Board from "../Board";
import Card from "../Card";
import { useTranslation } from "react-i18next";

const Newsletter = ({}) => {  
  const { t, i18n } = useTranslation();
  return (
    <section id="section-newsletter" className="newsletter">
      <Board>
        <Card className="glass">
          <h1>{t('MENU_NEWSLETTER')}</h1>
          <p>{t('NEWSLETTER_TITLE1')}</p>
          <p>{t('NEWSLETTER_INFO1')}</p>
          
          <h2>{t('NEWSLETTER_TITLE2')}</h2>
          <p>{t('NEWSLETTER_INFO2')}</p>
          <p>{t('NEWSLETTER_INFO22')}</p>

          <h2>{t('NEWSLETTER_TITLE3')}</h2>
          <p>{t('NEWSLETTER_INFO3')}</p>

          <h2>{t('NEWSLETTER_TITLE4')}</h2>
          <p>{t('NEWSLETTER_INFO4')}</p>

          <h2>{t('NEWSLETTER_TITLE5')}</h2>
          <p>{t('NEWSLETTER_INFO5')}</p>

          <h2>{t('NEWSLETTER_TITLE6')}</h2>
          <p>{t('NEWSLETTER_INFO6')}</p>
          <p>{t('NEWSLETTER_INFO62')}</p>

          <h2>{t('NEWSLETTER_TITLE7')}</h2>
          <p>{t('NEWSLETTER_INFO7')}</p>
          <p>{t('NEWSLETTER_INFO72')}</p>
          <p>{t('NEWSLETTER_INFO73')}</p>
          <p>{t('NEWSLETTER_INFO74')}</p>

          <h2>{t('NEWSLETTER_TITLE8')}</h2>
          <p>{t('NEWSLETTER_INFO8')}</p>

          <h2>{t('NEWSLETTER_TITLE9')}</h2>
          <p>{t('NEWSLETTER_INFO9')}</p>

          <h2>{t('NEWSLETTER_TITLE10')}</h2>
          <p>{t('NEWSLETTER_INFO10')}</p>

          <p>{t('NEWSLETTER_OUTRO')}</p>
          <h1>{t('NEWSLETTER_SIGNATURE')}</h1>
        </Card>
      </Board>
    </section>
  )
}

export default Newsletter;