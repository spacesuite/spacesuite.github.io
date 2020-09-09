import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <main>
          <div className="content">
            <div className="bio">
              <h1>Not Found</h1>
              <p>Uh oh, you're out of any known space... the emptiness...</p>
            </div>
          </div>
        </main>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }  
`
