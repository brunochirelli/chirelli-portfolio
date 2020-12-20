enum SkillLevel {
  High,
  Medium,
  Low,
}

type Skill = {
  id: string;
  skill: string;
  level: SkillLevel;
};

type SkillSet = {
  main: Skill[];
  supportive: Skill[];
  backend: Skill[];
};

export const skillData: SkillSet = {
  main: [
    {
      id: "main-1",
      skill: "html",
      level: SkillLevel.High,
    },
    {
      id: "main-2",
      skill: "css",
      level: SkillLevel.High,
    },
    {
      id: "main-3",
      skill: "JavaScript",
      level: SkillLevel.Medium,
    },
    {
      id: "main-4",
      skill: "TypeScript",
      level: SkillLevel.Low,
    },
    {
      id: "main-5",
      skill: "React",
      level: SkillLevel.Medium,
    },
    {
      id: "main-6",
      skill: "Jest",
      level: SkillLevel.Medium,
    },
    {
      id: "main-7",
      skill: "RTL",
      level: SkillLevel.Low,
    },
    {
      id: "main-8",
      skill: "Cypress",
      level: SkillLevel.Low,
    },
  ],
  supportive: [
    {
      id: "sup-1",
      skill: "Git",
      level: SkillLevel.Medium,
    },
    { id: "sup-2", skill: "GitHub", level: SkillLevel.Medium },
  ],
  backend: [
    {
      id: "back-1",
      skill: "Node",
      level: SkillLevel.Medium,
    },
    {
      id: "back-2",
      skill: "REST Api",
      level: SkillLevel.Medium,
    },
    {
      id: "back-3",
      skill: "SQL",
      level: SkillLevel.Low,
    },
    {
      id: "back-4",
      skill: "MongoDB",
      level: SkillLevel.Low,
    },
    {
      id: "back-5",
      skill: "GraphQL",
      level: SkillLevel.Low,
    },
  ],
};
