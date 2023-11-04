import styled from "styled-components";
import { tile } from "../../Mixins";
import Button from "../global/Button";

const StyledDescription = styled.div`
  grid-column: 2/3;
  ${tile}
  aspect-ratio: 1/1;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 3.6rem;
`;

const Introduction = styled.h1`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.4rem;
`;

const PreInto = styled.span`
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-grey-600);
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
`;

const AboutText = styled.p`
  font-size: 1.8rem;
  line-height: 1.6;
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
      <Button>Find me!</Button>
    </StyledDescription>
  );
}

export default Description;
