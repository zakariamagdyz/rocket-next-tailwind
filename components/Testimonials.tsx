import { TESTIMONIALS } from "@/lib/constant";
import React from "react";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="widescreen:section-min-height tallscreen:section-min-height my-12 p-6"
    >
      <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
        Testimonials
      </h2>
      {TESTIMONIALS.map((testimonial) => (
        <Testimonial
          key={testimonial.author}
          author={testimonial.author}
          text={testimonial.text}
        />
      ))}
    </section>
  );
};

export default Testimonials;
