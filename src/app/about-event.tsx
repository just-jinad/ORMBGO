"use client";

import { Typography, Carousel, Button } from "@material-tailwind/react";
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
    title: "The Beauty of Nature",
    description: "It is not so much for its beauty that the forest makes a claim upon men's hearts, as for that subtle something, that quality of air that emanation from old trees, that so wonderfully changes and renews a weary spirit."
  },
  {
    src: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    alt: "Image 3",
    title: "The Beauty of Nature",
    description: "It is not so much for its beauty that the forest makes a claim upon men's hearts, as for that subtle something, that quality of air that emanation from old trees, that so wonderfully changes and renews a weary spirit."
  },
  
];

export function AboutEvent() {
  return (
    <section className="container mx-auto flex flex-col items-center px-4 py-10">
      <Typography variant="h6" className="text-center mb-2" color="orange">
        MAKING LIFE WORTH LIVING
      </Typography>
      <Typography variant="h3" className="text-center" color="blue-gray">
        Why Attend?
      </Typography>
      <Typography
        variant="lead"
        className="mt-2 lg:max-w-4xl mb-8 w-full text-center font-normal !text-gray-500"
      >
        Welcome to the AI Conference 2023, where the future unfolds! Whether
        you&apos;re a seasoned AI professional, a curious newcomer, or a
        business leader looking to harness the power of AI, this conference is
        designed to inspire, educate, and connect.
      </Typography>

      <Carousel className="rounded-xl w-full max-w-4xl">
        {carouselItems.map((item, index) => (
          <div key={index} className="relative w-full">
            <img
              src={item.src}
              alt={item.alt}
              className="w-full object-cover"
              style={{ height: '60vh' }} // Adjust the height as needed
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
              <div className="w-3/4 md:w-2/4 text-center p-4">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-2xl md:text-3xl lg:text-4xl"
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80"
                >
                  {item.description}
                </Typography>
                <div className="flex justify-center gap-2">
                  <Button size="lg" color="white">
                    Explore
                  </Button>
                  <Button size="lg" color="white" variant="text">
                    Gallery
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}

export default AboutEvent;
