import Board from "../Board";
import Card from "../Card";
import InvitationContent from "./components/InvitationContent";

const Invitation = () => {
  return (
    <section id="section-invitation" className="scroll-target">
      <Board>
      {/* <Board first> */}
        <Card className="invitation">
          <InvitationContent />
        </Card>
      </Board>
    </section>
  );
};
export default Invitation;
