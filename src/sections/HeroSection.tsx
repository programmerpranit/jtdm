import Image from "next/image";
import React from "react";

const HeroSection = (): JSX.Element => {
  return (
    <>
      <div className="mx-auto flex max-w-7xl items-center py-20">
        <div className="w-1/2 p-5">
          <Image
            src={"/junnar.jpg"}
            width={800}
            height={800}
            alt=""
            className="rounded-2xl"
          />
        </div>
        <div className="w-1/2 p-5 md:px-10 ">
          <h2>Welcome to Junnar</h2>
          <br />
          <p>
            Discover the hidden gems of Junnar, nestled in the heart of
            Maharashtra Sahyadri mountain range. Explore ancient caves, majestic
            forts, pristine waterfalls, and lush green valleys. Start your
            adventure today!
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
