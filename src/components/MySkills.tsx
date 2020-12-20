import React from "react";

import { Typography } from "@material-ui/core";

import { ChipStyled, SkillsStyled } from "./MySkills.styled";
import { skillData } from "../data/skillData";

const MySkills = () => {
  return (
    <SkillsStyled>
      <Typography component="h3">Main: </Typography>
      {skillData.main.map(skill => (
        <ChipStyled
          variant="outlined"
          color="primary"
          label={skill.skill}
          key={skill.id}
        />
      ))}

      <Typography component="h3">Suporte: </Typography>
      {skillData.supportive.map(skill => (
        <ChipStyled
          variant="outlined"
          color="primary"
          label={skill.skill}
          key={skill.id}
        />
      ))}

      <Typography component="h3">Backend: </Typography>
      {skillData.backend.map(skill => (
        <ChipStyled
          variant="outlined"
          color="primary"
          label={skill.skill}
          key={skill.id}
        />
      ))}
    </SkillsStyled>
  );
};

export default MySkills;
