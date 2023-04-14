import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="widescreen:section-min-height tallscreen:section-min-height my-12 scroll-mt-16 p-6"
    >
      <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
        Contact
      </h2>
      <form
        action=""
        className="mx-auto flex max-w-4xl flex-col items-start gap-4 text-2xl text-slate-900 sm:text-3xl "
      >
        <label htmlFor="subject" className="text-white dark:text-black">
          Subject:
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          minLength={3}
          maxLength={60}
          placeholder="Your Subject"
          className="w-full rounded-xl border border-solid border-slate-900 p-3 text-2xl text-black dark:border-none sm:text-3xl"
        />
        <label htmlFor="message" className="text-white dark:text-black">
          Message:
        </label>
        <textarea
          name="message"
          id="message"
          cols={30}
          rows={10}
          placeholder="Your Message"
          required
          className="w-full rounded-xl border border-solid border-slate-900 p-3 text-2xl text-black dark:border-none sm:text-3xl"
        ></textarea>
        <button className="w-48 rounded-xl border border-solid border-slate-900 bg-teal-700 p-3 text-white hover:bg-teal-600 active:bg-teal-500 dark:border-none">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
