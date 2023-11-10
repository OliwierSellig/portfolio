import styled from "styled-components";
import { tile } from "../../styles/Mixins";
import { fadeHorizontal } from "../../styles/Animations";
import CustomButton from "../global/CustomButton";

const StyledDescription = styled.div`
  grid-column: 2/3;
  ${tile}
  aspect-ratio: 1/1;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 3.6rem;
  animation: ${fadeHorizontal(15, 0)} 1s;

  @media only screen and (max-width: 830px) {
    padding: 2.4rem;
  }

  @media only screen and (max-width: 792px) {
    grid-column: 1/-1;
    aspect-ratio: auto;
    padding: 4.2rem;

    & a {
      padding: 1.6rem 4.2rem;
    }
  }

  @media only screen and (max-width: 600px) {
    padding: 3.6rem 2.4rem;
  }
`;

const Introduction = styled.h1`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.4rem;

  @media only screen and (max-width: 1024px) {
    margin-bottom: 1rem;
  }
`;

const PreInto = styled.span`
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-grey-700);
`;

const Name = styled.span`
  font-size: 6.4rem;
  color: var(--color-blue-500);
  font-weight: 600;
  letter-spacing: 0.3px;
  line-height: 1.2;
  font-family: "Noto Sans", sans-serif;
  background: linear-gradient(#60a5fa, #3b82f6);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media only screen and (max-width: 1024px) {
    font-size: 5.8rem;
  }
`;

const AboutText = styled.p`
  font-size: 1.8rem;
  line-height: 1.5;
  margin-bottom: 2.4rem;
`;

const HighlightText = styled.span`
  font-size: 2.2rem;
  font-weight: 500;
  background: linear-gradient(#60a5fa, #3b82f6);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

function Description() {
  return (
    <StyledDescription>
      <Introduction>
        <PreInto>Hello! My name is</PreInto>
        <Name>Oliwier Sellig</Name>
      </Introduction>
      <AboutText>
        I'm a self-taught <HighlightText>Front-end Developer</HighlightText>{" "}
        from Poland. My joy has always come from creating things, and my
        computer has been my trusty sidekick. So, I thought, why not bring these
        two passions together? And here I am, channeling my creativity into
        designing and building websites. Feel free to take a look at my projects
        and reach out to connect!
      </AboutText>
      <CustomButton
        interSiteLink={true}
        interSiteDest="contact"
        theme="var(--color-blue-600)"
        themeFocus="var(--color-blue-500)"
        fontWeight={500}
        padding={[1, 3.2, 1, 3.2]}
      >
        Hire me!
      </CustomButton>
    </StyledDescription>
  );
}

export default Description;
