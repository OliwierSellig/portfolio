import styled from "styled-components";
import { tile } from "../../styles/Mixins";
import { useDarkMode } from "../../contexts/DarkModeContext";

const StyledBox = styled.div`
  ${tile}
  aspect-ratio: 4/3;
  padding: 3.6rem;
`;

const BoxHeading = styled.h3`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 8px;

  & span {
    font-size: 3.4rem;
    font-weight: 600;
    letter-spacing: var(--letter-spacing-default);
  }

  & img {
    width: 4rem;
    height: 4rem;
  }
`;

const BoxContent = styled.p`
  font-size: 1.8rem;
  line-height: 1.5;
`;

function ProjectTextBox({ heading, type }) {
  const { inDarkMode } = useDarkMode();

  return (
    <StyledBox>
      <BoxHeading>
        <span>{heading}</span>
        <img
          src={`/svg/${type === "about" ? "about" : "learned"}-${
            inDarkMode ? "dark" : "light"
          }.svg`}
          alt="Heading Icon"
        />
      </BoxHeading>
      <BoxContent>
        My front-end portfolio exemplifies what a developer's portfolio should
        encompass. It includes sections about me, the technologies I work with,
        standout projects, and easy ways to get in touch. It's a clean,
        minimalist, and aesthetically pleasing website. The portfolio consists
        of a homepage and separate pages for each project. Each highlighted
        project features links to the live site and its repository, along with
        key details, a gallery, and an explanatory video. What more could you
        ask for?
      </BoxContent>
    </StyledBox>
  );
}

export default ProjectTextBox;
