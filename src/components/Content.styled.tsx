import styled from "styled-components";

export const ContentStyled = styled.div`
  font-size: 1.25rem;

  h2,
  h3,
  h4 {
    margin-top: 3.75rem;
    font-family: ${props => props.theme.fonts.heading};
  }

  p {
    font-family: ${props => props.theme.fonts.paragraph};

    a {
      font-family: ${props => props.theme.fonts.paragraph};
    }

    &:last-of-type {
      margin-bottom: 1.75em;
    }
  }

  a {
    color: ${props => props.theme.colors.main};
    font-family: ${props => props.theme.fonts.heading};

    &:hover {
      opacity: 0.75;
    }
  }
`;
