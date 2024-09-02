"use client";

import React, { useEffect, useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  const typingSoundRef = useRef<HTMLAudioElement>(null);
  const hiddenButtonRef = useRef<HTMLButtonElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const fullText = [
    "Bringing love and joy to our Senior Citizens, our Local Community, and Beyond, Making Life Worth Living"
  ];

  useEffect(() => {
    const typingSound = typingSoundRef.current;
    const hiddenButton = hiddenButtonRef.current;

    if (typingSound && hiddenButton) {
      const playAudio = () => {
        hiddenButton.click();
      };

      if (document.readyState === "complete") {
        playAudio();
      } else {
        window.addEventListener("load", playAudio);
      }

      return () => {
        window.removeEventListener("load", playAudio);
      };
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

  const handlePlayAudio = () => {
    const typingSound = typingSoundRef.current;
    if (typingSound) {
      typingSound.currentTime = 0; 
      typingSound.play();
  
      const stopTime = 1;  
  
      typingSound.addEventListener("timeupdate", () => {
        if (typingSound.currentTime >= stopTime) {
          typingSound.pause();
          typingSound.currentTime = 0; 
        }
      });
    }
  };
  

  return (
    <div className="relative w-full bg-[url('https://static.wixstatic.com/media/8c4554_6f448836e66a4f64961eea6a50536aa4~mv2.jpg/v1/fill/w_980,h_594,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8c4554_6f448836e66a4f64961eea6a50536aa4~mv2.jpg')] bg-cover bg-center min-h-screen flex items-center justify-center ">
      <div className="absolute inset-0 bg-gray-900/50" />
      <div className="relative text-center text-white p-4 max-w-4xl mx-auto">
        <h4 className="text-xl md:text-xl lg:text-2xl mb-2" >
          <p style={{fontFamily: "inherit"}} className="font-bold">ONE ROOT MANY BRANCHES GLOBAL OUTREACH</p>
          <Typewriter
            words={fullText}
            cursor
            cursorStyle="_"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={2000}
            onType={handleType}
           
          />
        </h4>
      </div>
      <audio ref={typingSoundRef} src="/keyboard-typingtwo.mp3" />
      <button ref={hiddenButtonRef} onClick={handlePlayAudio} style={{ display: 'none' }} />
    </div>
  );
}

export default Hero;
