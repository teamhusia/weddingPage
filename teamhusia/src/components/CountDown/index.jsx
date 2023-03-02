import Board from "../Board";
import Card from "../Card";
import Countdown from "react-countdown";
import { useTranslation } from "react-i18next";

const CountDown = ({ date }) => {
  const { t, i18n } = useTranslation();
  return (
    <section id="section-countdown" className="scroll-target">
      <div className="countdown">
        <Board>
          <Card className="glass">
            <h2>{t("COUNTDOWN_TITLE")}</h2>
            <h1>
              <Countdown date={new Date(2023, 7, 13, 15)} />
            </h1>
          </Card>
        </Board>
      </div>
    </section>
  );
};

export default CountDown;
