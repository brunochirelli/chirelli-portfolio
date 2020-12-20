import { SwipeableDrawer } from "@material-ui/core";
import styled from "styled-components";

export const OverlayNavStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 17rem;
  height: 100vh;
  padding: 1rem;
  background: white;
`;

export const NavLinks = styled.nav`
  margin-bottom: 2.5rem;

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

      &:hover {
        color: ${props => props.theme.colors.main};
      }
    }
  }
`;

export const NavHeader = styled.div`
  .logo {
    color: ${props => props.theme.colors.main};
    font-size: 1.2rem;
    font-family: ${props => props.theme.fonts.display};
  }
`;

export const NavFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LanguageOption = styled.div`
  display: flex;
  align-items: center;
  font-weight: bolder;
  font-family: ${props => props.theme.fonts.paragraph};

  & > div {
    padding: 0 0.5rem 0 0;
    opacity: 0.5;

    &.active {
      opacity: 1 !important;
    }
  }
`;

export const NavSocial = styled.div`
  display: flex;
  align-items: center;

  & > div {
    padding: 0.5rem;
  }
`;
