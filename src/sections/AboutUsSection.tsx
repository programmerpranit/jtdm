import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutUsSection = (): JSX.Element => {
  return (
    <>
      <div className="mx-auto flex max-w-7xl flex-col items-center py-20 md:flex-row">
        <div className="p-5 md:w-1/2">
          <Image
            src={"/junnar.jpg"}
            width={800}
            height={800}
            alt=""
            className="rounded-2xl"
          />
        </div>
        <div className="p-5 md:w-1/2 md:px-10 ">
          <h2>About Us</h2>
          <br />
          <p>
            Welcome to Junnar Tourism Destination Management Company, where we
            are dedicated to shaping a sustainable and meaningful tourism model
            for Junnar, Maharashtra. Our commitment lies in preserving the
            natural beauty, cultural heritage, and local communities of this
            historic region while providing enriching experiences for travelers
            from around the globe.
          </p>
          <br />
          <Link href={"/about"}>
            <button>Read More</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AboutUsSection;
