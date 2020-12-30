import styled from "styled-components";

export const LayoutStyled = styled.div`
  display: grid;
  grid-template-rows: minmax(100vh, auto) auto;
  grid-template-columns: ${props => props.theme.sizes.headerHeight} 1fr;

  @media screen and (min-width: 960px) {
    grid-template-columns: 300px 1fr;
  }

  & > header {
    position: fixed;
    top: 0;
    width: ${props => props.theme.sizes.headerHeight};
    height: 100vh;
    border-right: 0.1rem solid #dbe5db;

    @media screen and (min-width: 960px) {
      width: 300px;
    }
  }

  & > main {
    grid-column-start: 2;
    grid-column-end: 3;
  }

  & > footer {
    grid-column-start: 2;
    grid-column-end: 3;
    width: 100%;
  }
`;
