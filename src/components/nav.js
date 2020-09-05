import React from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby'

const ListLink = props => (
  <li className="nav-item">
    <Link className="nav-link" to={props.to}>{props.children}</Link>
  </li>
)

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light border-0">
      <div className="container">
        <Link className="navbar-brand" to="/">{data.site.siteMetadata.title}</Link>
        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <ListLink to="/post">Blog</ListLink>
          </ul>
          <ul className="navbar-nav ml-md-auto">
            <Link to="/about">About</Link>
          </ul>
        </div>
      </div>
    </nav>
  )
}