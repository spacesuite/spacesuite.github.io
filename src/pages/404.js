import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <section className="jumbotron text-center">
          <div className="container">
            <h1>Not Found</h1>
            <p className="lead text-muted mb-0">Uh oh, you just hit a route that doesn&#39;t exist... the sadness.</p>
            <small className="text-muted">If you were trying to reach another page, perhaps you can find it below.</small>
          </div>
        </section>
        <aside className="container my-5">
          <h2>Pages ({data.allSitePage.totalCount})</h2>
          <ul className="list-unstyled">
            {data.allSitePage.nodes.map(({ path }, index) => (
              <li key={index}><Link to={path}>{path}</Link></li>
            ))}
          </ul>
        </aside>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    allSitePage(filter: {path: {regex: "/^((?!404).)*$/"}}) {
      nodes {
        path
      }
      totalCount
    }
    site {
      siteMetadata {
        title
      }
    }
  }  
`
