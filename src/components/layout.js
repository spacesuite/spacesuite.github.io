import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Header from '../components/header'
import Nav from '../components/nav'
import Footer from '../components/footer'

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )
  return (
    <>
      <Header>
        <Nav />
      </Header>

      <main>
        {children}
      </main>

      <Footer>
        <div className="container">
          <div className="row">
            <div className="col">
              <span className="d-block text-muted">&copy; 2020 {data.site.siteMetadata.title}</span>
              <small className="d-block text-muted">{data.site.siteMetadata.description}</small>
            </div>
          </div>
        </div>
      </Footer>
    </>
  )
}