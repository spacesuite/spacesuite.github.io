import React, { useState, useEffect } from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

const Post = ({ data }) => {
  // Client-side Runtime Data Fetching
  const [starsCount, setStarsCount] = useState(0)
  useEffect(() => {
    // get data from GitHub api
    fetch(`https://api.github.com/repos/gatsbyjs/gatsby`)
      .then(response => response.json()) // parse JSON from request
      .then(json => {
        setStarsCount(json.stargazers_count)
      }) // set data for the number of stars
  }, [])
  return (
    <Layout>
      <section className="jumbotron jumbotron-fluid text-center">
        <div className="container">
          <h1>Blog</h1>
          <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
          <p>
            <button className="btn btn-primary m-2">Primary action</button>
            <button className="btn btn-secondary m-2">Secondary action</button>
          </p>
        </div>
      </section>

      <section className="container my-5">
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        <div className="row">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id} className="col-md-4">
              <h3>
                {node.frontmatter.title}{" "}
              </h3>
              <span className="text-muted">
                {node.frontmatter.date}
              </span>
              <p>{node.excerpt}</p>
              <p>
                <Link
                  to={node.fields.slug}
                >
                  Continue reading
                </Link>
              </p>
            </div>
          ))}
        </div>
        <small className="text-muted">Runtime Data: Star count for the Gatsby repo {starsCount}</small>
      </section>
    </Layout>
  )
}

export default Post

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`