"use client";

import StatsCard from "@/components/stats-card";

const STATS = [
  {
    count: "1.",
    title: "How This All Began.",
  },
  {
    count: "2.",
    title: "Lives We Have Touched.",
  },
  {
    count: "3.",
    title: " Where We Go From Here.",
  },
  { 
    count: "4.",
    title: "Tell us about your grandparents.",
  },
];

export function OurStats() {
  return (
    <section className="container mx-auto grid gap-10 px-8 py-44 lg:grid-cols-1 lg:gap-20 xl:grid-cols-2 xl:place-items-center">
      <div>
        <h1 className="text-4xl font-bold leading-tight text-orange-500 lg:w-3/4">
        STORIES (coming soon)
        </h1>
        <p className="mt-3 w-full text-gray-500 lg:w-9/12">
        Here we will be sharing heartwarming stories and inspiring experiences from our community. These stories will highlight the resilience, courage, and strength of those we serve, as well as the profound impact that compassionate outreach can have on their lives. 
        </p>
      </div>
      <div>
        <div className="grid  grid-cols-2 gap-8 gap-x-28">
          {STATS.map((props, key) => (
            <StatsCard  key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurStats;
