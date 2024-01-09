import { ReactNode } from "react";
import styled from "styled-components";

const Grid = styled.section<CustomGridProps>`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.columns}, 1fr)`};
  row-gap: ${(props) => `${props.rowGap}rem`};
  column-gap: ${(props) => `${props.columnGap}rem`};
  margin-bottom: ${(props) => `${props.marginBottom}rem`};
  list-style: none;
`;

interface CustomGridProps {
  columns?: number;
  marginBottom?: number;
  rowGap?: number;
  columnGap?: number;
  children?: ReactNode;
  id?: string;
  navigationRef?: (node?: Element | null | undefined) => void;
  as?: string;
}

function CustomGrid({
  columns = 1,
  marginBottom = 0,
  rowGap = 1.8,
  columnGap = 1.8,
  children,
  id = "",
  navigationRef = () => {},
  as = "section",
}: CustomGridProps) {
  return (
    <Grid
      columns={columns}
      marginBottom={marginBottom}
      rowGap={rowGap}
      columnGap={columnGap}
      id={id}
      ref={navigationRef}
      as={as}
    >
      {children}
    </Grid>
  );
}

export default CustomGrid;
