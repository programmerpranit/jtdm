import Image from "next/image";
import Link from "next/link";
import React from "react";

const Experiences = (): JSX.Element => {
  return (
    <>
      <div className="mx-auto max-w-7xl py-20 text-center">
        <h2 className="px-5">Experiences in Junnar</h2>
        <p className="mx-auto mt-5 max-w-3xl px-5 ">
          Junnar, located in the Pune district of Maharashtra, India, is a
          treasure trove of historical sites, natural wonders, and cultural
          attractions. Here are some top places to visit in Junnar
        </p>
        <div className="flex flex-wrap py-10">
          <div data-aos="fade-right" className="p-5 md:w-1/3">
            <Image
              src={"/images/jdmc5.jpg"}
              width={500}
              height={500}
              className="mb-5 h-60 rounded-xl object-cover"
              alt=""
            />
            <h3>Caves of Junnar</h3>
            <p>
              Explore the various rock-cut caves scattered across the Junnar
              region.
            </p>
          </div>
          <div data-aos="fade-up" className="p-5 md:w-1/3">
            <Image
              src={"/images/jdmc4.jpg"}
              width={500}
              height={500}
              className="mb-5 h-60 rounded-xl object-cover"
              alt=""
            />
            <h3>Agro-tourism Centers</h3>
            <p>
              Experience rural life and traditional farming practices at the
              agro-tourism centers in Junnar
            </p>
          </div>
          <div data-aos="fade-left" className="p-5 md:w-1/3">
            <Image
              src={"/images/junnar-market.jpg"}
              width={500}
              height={500}
              className="mb-5 h-60 rounded-xl object-cover"
              alt=""
            />
            <h3>Junnar Market</h3>
            <p>
              Explore the vibrant markets of Junnar and indulge in shopping for
              local handicrafts, artifacts, and agricultural produce.
            </p>
          </div>
        </div>
        <Link href={"/experience"}>
          <button>Explore More</button>
        </Link>
      </div>
    </>
  );
};

export default Experiences;
