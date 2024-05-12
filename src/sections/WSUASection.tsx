import Image from "next/image";
import React from "react";

const WSUASection = (): JSX.Element => {
  return (
    <>
      <div className="mx-auto max-w-7xl py-20">
        <h2 className="p-5 text-center">What Sets Us Apart</h2>
        <div className="flex flex-wrap pt-10">
          <div
            data-aos="zoom-in"
            className="flex flex-col items-center p-5 md:w-1/3"
          >
            <Image
              src={"/icons/community.png"}
              alt=""
              width={100}
              height={100}
            />
            <h3>Community Engagement</h3>
            <p className="text-center">
              We actively involve local communities in our tourism initiatives,
              empowering them to participate in and benefit from the tourism
              industry.
            </p>
          </div>
          <div
            data-aos="zoom-in"
            className="flex flex-col items-center p-5 md:w-1/3"
          >
            <Image
              src={"/icons/environment.png"}
              alt=""
              width={100}
              height={100}
            />
            <h3>Environmental Stewardship</h3>
            <p className="text-center">
              We are committed to preserving Junnar&apos;s natural landscapes,
              biodiversity, and ecological integrity.
            </p>
          </div>
          <div
            data-aos="zoom-in"
            className="flex flex-col items-center p-5 md:w-1/3"
          >
            <Image
              src={"/icons/cultural.png"}
              alt=""
              width={100}
              height={100}
            />
            <h3>Cultural Preservation</h3>
            <p className="text-center">
              Junnar boasts a rich cultural heritage spanning centuries, from
              ancient rock-cut caves to historic forts and temples.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WSUASection;
