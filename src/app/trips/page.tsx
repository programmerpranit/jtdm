import React from "react";

const TripsPage = (): JSX.Element => {
  return (
    <>
      <div className="mx-auto max-w-7xl py-20 text-center">
        <h5>Leisure Trips for Weekends</h5>
        <h2>Trips in Junnar</h2>
        <p className="mx-auto mt-5 max-w-3xl ">
          Based on your preference, Junnar offers plenty of leisurely activities
          and weekend getaways to help you unwind, relax, and rejuvenate amidst
          nature&apos;s bounty.
        </p>
        <div className="my-10 flex flex-wrap">
          <TripCard
            title="Trek and Trails"
            desc="The trekking trails in Junnar offer diverse landscapes, historical attractions, and breathtaking
views, providing unforgettable experiences for adventure enthusiasts and nature lovers alike."
          />
          <TripCard
            title="Biodiversity Trails "
            desc="By exploring biodiversity trails in Junnar, you'll not only appreciate the natural beauty and
            ecological significance of the region but also contribute to conservation efforts aimed at preserving its biodiversity for future generations to enjoy."
          />
          <TripCard
            title="Heritage Walks"
            desc="The heritage walks offer immersive experiences that allow you to connect with Junnar's rich
            history, cultural heritage, and architectural wonders while exploring its picturesque landscapes
            and charming villages.
            "
          />
          <TripCard
            title="Cave Tours"
            desc="The cave tours in Junnar offer a fascinating glimpse into the region's ancient past, religious
            beliefs, and artistic achievements, making them a must-visit for history enthusiasts and culture
            lovers alike."
          />
          <TripCard
            title="Rustic Rural Life Tour
            "
            desc="By embarking on a rustic rural life tour in Junnar, you'll not only gain a deeper appreciation for
            traditional lifestyles, cultural heritage, and sustainable practices but also forge meaningful
            connections with the local community and create lasting memories of your rural adventure.
            "
          />
          <TripCard
            title="Pilgrimage Tours"
            desc="By embarking on a pilgrimage tour in Junnar, you'll not only deepen your spiritual connection
            but also explore the rich history, architectural wonders, and cultural traditions associated with
            these sacred sites.
            "
          />
          <TripCard
            title="Glamping in Junnar"
            desc="Glamping, or glamorous camping, is a luxurious and immersive outdoor experience that
            combines the comforts of modern amenities with the beauty of nature."
          />
          <TripCard
            title="Astronomical Nights"
            desc="Astronomical nights in Junnar provide a unique opportunity to connect with the cosmos,
            deepen your appreciation for the universe, and create lasting memories under the celestial
            canopy of stars."
          />
        </div>
      </div>
    </>
  );
};

export default TripsPage;

function TripCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}): JSX.Element {
  return (
    <>
      <div className="p-3 md:w-1/3">
        <div className="rounded-md border p-5 transition-all duration-500 hover:scale-105 hover:border-primary">
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      </div>
    </>
  );
}
