import React from 'react'
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default ({ data }) => (
  <div>
    <div style={{Width: '95vw', margin: '20px auto', padding: '0 5vw'}}>
      {data.allImageSharp.edges.map(edge =>
        <Img className="img" fluid={edge.node.fluid} />
      )}
    </div>
  </div>
)

export const query = graphql`
  query {
    allImageSharp(filter: {original: {height: {eq: 1100}}}) {
      edges {
        node {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
