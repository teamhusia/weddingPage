import "./Livestream.css";

import { BrowserView, MobileView } from "react-device-detect";

import Board from "../Board";
import Card from "../Card";
import SeparatorText from "../SeparatorText";
import { useTranslation } from "react-i18next";

const Livestream = ({}) => {
  const { t, i18n } = useTranslation();
  return (
    <section id="section-livestream" className="scroll-target">
      <Board first>
       <Card className="livestream empty" title={t('LIVESTREAM_TITLE')}>
        {/* <BrowserView>
          <SeparatorText width="10em" color="#ffd951d2">
            <h1>{t('LIVESTREAM_TITLE')}</h1>          
          </SeparatorText>
        </BrowserView>
        <MobileView>
            <h1>{t('LIVESTREAM_TITLE')}</h1>          
        </MobileView> */}
          <div className="iframe-container">
            <iframe
              width="100%"
              height="100%" 
              src="https://www.youtube.com/embed/SEooSGaLSUI" 
              title="Ślub / Wedding  - 13 sierpnia 2023 g. 15.00" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen>        
            </iframe>
            </div>            
        </Card>
      </Board>
          <div className="menu-header">#TEAMHUSIA</div>
    </section>
  )
}

export default Livestream;