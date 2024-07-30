"use client";

import { IconButton, Button, Typography } from "@material-tailwind/react";
import { PlayIcon } from "@heroicons/react/24/solid";

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('https://static.wixstatic.com/media/8c4554_6f448836e66a4f64961eea6a50536aa4~mv2.jpg/v1/fill/w_980,h_594,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8c4554_6f448836e66a4f64961eea6a50536aa4~mv2.jpg')] bg-cover bg-no-repeat">
    <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
    <div className="grid min-h-screen px-8">
      <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
        <Typography variant="h4" color="white" className="mb-2">
        ONE ROOT MANY BRANCHES  GLOBAL OUTREACH, inc
        </Typography>
        <Typography variant="h4" color="white" className="lg:max-w-3xl">
        Bringing love and joy to our Senior Citizens,
        our Local Community, and Beyond
        </Typography>
        <Typography
          variant="lead"
          color="white"
          className="mt-1 mb-12 w-full md:max-w-full lg:max-w-2xl"
        >
          Making Life Worth Living
        </Typography>
        <div className="flex items-center gap-4">
          <Button variant="gradient" color="white">
            Donate
          </Button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Hero;
