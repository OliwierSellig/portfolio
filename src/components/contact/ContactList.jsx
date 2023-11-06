import styled from "styled-components";
import ContactItem from "./ContactItem";

const contactOptions = [
  {
    name: "Linkedin",
    cover: "/svg/linkedin.svg",
    url: "https://www.linkedin.com/in/oliwier-sellig-1720a8259/",
    theme: "#0A66C2",
  },
  {
    name: "Twitter / X",
    cover: "/svg/x.svg",
    url: "https://twitter.com/OliwierSellig1",
    theme: "#141416",
  },
  {
    name: "Mail me",
    cover: "/svg/mail.svg",
    url: "mailto:oliwierandrzej.sellig@gmail.com",
    theme: "#fff",
  },
  {
    name: "Github",
    cover: "/svg/github-mark.svg",
    url: "https://github.com/OliwierSellig",
    theme: "#28282B",
  },
];

const StyledContactList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.2rem;

  @media only screen and (max-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
  }
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
