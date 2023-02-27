import React from 'react'
import Slider from '../../components/Slider/Slider'
import ExtSlider from '../../components/Slider/ExtSlider'
import FeatureProducts from '../../components/featureProducts/FeatureProducts'
import Categories from '../../components/Categories/Categories'

type Props = {}

const Homepage = (props: Props) => {
  return (
    <div>
      {/* <Slider /> */}
      <ExtSlider />
      <FeatureProducts type="feature products" />
      <Categories />
      <FeatureProducts type="trending products" />
    </div>
  )
}

export default Homepage