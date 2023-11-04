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
`;

const NameBox = styled.div`
  ${absoluteFull}
  color: var(--color-grey-50);
  border-radius: var(--border-radius-default);
  ${flexCenter}
  font-size: 2.2rem;
  letter-spacing: var(--letter-spacing-default);
  font-weight: 500;
  opacity: 0;
  transition: all 0.3s;
  user-select: none;
  -webkit-user-select: none;
  background-image: radial-gradient(
    circle,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(249, 250, 251, 0.9) 100%
  );
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
