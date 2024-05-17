import Image from "next/image";
import Link from "next/link";
import React from "react";

const TripsSection = (): JSX.Element => {
  return (
    <>
      <div className="items-centers mx-auto flex max-w-7xl flex-col-reverse py-20 md:flex-row">
        <div data-aos="fade-right" className="p-5 md:w-1/2">
          <h5>Leisure Trips for Weekends</h5>
          <h2>Trips in Junnar</h2>
          <p className="py-3">
            We have a diverse range of package tours available in Junnar! From
            trekking and biodiversity trails to cave tours and heritage walks,
            there&apos;s something for everyone. Whether you&apos;re interested
            in adventure, nature, history, or spirituality, Junnar has it all
            covered. Which package tour are you most interested in exploring? Do
            contact us and we will design a joyous tour for you and your family.
          </p>
          <Link href={"/trips"}>
            <button>Explore</button>
          </Link>
        </div>
        <div data-aos="fade-left" className="p-5 md:w-1/2">
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
