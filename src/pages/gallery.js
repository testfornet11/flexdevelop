import React from 'react'
import Bankgal from '../components/Bankgal'
import Szatmargal from '../components/Szatmargal'
import Hoszigetelesgal from '../components/Hoszigetelesgal'
import Retkerulogal from '../components/Retkerulogal'

export default () => (
  <div className="galleryContainer">
  <Szatmargal />
  <Hoszigetelesgal />
  <Bankgal />
  <Retkerulogal />
  </div>
)
