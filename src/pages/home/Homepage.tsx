import React from "react";
import Slider from "../../components/Slider/Slider";
import FeatureProducts from "../../components/featureProducts/FeatureProducts";
import Categories from "../../components/Categories/Categories";
import Contacts from "../../components/Contacts/Contacts";

type Props = {};

const Homepage = (props: Props) => {
  return (
    <div className="w-full">
      <Slider />
      <FeatureProducts type="featured" />
      <Categories />
      <FeatureProducts type="trending" />
      <Contacts />
    </div>
  );
};

export default Homepage;
