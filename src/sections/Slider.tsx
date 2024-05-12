"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const Slider = (): JSX.Element => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay]}
        className="relative h-screen w-screen"
      >
        <SwiperSlide className="relative h-screen w-screen">
          <Image
            src={"/images/jdmc1.jpg"}
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute top-0 flex h-screen w-screen flex-col items-center justify-center bg-black bg-opacity-50 py-10">
            <div className="flex h-[80vh] w-screen flex-col items-center justify-center p-5">
              <h5 className="text-secondary">Welcome to Junnar</h5>
              <h2 className="text-center text-white">
                Where Nature Meets History
              </h2>
              <p className="mt-3 max-w-4xl text-center text-gray-300">
                Discover the hidden gems of Junnar, nestled in the heart of
                Maharashtra&apos;s Sahyadri mountain range. Explore ancient
                caves, majestic forts, pristine waterfalls, and lush green
                valleys. Start your adventure today!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative h-screen w-screen">
          <Image
            src={"/images/jdmc3.jpg"}
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute top-0 flex h-screen w-screen flex-col items-center justify-center bg-black bg-opacity-50 py-10">
            <div className="flex h-[80vh] w-screen flex-col  items-center justify-center p-5">
              <h5 className="text-secondary">Welcome to Junnar</h5>
              <h2 className="text-center text-white">
                Where Nature Meets History
              </h2>
              <p className="mt-3 max-w-4xl text-center text-gray-300">
                Discover the hidden gems of Junnar, nestled in the heart of
                Maharashtra&apos;s Sahyadri mountain range. Explore ancient
                caves, majestic forts, pristine waterfalls, and lush green
                valleys. Start your adventure today!
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
