import styled from "styled-components";

const Grid = styled.section`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.$columns}, 1fr)`};
  row-gap: ${(props) => `${props.$rowgap}rem`};
  column-gap: ${(props) => `${props.$columngap}rem`};
  margin-bottom: ${(props) => `${props.$marginbottom}rem`};
  list-style: none;
`;

function CustomGrid({
  columns = 1,
  marginBottom = 0,
  rowGap = 1.8,
  columnGap = 1.8,
  children,
  id = "",
  navigationRef = null,
}) {
  return (
    <Grid
      $columns={columns}
      $marginbottom={marginBottom}
      $rowgap={rowGap}
      $columngap={columnGap}
      id={id}
      ref={navigationRef}
    >
      {children}
    </Grid>
  );
}

export default CustomGrid;
