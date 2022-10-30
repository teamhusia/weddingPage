import Card from "../Card";
import Footer from "../Footer";
import InvitationContent from "./components/InvitationContent";
import Menu from "../Menu";
import Section from "../Section";

const Invitation = () => {
  return (
    <div>
      <Menu />
      <Section>
        <Card className="invitation">
          <InvitationContent />
        </Card>
      </Section>
      {/* <Footer /> */}
    </div>
  );
};
export default Invitation;
