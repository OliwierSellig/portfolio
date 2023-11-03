import styled from "styled-components";

const Item = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
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
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  color: var(--color-grey-50);
  border-radius: var(--border-radius-default);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
  letter-spacing: 0.3px;
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
