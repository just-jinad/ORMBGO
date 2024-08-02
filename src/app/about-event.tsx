"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from 'swiper/modules'; // Correct import for modules
import AboutCard from "@/components/about-card";

// Array of image data
const carouselItems = [
  {
    src: "https://static.wixstatic.com/media/e0c18a_5949decb5c7b417687f66e63c9efebe0~mv2.png/v1/fit/w_1080,h_1505,q_90/e0c18a_5949decb5c7b417687f66e63c9efebe0~mv2.png",
    alt: "Image 1",
    title: "Nursing Home Interactive Program. 2019.",
    description: ""
  },
  {
    src: "https://static.wixstatic.com/media/e0c18a_e61ddc1381874e139b3b7a8e05306535~mv2.jpg/v1/fit/w_804,h_1567,q_90/e0c18a_e61ddc1381874e139b3b7a8e05306535~mv2.webp",
    alt: "Image 2",
    title: "Lunch time!",
    description: "Pop-Up Lunch! ORMBGO community event."
  },
  {
    src: "https://static.wixstatic.com/media/e0c18a_8eb65299f050454c8cf84f596527aef5~mv2.jpeg/v1/fill/w_217,h_163,q_90/e0c18a_8eb65299f050454c8cf84f596527aef5~mv2.webp",
    alt: "Image 3",
    title: "Talent",
    description: "One of our wonderful volunteers using her gifts to bless others."
  },
  // Add more images here
];

export function AboutEvent() {
  return (
    <section className="container mx-auto flex flex-col items-center px-4 py-10">
    <h6 className="text-center mb-2 text-orange-600">MAKING LIFE WORTH LIVING</h6>
<h3 className="text-center text-blue-gray-900">Showing Care</h3>
<p className="mt-2 lg:max-w-4xl mb-8 w-full text-center font-normal text-gray-500" >
   Whether you’re a dedicated volunteer, a generous donor, or someone looking to make a difference, our organization is committed to raising awareness and providing support to individuals isolated from their families. Join us in our mission to bring joy, connection, and care to those in nursing homes, rehab facilities, and isolated at home.
</p>


      <Swiper
        className="rounded-xl w-full max-w-4xl "
        spaceBetween={30}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation
        loop
        modules={[Autoplay, Pagination, Navigation]} 
      >
        {carouselItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full object-cover"
                style={{ height: "60vh" }} 
              />
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
                <div className="w-3/4 md:w-2/4 text-center p-4">
                  <h1 className="mb-4 text-2xl md:text-3xl lg:text-4xl text-white">
                    {item.title}
                  </h1>
                  <p className="mb-12 text-white opacity-80">
                    {item.description}
                  </p>
                  <div className="flex justify-center gap-2">
                    <button className="px-6 py-2 bg-white text-black rounded-lg text-lg">
                      Explore
                    </button>
                    <button className="px-6 py-2 bg-transparent text-white border border-white rounded-lg text-lg">
                      Gallery
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      
    </section>
  );
}

export default AboutEvent;
