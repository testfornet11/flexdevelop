import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      wordpressPage(title: {eq: "Bank utca"}) {
      content
      title
      }
      allImageSharp(filter: {fluid: {originalName: {regex: "/slide_bank/"}}}) {
        edges {
          node {
            fluid {
              ...GatsbyImageSharpFluid
              }
            }
          }
        }
    }
  `)

  return (
    <div>
        {data.allImageSharp.edges.map(edge =>
          <Img className="img" fluid={edge.node.fluid} />
        )}
        <h2 className="description" dangerouslySetInnerHTML={{ __html: data.wordpressPage.title }} />
        <h4 className="description" dangerouslySetInnerHTML={{ __html: data.wordpressPage.content }} />
    </div>
  )
}
