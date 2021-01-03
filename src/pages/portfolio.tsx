import React from "react";

import { Container, Grid } from "@material-ui/core";

import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
import PageHeader from "../components/PageHeader";
import { graphql, useStaticQuery } from "gatsby";

/**
 * Portfolio Index page
 *
 * @component
 *
 * @test should render projects
 */

type Frontmatter = {
  frontmatter: {
    title: string;
    slug: string;
    type: "business" | "tech";
  };
};

const PortfolioPage = () => {
  const {
    allMdx: { nodes: projects },
  } = useStaticQuery(graphql`
    {
      allMdx(filter: { frontmatter: { slug: { ne: null } } }) {
        nodes {
          frontmatter {
            title
            slug
            type
          }
        }
      }
    }
  `);
  return (
    <Layout pageLabel="Portfólio">
      <PageHeader title="Portfólio" />
      <Container>
        <Grid container spacing={2}>
          {projects.map(
            ({ frontmatter }: Frontmatter): JSX.Element => (
              <Grid item xs={12} sm={6}>
                <ProjectCard
                  title={frontmatter.title}
                  url={`/portfolio/${frontmatter.slug}`}
                  type={frontmatter.type}
                />
              </Grid>
            )
          )}
        </Grid>
      </Container>
    </Layout>
  );
};

export default PortfolioPage;
