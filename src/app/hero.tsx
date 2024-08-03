"use client";

import React, { useEffect, useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  const typingSoundRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const fullText = [
    "ONE ROOT MANY BRANCHES GLOBAL OUTREACH, inc",
    "Bringing love and joy to our Senior Citizens, our Local Community, and Beyond",
    "Making Life Worth Living"
  ];

  useEffect(() => {
    const typingSound = typingSoundRef.current;

    if (typingSound) {
      if (isPlaying) {
        typingSound.play().catch((error) => {
          // Handle the play() error which occurs due to autoplay restrictions
          console.error("Audio play failed:", error);
        });
      } else {
        typingSound.pause();
        typingSound.currentTime = 0;
      }
    }
  }, []);

  const handleType = () => {
    const typingSound = typingSoundRef.current;
    if (typingSound && typingSound.paused) {
      typingSound.play();
      setIsPlaying(false);
    }
  };

  const handleDone = () => {
    const typingSound = typingSoundRef.current;
    if (typingSound) {
      typingSound.pause();
      typingSound.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <div className="relative w-full bg-[url('https://static.wixstatic.com/media/8c4554_6f448836e66a4f64961eea6a50536aa4~mv2.jpg/v1/fill/w_980,h_594,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8c4554_6f448836e66a4f64961eea6a50536aa4~mv2.jpg')] bg-cover bg-center min-h-screen flex items-center justify-center ">
      <div className="absolute inset-0 bg-gray-900/50" />
      <div className="relative text-center text-white p-4 max-w-4xl mx-auto">
        <h4 className="text-xl md:text-2xl lg:text-3xl mb-2" style={{ fontFamily: "monospace" }}>
          <Typewriter
            words={fullText}
            // loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={2000}
            onType={handleType}
            onLoopDone={handleDone}
          />
        </h4>
      </div>
      <audio ref={typingSoundRef} src="/typing-sound.mp3.mp3" />
    </div>
  );
}

export default Hero;
