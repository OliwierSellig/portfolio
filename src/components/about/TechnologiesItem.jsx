import styled from "styled-components";
import { absoluteFull, flexCenter } from "../../Mixins";

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

  @media only screen and (max-width: 460px) {
    padding: 1.2rem;
  }

  @media only screen and (max-width: 420px) {
    & img {
      width: 7.6rem;
      height: 7.6rem;
    }
  }

  @media only screen and (max-width: 340px) {
    & img {
      width: 7.2rem;
      height: 7.2rem;
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
