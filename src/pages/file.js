import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'

const File = ({ data }) => {
  return (
    <Layout>
      <SEO title="File Check" />
      <main>
        <section>
          <h1>Content</h1>
          <p>List of files in content folder.</p>
        </section>

        <h2>Files</h2>
        <section>
          <table>
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
      </main>
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