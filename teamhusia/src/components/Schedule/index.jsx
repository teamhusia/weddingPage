import "./Schedule.css";

import Board from "../Board";
import Card from "../Card";
import SeparatorText from "../SeparatorText";
import { useTranslation } from "react-i18next";

const Schedule = () => {
  const { t, i18n } = useTranslation();

  return (
    <section id="section-schedule" className="schedule">
      <Board>
        <Card className="glass">
          <h1>{t("SCHEDULE_DAY_PLAN")}</h1>

          <SeparatorText color="#fff" width="5em">
            <h2 style={{ fontSize: "2em" }}>13/09/23</h2>
          </SeparatorText>

          <div className="schedule-ceremony ">
            <h2>15:00</h2>
            <h3>{t("SCHEDULE_CEREMONY")}</h3>
          </div>
          <div className="schedule-bus">
            <h2>16:00</h2>
            <h3>{t("SCHEDULE_BUS")}</h3>
          </div>

          {i18n.language === "pl" || i18n.language === "pl-PL" ? (
            <>
              <div className="schedule-party">
                <h2>17:30</h2>
                <h3>{t("SCHEDULE_PARTY")}</h3>
              </div>
              <div className="schedule-return-bus">
                <h2>04:00</h2>
                <h3>{t("SCHEDULE_RETURN_BUS")}</h3>
              </div>
            </>
          ) : (
            <>
              <div className="schedule-welcoming">
                <h2>17:00</h2>
                <h3>{t("SCHEDULE_WELCOMING")}</h3>
              </div>
              <div className="schedule-party">
                <h2>17:30</h2>
                <h3>{t("SCHEDULE_PARTY")}</h3>
              </div>

              <SeparatorText color="#fff" width="5em">
                <h2 style={{ fontSize: "2em" }}>14/09/23</h2>
              </SeparatorText>

              <div className="schedule-return-bus">
                <h2>04:00</h2>
                <h3>{t("SCHEDULE_RETURN_BUS")}</h3>
              </div>
              <div className="schedule-party-2">
                <h2>18:00</h2>
                <h3>{t("SCHEDULE_PARTY_2")}</h3>
              </div>
            </>
          )}
        </Card>
      </Board>
    </section>
  );
};

export default Schedule;
