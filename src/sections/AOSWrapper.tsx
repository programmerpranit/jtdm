"use client";

import React, { useEffect } from "react";
import AOS from "aos";

const AOSWrapper = (): JSX.Element => {
  useEffect(() => {
    AOS.init();
  }, []);

  return <></>;
};

export default AOSWrapper;
