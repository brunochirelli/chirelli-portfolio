import styled from "styled-components";

export const NavLinks = styled.nav`
  margin-bottom: 2.5rem;
  text-align: left;

  ul,
  li {
    margin: 0;
    padding: 0;
    color: ${props => props.theme.colors.black};
    font-size: 2.2rem;
    font-family: ${props => props.theme.fonts.heading};
    list-style-type: none;

    a {
      color: ${props => props.theme.colors.black};
      text-decoration: none;
      transition: 0.2s all ease;

      &:hover {
        color: ${props => props.theme.colors.main};
      }
    }
  }

  @media screen and (min-width: 960px) {
    padding: 1rem;
  }
`;
