const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // The “graphql” function allows us to run arbitrary
  // queries against the local Gatsby GraphQL schema. Think of
  // it like the site has a built-in database constructed
  // from the fetched data that you can run queries against.
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  // Check for any errors
  if (result.errors) throw result.errors

  // Create post pages.
  const posts = result.data.allMarkdownRemark.edges

  const postTemplate = path.resolve(`./src/templates/post.js`)
  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: postTemplate,
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
}

// Create post slug.
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const relativeFilePath = createFilePath({ node, getNode, basePath: `post/` })
    const url = `/post${relativeFilePath}`

    createNodeField({
      name: `slug`,
      node,
      value: url,
    })
  }
}

// Include date in post slug.
// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === `MarkdownRemark`) {
//     const relativeFilePath = createFilePath({ node, getNode, trailingSlash: false });
//     const postDate = moment(node.frontmatter.date); // Use moment.js to easily change date format.
//     const url = `/Blog/${postDate.format("YYYY/MM/DD")}${node.frontmatter.slug}`;

//     createNodeField({
//       name: `slug`,
//       node,
//       value: url,
//     });
//   }
// }