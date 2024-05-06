import AgriStaysSection from "@/sections/AgriStaysSection";
import React from "react";

const AgriStaysPage = (): JSX.Element => {
  return (
    <>
      <div className="mx-auto max-w-7xl">
        <AgriStaysSection />

        <div className="flex flex-wrap ">
          <AgriCard
            title="Farm Stays"
            desc="Stay at a working farm in Junnar and experience life in the countryside. Participate
in farm activities such as milking cows, harvesting crops, or tending to orchards. Enjoy farmfresh meals prepared with organic ingredients sourced directly from the farm."
          />
          <AgriCard
            title="Homestays"
            desc=" Opt for a homestay with a local family in Junnar and experience authentic
            Maharashtrian hospitality. Learn about traditional cooking techniques, join the family for meals,
            and engage in cultural exchanges with your hosts. Explore the surrounding villages and
            countryside on guided tours led by your hosts."
          />
          <AgriCard
            title="Agro-tourism Centers"
            desc="Junnar boasts several agro-tourism centers that offer a range of activities
            and accommodations for visitors. Stay in comfortable cottages or tents amidst lush greenery,
            and participate in activities such as bullock cart rides, tractor tours, or nature walks. Learn about
            sustainable farming practices and interact with local farmers and artisans."
          />
          <AgriCard
            title="Village Stays"
            desc="Immerse yourself in the rustic charm of Junnar's villages with village stays offered
            by local tour operators. Stay in traditional village homes or guesthouses and experience the
            simplicity of rural life. Participate in cultural activities, folk performances, and village festivals to
            get a taste of authentic Maharashtrian culture"
          />
          <AgriCard
            title="Educational Farms"
            desc="Visit educational farms and agricultural research centers in Junnar that offer
            agritourism programs for visitors. Learn about innovative farming techniques, crop cultivation,
            and animal husbandry practices through interactive workshops and demonstrations. Stay
            overnight in guest accommodations and experience farm life firsthand.
            "
          />
          <AgriCard
            title="Organic Retreats"
            desc="Escape the hustle and bustle of city life and rejuvenate your senses at organic
            retreats and wellness centers in Junnar. Stay in eco-friendly accommodations surrounded by
            organic farms and gardens, and participate in yoga sessions, meditation retreats, and holistic
            wellness programs focused on sustainability and well-being."
          />
          <AgriCard
            title="Homestays"
            desc=" Opt for a homestay with a local family in Junnar and experience authentic
            Maharashtrian hospitality. Learn about traditional cooking techniques, join the family for meals,
            and engage in cultural exchanges with your hosts. Explore the surrounding villages and
            countryside on guided tours led by your hosts."
          />
        </div>
      </div>
    </>
  );
};

export default AgriStaysPage;

function AgriCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}): JSX.Element {
  return (
    <>
      <div className="p-3 text-center md:w-1/3">
        <div className="rounded-md border p-5 transition-all duration-500 hover:scale-105 hover:border-primary">
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      </div>
    </>
  );
}
