import styled from "styled-components";
import { Link } from "gatsby";

type ProjectCardStyledProps = {
  type: "business" | "tech";
};

export const ProjectCardStyled = styled(Link)<ProjectCardStyledProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 210px;
  margin-top: 2rem;
  color: inherit;
  text-decoration: none;
  background: white;
  border-radius: 1rem;

  &::before {
    position: absolute;
    top: -0.35rem;
    left: 0.25%;
    z-index: -1;
    width: 99.5%;
    height: 210px;
    background: ${props =>
      props.type === "business"
        ? "linear-gradient(90deg, #8ade82 0%, #7248d4 100%);"
        : "linear-gradient(90deg, #8ec189 0%, #ffdd00 100%);"};
    border-radius: 1rem;
    content: " ";
  }
`;
