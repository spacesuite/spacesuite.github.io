import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const About = ({ data }) => (
  <Layout>
    <section className="jumbotron jumbotron-fluid text-center">
      <div className="container">
        <h1>About</h1>
        <p className="lead text-muted">{data.site.siteMetadata.title} is running on your computer dedicated to showing the best of static site generator and Gatsby.</p>
      </div>
    </section>
  </Layout>
)

export default About

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`