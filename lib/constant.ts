export type RocketPlan = {
  imgURL: string;
  priceDescription: string;
  title: string;
  price: string;
};

export type TestimonialData = {
  text: string;
  author: string;
};

export const ROCKETS_PLANS: RocketPlan[] = [
  {
    imgURL: "/img/rocketman.png",
    price: "Affordable Exploration",
    priceDescription: "$",
    title: "Explorer",
  },
  {
    imgURL: "/img/rocketride.png",
    price: "Best selling Rocket!",
    priceDescription: "$$",

    title: "Adventure",
  },
  {
    imgURL: "/img/rocketlaunch.png",
    price: "Luxury starship",
    priceDescription: "$$$",

    title: "Infinity",
  },
];

export const TESTIMONIALS: TestimonialData[] = [
  {
    text: `Acme
has always been there
for me. Their Explorer rocket arrived in a wooden crate as expected.
Life-long customer! A++ shopping experience.`,
    author: "Wile E. Coyote, Genius",
  },
  {
    text: `The Acme Adventurer Rocket has thwarted my Illudium Q-36 Explosive Space Modulator on several
    occassions. <span class="italic">This makes me very, very angry!</span> Nevertheless, K-9
    and I have awarded Acme the
    Martian contract for space exploration rockets based on Acme's quality and sturdy designs.`,
    author: "Marvin The Martian &amp; K-9",
  },
  {
    text: `I knew I not only wanted &#8212; <span class="italic">I needed</span> &#8212; Acme's Infinity
    Rocket for my mission in space. Acme delivered in one day! Nothing says <q class="italic">Take
        me
        to your leader</q> like Acme's Infinity Rocket! 💯`,
    author: "Buzz Lightyear",
  },
];
