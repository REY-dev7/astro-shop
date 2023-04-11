import { Carousel } from "flowbite-react";
import React from "react";
import { sliderData } from "./data";

type Props = {};

const Slider = (props: Props) => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-[600px]">
      <Carousel>
          {sliderData &&
            sliderData?.map((slider: any, id) => (
              <div key={id} className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
              <img
                src={slider}
                alt=""
                className="h-full w-full 2xl:object-fit"
                
                />
                </div>
            ))}
      </Carousel>
    </div>
  );
};

export default Slider;
