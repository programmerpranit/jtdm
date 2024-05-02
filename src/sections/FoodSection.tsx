import Image from "next/image";
import React from "react";

const FoodSection = (): JSX.Element => {
  return (
    <>
      <div className="items-centers mx-auto flex max-w-7xl flex-col py-20 md:flex-row">
        <div className="p-5 md:w-1/2">
          <Image
            src={"/junnar.jpg"}
            className="rounded-2xl"
            alt=""
            width={900}
            height={900}
          />
        </div>
        <div className="p-5 md:w-1/2">
          <h5>A taste of heaven</h5>
          <h2>Food and Cuisine</h2>
          <p className="py-3">
            The food culture of Junnar is deeply rooted in the culinary
            traditions of Maharashtra, showcasing a rich tapestry of flavors,
            ingredients, and cooking techniques. Here&apos;s a glimpse into the
            vibrant food culture of Junnar
          </p>
          <button>Explore</button>
        </div>
      </div>
    </>
  );
};

export default FoodSection;
