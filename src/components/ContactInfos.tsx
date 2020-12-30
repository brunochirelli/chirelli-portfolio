import { Box, Container, IconButton, Typography } from "@material-ui/core";
import { GitHub, LinkedIn } from "@material-ui/icons";
import React from "react";

const ContactInfos = () => {
  return (
    <Container>
      <Typography variant="body1" paragraph>
        Entre em contato comigo pelas minhas redes sociais ou pelo email
      </Typography>
      <Box>
        <IconButton
          href="https://linkedin.com/in/BrunoChirelli"
          style={{ color: "#8EC189" }}
        >
          <GitHub style={{ width: "3rem", height: "3rem" }} />
        </IconButton>
        <IconButton
          href="https://github.com/BrunoChirelli"
          style={{ color: "#8EC189" }}
        >
          <LinkedIn style={{ width: "3rem", height: "3rem" }} />
        </IconButton>
      </Box>
      <Box color="#8EC189" fontSize="1.5rem" marginY={2}>
        <a href="mailto:bruno@chirelli.com.br">bruno@chirelli.com.br</a>
      </Box>
    </Container>
  );
};

export default ContactInfos;
