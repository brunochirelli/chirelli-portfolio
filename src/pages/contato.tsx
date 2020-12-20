import React from "react";

import { Box, Container, IconButton } from "@material-ui/core";
import { GitHub, LinkedIn } from "@material-ui/icons";

import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";

const Contact = () => {
  return (
    <Layout pageLabel="Contato">
      <PageHeader title="Entre em Contato" />
      <Container>
        <Box>
          <IconButton href="https://google.com.br">
            <GitHub />
          </IconButton>
          <IconButton href="https://google.com.br">
            <LinkedIn />
          </IconButton>
        </Box>
        <Box>brunochirelli@gmail.com</Box>
      </Container>
    </Layout>
  );
};

export default Contact;
