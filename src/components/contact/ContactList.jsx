import styled from "styled-components";
import ContactItem from "./ContactItem";

const contactOptions = [
  { name: "Linkedin", cover: "/svg/linkedin.svg", url: "#", theme: "#0A66C2" },
  { name: "Twitter / X", cover: "/svg/x.svg", url: "#", theme: "#141416" },
  { name: "Mail me", cover: "/svg/mail.svg", url: "#", theme: "#fff" },
  { name: "Github", cover: "/svg/github-mark.svg", url: "#", theme: "#28282B" },
];

const StyledContactList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.2rem;
`;

function ContactList() {
  return (
    <StyledContactList>
      {contactOptions.map((option, i) => (
        <ContactItem key={i} option={option} />
      ))}
    </StyledContactList>
  );
}

export default ContactList;
