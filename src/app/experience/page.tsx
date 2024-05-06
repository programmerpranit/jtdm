import Image from "next/image";
import React from "react";

const ExperiencePage = (): JSX.Element => {
  return (
    <>
      <div className="mx-auto max-w-7xl py-20 text-center">
        <h2>Experiences in Junnar</h2>
        <p className="mx-auto mt-5 max-w-3xl ">
          Junnar, located in the Pune district of Maharashtra, India, is a
          treasure trove of historical sites, natural wonders, and cultural
          attractions. Here are some top places to visit in Junnar
        </p>
        <div className="flex flex-wrap justify-center py-10">
          <Experience
            img="/shivneri.jpg"
            title="Shivneri Fort"
            desc=" Explore the majestic Shivneri Fort, the birthplace of the legendary Maratha ruler,
            Chhatrapati Shivaji Maharaj. This historic fort offers panoramic views of the surrounding
            landscape and features ancient temples, water cisterns, and fortifications"
          />
          <Experience
            img="/Lenyadri.jpg"
            title="Lenyadri Caves"
            desc=": Discover the ancient Buddhist caves of Lenyadri, carved into a hillside and
            renowned for their rock-cut sculptures and intricate carvings. The main cave, dedicated to Lord
            Ganesha, is particularly noteworthy.
            "
          />
          <Experience
            img="/narayangad-fort.jpg"
            title="Narayangad Fort"
            desc=" Embark on a trek to Narayangad Fort, also known as Hadsar Fort, nestled
            amidst lush greenery and offering breathtaking views of the surrounding valleys."
          />
          <Experience
            img="/shivai.jpg"
            title="Shivai Temple"
            desc="Pay a visit to the Shivai Temple, dedicated to Goddess Shivai and situated atop
            Shivneri Fort."
          />

          <Experience
            img="/harishchandragad.jpg"
            title="Harishchandragad"
            desc=" A popular trekking destination with stunning views, ancient temples, and the
            famous Konkan Kada cliff."
          />
          <Experience
            img="/kudki-dam.jpg"
            title="Kukdi River Dam"
            desc=" A scenic spot with a dam built across the Kukdi River, perfect for picnics,
            birdwatching, and relaxation by the water.
            "
          />
          <Experience
            img="/nimgiri.JPG"
            title="Nimgiri Fort"
            desc="A lesser-known fort with historical ruins and trekking trails, offering glimpses into
            the region's past and stunning views of the landscape"
          />
          <Experience
            img="/malshej.jpg"
            title="Malshej Ghat"
            desc="Another nearby attraction, Malshej Ghat is known for its misty hills, cascading
            waterfalls, and diverse birdlife, making it a popular destination for nature enthusiasts.
            "
          />
          <Experience
            img="/ozar.jpg"
            title="Ozar"
            desc=" Visit the Vigneshwara Temple in Ozar, one of the Ashtavinayak temples dedicated to Lord
            Ganesha, and explore the quaint village surroundings.
            "
          />
          <Experience
            img="/narayangaon.jpg"
            title="Narayangaon"
            desc="Known for its vineyards and wine tourism, Narayangaon offers opportunities for
            wine tasting and exploring the picturesque countryside.
            "
          />
          <Experience
            img="/naneghat.jpeg"
            title="Naneghat"
            desc="A historic fort perched atop a hill, offering trekking trails, ancient
            ruins, and panoramic views of the surrounding valleys.
            "
          />
        </div>
      </div>
    </>
  );
};

export default ExperiencePage;

const Experience = ({
  title,
  img,
  desc,
}: {
  title: string;
  img: string;
  desc: string;
}): JSX.Element => {
  return (
    <div className="p-5 md:w-1/3">
      <Image
        src={img}
        width={500}
        height={500}
        className="mb-5 h-60 rounded-xl object-cover"
        alt=""
      />
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};
