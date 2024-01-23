import React from 'react'
import { graphql } from 'gatsby'

const MarkdownTemplate = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  

  return (
    <div>
      <header>
      <a id="editme"><span >✎Edit</span></a>
      </header>
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}



export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
    }
  }
`

export default MarkdownTemplate
