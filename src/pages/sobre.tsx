import React from "react";
import { Container } from "@material-ui/core";

import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import Content from "../components/Content.styled";

import AboutContent from "../content/sobre.mdx";

const AboutMe = () => {
  return (
    <Layout pageLabel="Sobre">
      <PageHeader
        title="Sobre mim"
        lead="Acredito que boas empresas e produtos podem contribuir para o bem da comunidade"
      />
      <Container>
        <Content>
          <AboutContent />
        </Content>
      </Container>
    </Layout>
  );
};

export default AboutMe;
