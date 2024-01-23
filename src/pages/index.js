import React from 'react'
import { Link, graphql } from 'gatsby'

const IndexPage = ({ data }) => {
  const { allMarkdownRemark } = data


  return (
    <div>
      
      <h2>List of Available Blogs:</h2>
      <ul>
        {allMarkdownRemark.edges.map(({ node }) => (
          <li key={node.id}>
            <Link to={node.fields.slug} >{node.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default IndexPage
