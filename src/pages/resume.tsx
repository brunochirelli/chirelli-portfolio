import React from "react";

import { Container } from "@material-ui/core";

import Content from "../components/Content.styled";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";

import ResumeContent from "../content/resume.mdx";

const Resume = () => {
  return (
    <Layout pageLabel="Resumé">
      <PageHeader
        title="Resumé"
        lead="Desenvolvedor React Frontend com experiência em comunicação e negócios"
      />
      <Container>
        <Content>
          <ResumeContent />
        </Content>
      </Container>
    </Layout>
  );
};

export default Resume;
