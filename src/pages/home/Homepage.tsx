import React from "react";
import ExtSlider from "../../components/Slider/ExtSlider";
import FeatureProducts from "../../components/featureProducts/FeatureProducts";
import Categories from "../../components/Categories/Categories";
import Contacts from "../../components/Contacts/Contacts";

type Props = {};

const Homepage = (props: Props) => {
  return (
    <div>
      <ExtSlider />
      <FeatureProducts type="featured" />
      <Categories />
      <FeatureProducts type="trending" />
      <Contacts />
    </div>
  );
};

export default Homepage;
