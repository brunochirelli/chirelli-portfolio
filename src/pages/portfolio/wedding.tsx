import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../../components/Layout";
import PageHeader from "../../components/PageHeader";
import Content from "../../components/Content.styled";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Container } from "@material-ui/core";

/**
 * Single page for wedding commerce project.
 * The goal of this page is to showcase the project
 * with their problems to solve and specific goals.
 *
 * @component
 *
 * @test should link to GitHub repo
 * @test should link to the live app
 * @test should page label to be "Tech"
 */
const WeddingCommerce = () => {
  const { mdx } = useStaticQuery(graphql`
    query {
      mdx(frontmatter: { slug: { eq: "wedding" } }) {
        frontmatter {
          title
          lead
          type
          slug
          repo
          live
        }
        body
      }
    }
  `);

  return (
    <Layout pageLabel="Tech">
      <PageHeader
        title={mdx.frontmatter.title}
        lead={mdx.frontmatter.lead}
        repo={mdx.frontmatter.repo}
        live={mdx.frontmatter.live}
        type={mdx.frontmatter.type}
      />
      <Container maxWidth="sm" style={{ margin: 0 }}>
        <Content>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </Content>
      </Container>
    </Layout>
  );
};

export default WeddingCommerce;
