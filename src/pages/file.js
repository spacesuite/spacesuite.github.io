import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const File = ({ data }) => {
  return (
    <Layout>
      <article className="container">
        <section className="jumbotron p-5 my-5 text-white bg-dark">
          <div className="col-md-6 px-0">
            <h1 className="display-4">Content</h1>
            <p className="lead my-3">List of files in content folder.</p>
          </div>
        </section>

        <h2>Files</h2>
        <section className="table-responsive mb-4">
          <table className="table">
            <thead>
              <tr>
                <th>Path</th>
                <th>Size</th>
                <th>Extension</th>
                <th>Created</th>
              </tr>
            </thead>
            <tbody>
              {data.allFile.edges.map(({ node }, index) => (
                <tr key={index}>
                  <td>{node.relativePath}</td>
                  <td>{node.prettySize}</td>
                  <td>{node.extension}</td>
                  <td>{node.birthTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </article>
    </Layout>
  )
}

export default File

export const query = graphql`
  query {
    allFile(filter: {relativePath: {regex: "/^((?!cache).)*$/"}}) {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`