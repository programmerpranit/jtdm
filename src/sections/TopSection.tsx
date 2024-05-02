import React from "react";

const TopSection = (): JSX.Element => {
  return (
    <>
      <div className="flex h-[80vh] w-screen flex-col items-center justify-center">
        <h5 className="text-secondary">Welcome to Junnar</h5>
        <h2>Where Nature Meets History</h2>
        <p className="mt-3 max-w-4xl text-center">
          Discover the hidden gems of Junnar, nestled in the heart of
          Maharashtra&apos;s Sahyadri mountain range. Explore ancient caves,
          majestic forts, pristine waterfalls, and lush green valleys. Start
          your adventure today!
        </p>
      </div>
    </>
  );
};

export default TopSection;
