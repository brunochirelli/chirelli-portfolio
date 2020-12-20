import React from "react";

import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import { Container } from "@material-ui/core";

import HomeContent from "../content/HomeContent.mdx";
import { Colors } from "../themes/defaultTheme";
import Content from "../components/Content";

const Home: React.FC = () => {
  return (
    <Layout pageLabel="Home">
      <PageHeader
        title="Olá, jovem!"
        color={Colors.main}
        lead={
          "Aqui quem vos fala é Bruno Chirelli, sou desenvolvedor React frontend com experiência em comunicação e negócios."
        }
      />

      <Container>
        <Content>
          <HomeContent />
        </Content>
      </Container>
    </Layout>
  );
};

export default Home;
