import Image from "next/image";
import Link from "next/link";
import React from "react";

const TripsSection = (): JSX.Element => {
  return (
    <>
      <div className="items-centers mx-auto flex max-w-7xl flex-col-reverse py-20 md:flex-row">
        <div className="p-5 md:w-1/2">
          <h5>Leisure Trips for Weekends</h5>
          <h2>Trips in Junnar</h2>
          <p className="py-3">
            Based on your preference, Junnar offers plenty of leisurely
            activities and weekend getaways to help you unwind, relax, and
            rejuvenate amidst nature&apos;s bounty.
          </p>
          <Link href={"/trips"}>
            <button>Explore</button>
          </Link>
        </div>
        <div className="p-5 md:w-1/2">
          <Image
            src={"/images/jdmc2.jpg"}
            className="rounded-2xl"
            alt=""
            width={900}
            height={900}
          />
        </div>
      </div>
    </>
  );
};

export default TripsSection;
