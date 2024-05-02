import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = (): JSX.Element => {
  return (
    <>
      <div className="border-t md:p-10">
        <div className="mx-auto flex max-w-7xl flex-col md:flex-row">
          <div className="p-5 md:w-1/3">
            <Image alt="" src={"/jtdm-logo.jpg"} width={150} height={150} />
            <p className="mt-5">
              Discover the hidden gems of Junnar, nestled in the heart of
              Maharashtra&apos;s Sahyadri mountain range.
            </p>
          </div>
          <div className="p-5 md:w-1/3">
            <h4>Quick Links</h4>
            <Link href={"/about"}>
              <p className="hover:text-primary">About</p>
            </Link>
            <Link href={"/experience"}>
              <p className="hover:text-primary">Experience</p>
            </Link>
            <Link href={"/trips"}>
              <p className="hover:text-primary">Trips</p>
            </Link>
            <Link href={"/food"}>
              <p className="hover:text-primary">Food and Cuisine</p>
            </Link>
            <Link href={"/agri-stays"}>
              <p className="hover:text-primary">Agri Stays</p>
            </Link>
          </div>
          <div className="p-5 md:w-1/3">
            <h4>Contact Us</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
