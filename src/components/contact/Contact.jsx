import CustomGrid from "../global/CustomGrid";
import SectionHeading from "../global/SectionHeading";
import ContactList from "./ContactList";

function Contact() {
  return (
    <CustomGrid marginBottom={3.2}>
      <SectionHeading justify="start">Let's get in touch!</SectionHeading>
      <ContactList />
    </CustomGrid>
  );
}

export default Contact;
