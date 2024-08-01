"use client";

import React, { useState } from "react";
import EventContentCard from "@/components/event-content-card";

const EVENT_CONTENT = [
  {
    title: "Dancing with residents at a nursing home. 2019.",
    des: "We bring joy, love and gifts to the residents of nursing homes and rehab facilities every week.",
   
    panel: "NURSING HOMES",
    img: "https://static.wixstatic.com/media/e0c18a_d14d1a94618641ccad78e1a1031d2b6a~mv2.jpeg/v1/fill/w_438,h_329,q_90/e0c18a_d14d1a94618641ccad78e1a1031d2b6a~mv2.webp",
  },
  {
    title: "Visiting the elderly during 2020",
    des: "We sponsor special events for the community several times per year to raise funds for our organization and bring people together",
   
    panel: "COMMUNITY EVENTS",
    img: "https://static.wixstatic.com/media/e0c18a_8f8c1141527147e9bfacefc109e22471~mv2.jpeg/v1/fill/w_188,h_250,q_90/e0c18a_8f8c1141527147e9bfacefc109e22471~mv2.webp",
  },
  {
    title: "Gifts and goodies for nursing home residents! 2017",
    des: "We love to meet new people and spend time with old friends at our monthly birthday gatherings!",
    
    panel: "Monthly Birthday Gatherings",
    img: "https://static.wixstatic.com/media/e0c18a_c43f1ec76fe84644b2de1b41b8c27258~mv2.jpeg/v1/fill/w_388,h_292,q_90/e0c18a_c43f1ec76fe84644b2de1b41b8c27258~mv2.webp",
  },
];

export function EventContent() {
  const [activeTab, setActiveTab] = useState("Day1");

  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="w-full flex mb-8 flex-col items-center">
        <div className="flex h-12 w-72 md:w-96 justify-around">
          <button
            onClick={() => setActiveTab("Day1")}
            className={`font-medium py-2 px-4 ${
              activeTab === "Day1" ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-500"
            }`}
          >
            Day 1
          </button>
          <button
            onClick={() => setActiveTab("Day2")}
            className={`font-medium py-2 px-4 ${
              activeTab === "Day2" ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-500"
            }`}
          >
            Day 2
          </button>
          <button
            onClick={() => setActiveTab("Day3")}
            className={`font-medium py-2 px-4 ${
              activeTab === "Day3" ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-500"
            }`}
          >
            Day 3
          </button>
        </div>
      </div>
      <div className="mx-auto container">
        {EVENT_CONTENT.map((props, idx) => (
          <EventContentCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default EventContent;
