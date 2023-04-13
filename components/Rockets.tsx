import { ROCKETS_PLANS } from "@/lib/constant";
import Image from "next/image";
import React from "react";
import RocketCard from "./RocketCard";

const Rockets = () => {
  return (
    <section
      id="rockets"
      className="widescreen:section-min-height tallscreen:section-min-height my-12 scroll-mt-20 p-6"
    >
      <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
        Our Rokcets
      </h2>
      <ul className="mx-auto my-12 flex flex-col items-center gap-8 sm:flex-row">
        {ROCKETS_PLANS.map((plan) => (
          <RocketCard
            key={plan.title}
            imgURL={plan.imgURL}
            price={plan.price}
            priceDescription={plan.priceDescription}
            title={plan.title}
          />
        ))}
      </ul>
    </section>
  );
};

export default Rockets;
