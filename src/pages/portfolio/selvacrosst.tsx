import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { Container } from "@material-ui/core";

import Layout from "../../components/Layout";
import PageHeader from "../../components/PageHeader";
import Content from "../../components/Content.styled";

/**
 * Single project page for Selva Cross T.
 *
 * @component
 * @todo Separate concerns with the content
 * @todo Import the MDX instead of static query it (?)
 *
 */

const PortfolioSingle = () => {
  const {
    mdx,
    allFile: { nodes },
  } = useStaticQuery(graphql`
    query {
      mdx(frontmatter: { slug: { eq: "selvacrosst" } }) {
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
      allFile(
        filter: { relativeDirectory: { regex: "/portfolio/selva/" } }
        sort: { fields: relativePath }
      ) {
        nodes {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
          relativePath
        }
      }
    }
  `);
  return (
    <Layout pageLabel="Business">
      <PageHeader
        title={mdx.frontmatter.title}
        lead={mdx.frontmatter.lead}
        repo={mdx.frontmatter.repo}
        live={mdx.frontmatter.live}
        type={mdx.frontmatter.type}
      />

      <Content>
        <Container maxWidth="md" style={{ margin: 0 }}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </Container>
        <Container maxWidth="sm" style={{ margin: 0 }}>
          <Img fluid={nodes[0].childImageSharp.fluid} alt="" />
          <Img fluid={nodes[1].childImageSharp.fluid} alt="" />
          <Img fluid={nodes[4].childImageSharp.fluid} alt="" />
          <Img fluid={nodes[5].childImageSharp.fluid} alt="" />
          <Img fluid={nodes[6].childImageSharp.fluid} alt="" />
          <Img fluid={nodes[7].childImageSharp.fluid} alt="" />
          <Img fluid={nodes[8].childImageSharp.fluid} alt="" />
        </Container>
      </Content>
    </Layout>
  );
};

export default PortfolioSingle;
