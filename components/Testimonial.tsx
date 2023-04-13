import { TestimonialData } from "@/lib/constant";
import React from "react";

const Testimonial = ({ author, text }: TestimonialData) => {
  return (
    <figure className="my-12">
      <blockquote className="relative rounded-3xl bg-teal-500 py-12 pl-14 pr-8 dark:bg-black">
        <p
          className="mt-2 text-left text-2xl text-white before:absolute before:left-0 before:top-0 before:translate-x-2 before:translate-y-2  before:font-serif before:text-9xl before:text-white before:opacity-25 before:content-['\201C']
    after:absolute after:-bottom-20 after:right-0 after:-translate-x-2 after:-translate-y-2  after:font-serif after:text-9xl after:text-white after:opacity-25 after:content-['\201D']
    dark:text-slate-400 sm:text-3xl "
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </blockquote>
      <figcaption
        className="mt-2 text-right italic text-slate-500 dark:text-slate-400 sm:text-2xl"
        dangerouslySetInnerHTML={{ __html: `&#8212;${author}` }}
      />
    </figure>
  );
};

export default Testimonial;
