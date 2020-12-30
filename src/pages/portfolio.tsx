import React from "react";

import { Container, Grid } from "@material-ui/core";

import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
import PageHeader from "../components/PageHeader";

const PortfolioPage = () => {
  return (
    <Layout pageLabel="Portfólio">
      <PageHeader title="Portfólio" />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <ProjectCard
              title="Wedding Commerce"
              url="/wedding"
              type="business"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ProjectCard title="Wedding Commerce" url="/wedding" type="tech" />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default PortfolioPage;
