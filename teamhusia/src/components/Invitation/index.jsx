import Board from "../Board";
import Card from "../Card";
import InvitationContent from "./components/InvitationContent";

const Invitation = () => {
  return (
    <section
      id="section-invitation"
      className="scroll-target min-fullscreen"
      // style={{ marginTop: "-5.5em" }}
    >
      <Board>
        <Card className="invitation">
          <InvitationContent />
        </Card>
      </Board>
    </section>
  );
};
export default Invitation;
