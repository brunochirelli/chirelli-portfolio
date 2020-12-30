import React from "react";

import { Box, Container, IconButton, Typography } from "@material-ui/core";
import { GitHub, LinkedIn } from "@material-ui/icons";

import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import ContactInfos from "../components/ContactInfos";

const Contact = () => {
  return (
    <Layout pageLabel="Contato">
      <PageHeader
        title="Entre em Contato"
        lead="Estarei ansioso para conversar com você"
      />

      <ContactInfos />
    </Layout>
  );
};

export default Contact;
