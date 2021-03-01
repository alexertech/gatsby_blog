import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from "../components/layout"

const Template = ({ data, pathContext }) => {
  const title = data.markdownRemark.frontmatter.title
  const date = data.markdownRemark.frontmatter.date
  const html = data.markdownRemark.html
  
  return (
	<Layout>
    <div>
      <h1>{title}</h1>
      <div>
        <em>{date}</em>
      </div>

      <br />
      <div className="blogpost" dangerouslySetInnerHTML={{ __html: html }} />

    </div>
	</Layout>
  )
}

export const postQuery = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM, DD, YYYY")
        path
        tags
        excerpt
      }
    }
  }
  `

export default Template