import { absoluteFull, flexCenter } from "../../styles/Mixins";
import { fadeVertical } from "../../styles/Animations";
import styled from "styled-components";
import { TechnologyItem } from "../../lib/types";

interface ItemProps {
  tabIndex: number;
  $number: number;
}

const Item = styled.li<ItemProps>`
  position: relative;
  ${flexCenter}
  width: 100%;
  padding: 1.2rem 2.4rem;
  animation: ${fadeVertical(10, 0)} ${(props) => `${1 + props.$number / 10}s`};

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
  ${flexCenter}
  border-radius: var(--border-radius-default);
  background-image: var(--technology-background);
  font-weight: 500;
  font-size: 2rem;
  color: var(--color-text-white);
  text-align: center;
  letter-spacing: var(--letter-spacing-default);
  transition: all 0.3s;
  opacity: 0;
  user-select: none;
  -webkit-user-select: none;
`;

interface TechnologiesItemProps {
  item: TechnologyItem;
  number: number;
}

function TechnologiesItem({ item, number }: TechnologiesItemProps) {
  return (
    <Item tabIndex={0} $number={number}>
      <img src={item?.icon} alt={`${item?.name} Logo`} />
      <NameBox>{item?.name}</NameBox>
    </Item>
  );
}

export default TechnologiesItem;
