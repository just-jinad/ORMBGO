"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
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
    title: "Where We Go From Here.",
  },
  {
    count: "4.",
    title: "Tell us about your grandparents.",
  },
];

export function OurStats() {
  return (
    <section className="container mx-auto px-8 py-44">
      {/* Header section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold leading-tight text-orange-500">
          STORIES (coming soon)
        </h1>
        <p className="mt-3 text-gray-500">
          Here we will be sharing heartwarming stories and inspiring experiences
          from our community. These stories will highlight the resilience, courage,
          and strength of those we serve, as well as the profound impact that 
          compassionate outreach can have on their lives.
        </p>
      </div>

      {/* Swiper section with background image */}
      <div className="relative">
        {/* Background image for the Swiper */}
        <Swiper
          className="rounded-xl w-full max-w-4xl bg-cover bg-center"
          style={{ backgroundImage: "url('https://i.pinimg.com/originals/12/a3/a4/12a3a43cf1220bdc4d975baf73643db3.jpg')", height:'40vh', backgroundRepeat:'no-repeat', backgroundSize:'cover' }} // Replace with your image path
          spaceBetween={30}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          navigation
          loop
          modules={[Autoplay, Pagination, Navigation]}
        >
          {STATS.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center mt-20 items-center ">
                <StatsCard count={item.count} title={item.title} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Optional Overlay */}
        <div className="absolute inset-0 bg-black opacity-40 rounded-xl"></div>
      </div>
    </section>
  );
}

export default OurStats;
