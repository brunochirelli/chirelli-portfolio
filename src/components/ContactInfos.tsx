import React from "react";
import { Box, Container, IconButton, Typography } from "@material-ui/core";
import { GitHub, LinkedIn } from "@material-ui/icons";

import { InfoStyled } from "./ContactInfos.styled";

const ContactInfos = () => {
  return (
    <InfoStyled>
      <Typography variant="body1" paragraph>
        Entre em contato comigo pelas minhas redes sociais ou pelo email
      </Typography>
      <Box>
        <IconButton
          href="https://linkedin.com/in/BrunoChirelli"
          target="_blank"
          rel="noreferrer noopener"
          style={{ color: "#8EC189" }}
        >
          <GitHub style={{ width: "3rem", height: "3rem" }} />
        </IconButton>
        <IconButton
          href="https://github.com/BrunoChirelli"
          target="_blank"
          rel="noreferrer noopener"
          style={{ color: "#8EC189" }}
        >
          <LinkedIn style={{ width: "3rem", height: "3rem" }} />
        </IconButton>
      </Box>
      <Box color="#8EC189" fontSize="1.5rem" marginY={2}>
        <a
          href="mailto:bruno@chirelli.com.br"
          target="_blank"
          rel="noreferrer noopener"
        >
          bruno@chirelli.com.br
        </a>
      </Box>
    </InfoStyled>
  );
};

export default ContactInfos;
