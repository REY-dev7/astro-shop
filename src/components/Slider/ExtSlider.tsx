import { Carousel } from "flowbite-react";
import React from "react";
import { sliderData } from "./data";

type Props = {};

const ExtSlider = (props: Props) => {
  return (
    <div className="h-56 sm:h-96 w-full xl:h-[600] 2xl:h-[750px] ">
      <Carousel>
        {sliderData &&
          sliderData?.map((slider: any, id) => (
            <img src={slider} alt="" className="h-full " key={id} />
          ))}
      </Carousel>
    </div>
  );
};

export default ExtSlider;
