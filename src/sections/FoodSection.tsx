import Image from "next/image";
import Link from "next/link";
import React from "react";

const FoodSection = (): JSX.Element => {
  return (
    <>
      <div className="items-centers mx-auto flex max-w-7xl flex-col py-20 md:flex-row">
        <div data-aos="fade-right" className="p-5 md:w-1/2">
          <Image
            src={"/puranpoli.jpg"}
            className="rounded-2xl"
            alt=""
            width={900}
            height={500}
          />
        </div>
        <div data-aos="fade-left" className="p-5 md:w-1/2">
          <h5>A taste of heaven</h5>
          <h2>Food and Cuisine</h2>
          <p className="py-3">
            The food culture of Junnar is deeply rooted in the culinary
            traditions of Maharashtra, showcasing a rich tapestry of flavors,
            ingredients, and cooking techniques. Here&apos;s a glimpse into the
            vibrant food culture of Junnar
          </p>
          <Link href={"/food"}>
            <button>Explore</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FoodSection;
