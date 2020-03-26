import React from 'react'
import { graphql } from "gatsby"
import Bankgal from '../components/Bankgal'
import Szatmargal from '../components/Szatmargal'
import Hoszigetelesgal from '../components/Hoszigetelesgal'

export default ({ data }) => (
  <div className="galleryContainer">
  <Szatmargal />
  <Hoszigetelesgal />
  <Bankgal />
  </div>

)

export const query = graphql`
query {
allImageSharp(filter: {fluid: {originalName: {regex: "/hoszigeteles/"}}}) {
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
