import styled from "styled-components";
import { Colors } from "../themes/defaultTheme";

type PageHeaderProps = {
  color?: Colors;
};

export const PageHeaderStyled = styled.header<PageHeaderProps>`
  padding: 3rem 0 1.625rem;
  color: ${props =>
    props.color === Colors.main
      ? props.theme.colors.main
      : props.theme.colors.black};
  font-size: 2.25rem;
  font-family: ${props => props.theme.fonts.display};
`;

export const Lead = styled.div`
  padding-bottom: 1.625rem;
  font-size: 1.625rem;
  font-family: ${props => props.theme.fonts.heading};
  line-height: 1.3;
`;
