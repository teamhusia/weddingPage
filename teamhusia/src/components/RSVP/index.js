import "./RSVP.css";

import Board from "../Board";
import Card from "../Card";
import RSVPForm from "./components/RSVPForm";

const RSVP = () => {
  return (
    <section
      id="section-rsvp"
      className="scroll-target min-fullscreen"
      style={{ marginTop: "-5.5em" }}
    >
      <Board>
        <Card>
          <div
            style={{
              minHeight: "max-content",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <RSVPForm />
          </div>
        </Card>
      </Board>
    </section>
  );
};

export default RSVP;
