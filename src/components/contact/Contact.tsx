import { useNavigation } from "../../contexts/NavigationContext";
import CustomGrid from "../global/CustomGrid";
import SectionHeading from "../global/SectionHeading";
import ContactList from "./ContactList";

function Contact() {
  const { contactRef } = useNavigation();

  return (
    <CustomGrid navigationRef={contactRef} id="contact" marginBottom={3.2}>
      <SectionHeading
        justify="start"
        animationType="fadeHorizontal"
        animationFadeCoords={[-5, 0]}
        animationTime={1}
      >
        Let's get in touch!
      </SectionHeading>
      <ContactList />
    </CustomGrid>
  );
}

export default Contact;
