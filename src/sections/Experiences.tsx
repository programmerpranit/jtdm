import Image from "next/image";
import React from "react";

const Experiences = (): JSX.Element => {
  return (
    <>
      <div className="mx-auto max-w-7xl py-20 text-center">
        <h2>Experiences in Junnar</h2>
        <p className="mx-auto mt-5 max-w-3xl ">
          Junnar, located in the Pune district of Maharashtra, India, is a
          treasure trove of historical sites, natural wonders, and cultural
          attractions. Here are some top places to visit in Junnar
        </p>
        <div className="flex flex-wrap py-10">
          <div className="p-5 md:w-1/3">
            <Image
              src={"/junnar.jpg"}
              width={500}
              height={500}
              className="mb-5 rounded-xl"
              alt=""
            />
            <h3>Caves of Junnar</h3>
            <p>
              Explore the various rock-cut caves scattered across the Junnar
              region.
            </p>
          </div>
          <div className="p-5 md:w-1/3">
            <Image
              src={"/junnar.jpg"}
              width={500}
              height={500}
              className="mb-5 rounded-xl"
              alt=""
            />
            <h3>Agro-tourism Centers</h3>
            <p>
              Experience rural life and traditional farming practices at the
              agro-tourism centers in Junnar
            </p>
          </div>
          <div className="p-5 md:w-1/3">
            <Image
              src={"/junnar.jpg"}
              width={500}
              height={500}
              className="mb-5 rounded-xl"
              alt=""
            />
            <h3>Junnar Market</h3>
            <p>
              Explore the vibrant markets of Junnar and indulge in shopping for
              local handicrafts, artifacts, and agricultural produce.
            </p>
          </div>
        </div>

        <button>Explore More</button>
      </div>
    </>
  );
};

export default Experiences;
