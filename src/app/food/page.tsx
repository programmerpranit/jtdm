import Image from "next/image";
import React from "react";

const FoodPage = (): JSX.Element => {
  return (
    <>
      <div className="mx-auto max-w-7xl py-20 text-center">
        <h2>Food and Cuisine</h2>
        <p className="mx-auto mt-5 max-w-3xl ">
          The food culture of Junnar is deeply rooted in the culinary traditions
          of Maharashtra, showcasing a rich tapestry of flavors, ingredients,
          and cooking techniques. Here&apos;s a glimpse into the vibrant food
          culture of Junnar
        </p>
        <div className="my-10 flex flex-wrap justify-center">
          <FoodCard
            title="Maswadi"
            desc="A savory snack made from gram flour (besan) and spices, steamed, sliced, and
            shallow-fried. It's seasoned with mustard seeds, curry leaves, turmeric, and other spices,
            offering a deliciously spicy and flavorful taste."
            img="/maswadi.jpg"
          />
          <FoodCard
            title="Puran Poli"
            desc="A sweet flatbread prepared during festivals and special occasions, Puran Poli consists
            of a stuffing made from cooked chana dal (split Bengal gram), jaggery (unrefined cane sugar),
            cardamom powder, and grated coconut, encased in a dough made from whole wheat flour."
            img="/puranpoli.jpg"
          />
          <FoodCard
            title="Bharli Vangi"
            desc="This traditional Maharashtrian dish features baby eggplants stuffed with a spicy
            coconut and peanut masala mixture, cooked until tender and flavorful. Bharli Vangi is often
            served with bhakri (sorghum flatbread) or rice."
            img="/bharli-vangi.jpg"
          />
          <FoodCard
            title="Thalipeeth"
            desc="Thalipeeth is a savory multigrain pancake made from a mixture of various flours
            such as wheat, rice, and gram flour, along with spices, onions, and chopped herbs. It's typically
            served with yogurt, pickle, or chutney.
            "
            img="/thalipeeth.jpg"
          />
          <FoodCard
            title="Kothimbir Vadi"
            desc="Kothimbir Vadi is a savory snack made from besan (gram flour), chopped
            coriander leaves (kothimbir), and spices, steamed, and then shallow-fried until crispy. It's served
            as an appetizer or tea-time snack.
            "
            img="/kothimbir-wadi.jpg"
          />
          <FoodCard
            title="Misal Pav"
            desc="A spicy and flavorful dish consisting of sprouted lentils (sprouts) cooked with onions,
            tomatoes, and a blend of spices, garnished with farsan (crispy toppings), and served with pav
            (bread rolls).
            "
            img="/misal.webp"
          />
          <FoodCard
            title="Vada Pav"
            desc=" Often referred to as the 'Indian burger', Vada Pav features a deep-fried potato
            dumpling (vada) sandwiched between pav (bread rolls) along with spicy chutneys, fried green
            chilies, and garlic powder.
            "
            img="/vadapav.webp"
          />
        </div>
      </div>
    </>
  );
};

export default FoodPage;

function FoodCard({
  title,
  desc,
  img,
}: {
  title: string;
  desc: string;
  img: string;
}): JSX.Element {
  return (
    <>
      <div className="p-3 md:w-1/3">
        <div className="p-5">
          <Image
            src={img}
            alt=""
            className="h-60 rounded-xl object-cover"
            width={500}
            height={500}
          />
          <h3 className="py-2 pt-4">{title}</h3>
          <p>{desc}</p>
        </div>
      </div>
    </>
  );
}
