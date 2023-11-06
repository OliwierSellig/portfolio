import styled from "styled-components";
import { absoluteFull, flexCenter } from "../../Mixins";
import { useDarkMode } from "../../contexts/DarkModeContext";

const Item = styled.li`
  position: relative;
  ${flexCenter}
  width: 100%;
  padding: 1.2rem 2.4rem;

  & img {
    width: 8rem;
    height: 8rem;
  }

  &:hover,
  &:focus {
    & div {
      opacity: 1;
    }
  }
`;

const NameBox = styled.div`
  ${absoluteFull}
  color: var(--color-text-white);
  border-radius: var(--border-radius-default);
  ${flexCenter}
  font-size: 2.2rem;
  letter-spacing: var(--letter-spacing-default);
  font-weight: 500;
  opacity: 0;
  transition: all 0.3s;
  user-select: none;
  -webkit-user-select: none;
  background-image: var(--technology-background);
`;

function TechnologiesItem({ item }) {
  return (
    <Item tabIndex={0}>
      <img src={item?.icon} alt={item?.name} />
      <NameBox>{item?.name}</NameBox>
    </Item>
  );
}

export default TechnologiesItem;
