import React from 'react';
import SzatmarSlide from '../components/SzatmarSlide'
import BankSlide from '../components/BankSlide'
import HoszigetelesSlide from '../components/HoszigetelesSlide'

const References = () => {
  return (
    <div id="slider" className="st-slider">
      <div className="sliderWrapper">
          <SzatmarSlide />
          <BankSlide />
          <HoszigetelesSlide />
          <BankSlide />
      </div>
    </div>
  )
}

export default References;
