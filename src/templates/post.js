import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

class PostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const { previous, next } = this.props.pageContext
      
    return (
      <>
        <Layout>
          <main className="my-5">
            <article className="container">
              <header className="mt-5">
                <h1>{post.frontmatter.title}</h1>
                <p className="text-muted">{post.frontmatter.date}</p>
              </header>
              <section dangerouslySetInnerHTML={{ __html: post.html }} />
            </article>
          </main>
          
          <nav className="container my-auto">
            <ul className="pagination justify-content-around my-3">
              <li className="page-item">
                {previous && (
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li className="page-item">
                {next && (
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </Layout>
      </>
    )
  }
}

export default PostTemplate

export const query = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`