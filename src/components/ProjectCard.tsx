import { Link } from "gatsby";
import React from "react";
import { ProjectCardStyled } from "./ProjectCard.styled";

type ProjectCardProps = {
  title: string;
  url: string;
  type: "business" | "tech";
};

const ProjectCard = ({ title, url = "/portfolio", type }: ProjectCardProps) => {
  return (
    <ProjectCardStyled type={type} to={url}>
      <h2>{title}</h2>
    </ProjectCardStyled>
  );
};

export default ProjectCard;
