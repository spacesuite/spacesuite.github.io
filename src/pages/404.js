import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'

class NotFoundPage extends React.Component {
  render() {

    return (
      <Layout>
        <SEO title="Page Not Found" />
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
