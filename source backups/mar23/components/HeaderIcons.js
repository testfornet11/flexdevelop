import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const HeaderIcons = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "icon_sprite.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}
