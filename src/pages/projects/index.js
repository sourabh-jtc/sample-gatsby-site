import { graphql, Link } from 'gatsby';
import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../styles/projects.module.css'

const Projects = ({data}) => {
  const projects = data.allMarkdownRemark.nodes
  const contact = data.contact.siteMetadata.contact
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Content I've Created</h3>
        <div className={styles.projects}>
          {projects.map(project => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div>
                <h3>{ project.frontmatter.title }</h3>
                <p>{ project.frontmatter.stack }</p>
              </div>
            </Link>
          ))}
        </div>
        <p>Like what you see? contact us at- {contact} </p>
      </div>
    </Layout>
  );
}
 
export default Projects

export const query = graphql `
query ProjectsPage {
  allMarkdownRemark {
    nodes {
      frontmatter {
        slug
        stack
        title
      }
      id
    }
  }
  contact: site {
    siteMetadata {
      contact
    }
  }
}`