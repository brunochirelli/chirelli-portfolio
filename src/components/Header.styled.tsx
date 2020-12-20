import { Link } from "gatsby";
import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0.5rem 0;
  color: ${props => props.theme.colors.black};
  text-align: center;
`;

export const Language = styled.div`
  font-weight: 700;
  font-family: ${props => props.theme.fonts.paragraph};
`;

export const Logo = styled(Link)`
  min-width: 10rem;
  padding: 0.2rem 1rem;
  color: ${props => props.theme.colors.main};
  font-size: 1.1rem;
  font-family: ${props => props.theme.fonts.display};
  text-decoration: none;
  transform: rotate(90deg);

  &:hover {
    opacity: 0.75;
  }
`;

export const PageLocation = styled.div`
  font-size: 1.2rem;
  font-family: ${props => props.theme.fonts.heading};
  font-style: italic;
  transform: rotate(90deg);

  @media screen and (max-height: 500px) {
    display: none;
  }
`;

export const Social = styled.div``;
