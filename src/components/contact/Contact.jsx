import { useNavigation } from "../../contexts/NavigationCotext";
import CustomGrid from "../global/CustomGrid";
import SectionHeading from "../global/SectionHeading";
import ContactList from "./ContactList";

function Contact() {
  const { contactRef } = useNavigation();

  return (
    <CustomGrid navigationRef={contactRef} id="contact" marginBottom={3.2}>
      <SectionHeading justify="start">Let's get in touch!</SectionHeading>
      <ContactList />
    </CustomGrid>
  );
}

export default Contact;
