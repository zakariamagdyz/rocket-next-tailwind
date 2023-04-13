import { RocketPlan } from "@/lib/constant";
import Image from "next/image";
import React, { FC } from "react";

type Props = RocketPlan;
const RocketCard: FC<Props> = ({ imgURL, price, priceDescription, title }) => {
  return (
    <li
      className="flex w-2/3 flex-col items-center rounded-3xl border border-solid
     border-slate-900 bg-white px-2 py-6 shadow-xl dark:border-gray-100 dark:bg-black sm:w-5/6"
    >
      <Image
        src={imgURL}
        alt="Explorer"
        width={400}
        height={400}
        className="mb-6 w-1/2"
      />
      <h3 className="text-center text-3xl text-slate-900 dark:text-white">
        {title}
      </h3>
      <p className="mt-2 hidden text-center text-3xl text-slate-500 dark:text-slate-400 sm:block">
        {priceDescription}
      </p>
      <p className="mt-2 text-center text-3xl text-slate-500 dark:text-slate-400 sm:hidden">
        {price}
      </p>
    </li>
  );
};

export default RocketCard;
