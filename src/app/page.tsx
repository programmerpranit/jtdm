import AboutUsSection from "@/sections/AboutUsSection";
import AgriStaysSection from "@/sections/AgriStaysSection";
import Experiences from "@/sections/Experiences";
import FoodSection from "@/sections/FoodSection";
import Slider from "@/sections/Slider";
// import TopSection from "@/sections/TopSection";
import TripsSection from "@/sections/TripsSection";
import WSUASection from "@/sections/WSUASection";
import React from "react";

export default function Home(): JSX.Element {
  return (
    <>
      <Slider />
      {/* <TopSection /> */}
      <AboutUsSection />
      <WSUASection />
      <Experiences />
      <TripsSection />
      <FoodSection />
      <AgriStaysSection />
    </>
  );
}
