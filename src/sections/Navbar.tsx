"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Navbar = (): JSX.Element => {
  const [pathname, setPathname] = useState("/");
  const [toggle, setToggle] = useState(false);

  const path = usePathname();

  useEffect(() => {
    setPathname(path);
  }, [path]);

  return (
    <>
      <nav className="flex flex-col justify-evenly  md:flex-row">
        <div className="logo flex h-32 items-center justify-between  p-5  max-md:border-b">
          <Link href={"/"}>
            <Image
              className="object-contain"
              src={"/jtdm-logo.jpg"}
              alt=""
              width={100}
              height={100}
            />
          </Link>
          <div
            onClick={() => {
              setToggle(!toggle);
            }}
            className="flex h-8 w-8 flex-col justify-evenly md:hidden"
          >
            <div className="line h-0.5 w-full bg-primary"></div>
            <div className="line h-0.5 w-full bg-primary"></div>
            <div className="line h-0.5 w-full bg-primary"></div>
          </div>
        </div>
        <div
          className={`links  ${toggle ? "translate-x-0" : "max-md:translate-x-[100vw]"} absolute right-0 z-50 flex flex-col items-center gap-10 bg-white
        p-5 transition-all duration-500 ease-in-out max-md:top-32 max-md:h-[90vh] max-md:w-2/3 max-md:border-l md:relative md:flex-row`}
        >
          <Link href="/about">
            <p
              className={`font-medium ${
                pathname === "/about" ? "text-primary" : "text-heading"
              } hover:text-primary`}
            >
              About
            </p>
          </Link>
          <Link href="/experience">
            <p
              className={`font-medium ${
                pathname === "/experience" ? "text-primary" : "text-heading"
              } hover:text-primary`}
            >
              Experience
            </p>
          </Link>
          <Link href="/trips">
            <p
              className={`font-medium ${
                pathname === "/trips" ? "text-primary" : "text-heading"
              } hover:text-primary`}
            >
              Trips
            </p>
          </Link>
          <Link href="/food">
            <p
              className={`font-medium ${
                pathname === "/food" ? "text-primary" : "text-heading"
              } hover:text-primary`}
            >
              Food
            </p>
          </Link>
          <Link href="/agri-stays">
            <p
              className={`font-medium ${
                pathname === "/agri-stays" ? "text-primary" : "text-heading"
              } hover:text-primary`}
            >
              Agri Stays
            </p>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
