"use client";

import React from "react";

function Hero() {
  return (
    <div className="relative w-full bg-[url('https://static.wixstatic.com/media/8c4554_6f448836e66a4f64961eea6a50536aa4~mv2.jpg/v1/fill/w_980,h_594,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8c4554_6f448836e66a4f64961eea6a50536aa4~mv2.jpg')] bg-cover bg-center min-h-screen flex items-center justify-center ">
      <div className="absolute inset-0 bg-gray-900/50" />
      <div className="relative text-center text-white p-4 max-w-4xl mx-auto">
        <h4 className="text-xl md:text-2xl lg:text-3xl mb-2 font-semibold">
          ONE ROOT MANY BRANCHES GLOBAL OUTREACH, inc
        </h4>
        <h4 className="text-lg md:text-xl lg:text-2xl mb-4 font-medium">
          Bringing love and joy to our Senior Citizens, our Local Community, and Beyond
        </h4>
        <p className="text-base md:text-lg lg:text-xl mb-8 font-normal">
          Making Life Worth Living
        </p>
        <div className="flex justify-center">
          <button className="px-6 py-3 bg-white text-gray-900 font-medium rounded shadow-md hover:bg-gray-200">
            Donate
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
