"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Hearts } from "react-loader-spinner"; // Import fancy loader

// Interface for the gallery items
interface GalleryItem {
  src: string;
  alt: string;
  title: string;
  description?: string;
}

// Array of image data with explicit typing
const galleryItems: GalleryItem[] = [
  {
    src: "https://static.wixstatic.com/media/e0c18a_5949decb5c7b417687f66e63c9efebe0~mv2.png/v1/fit/w_1080,h_1505,q_90/e0c18a_5949decb5c7b417687f66e63c9efebe0~mv2.png",
    alt: "Image 1",
    title: "Nursing Home Interactive Program. 2019.",
    description: "",
  },
  {
    src: "https://static.wixstatic.com/media/e0c18a_e61ddc1381874e139b3b7a8e05306535~mv2.jpg/v1/fit/w_804,h_1567,q_90/e0c18a_e61ddc1381874e139b3b7a8e05306535~mv2.webp",
    alt: "Image 2",
    title: "Lunch time!",
    description: "Pop-Up Lunch! ORMBGO community event.",
  },
  {
    src: "https://static.wixstatic.com/media/e0c18a_8eb65299f050454c8cf84f596527aef5~mv2.jpeg/v1/fill/w_217,h_163,q_90/e0c18a_8eb65299f050454c8cf84f596527aef5~mv2.webp",
    alt: "Image 3",
    title: "Talent",
    description:
      "One of our wonderful volunteers using her gifts to bless others.",
  },
  // Add more images here
];

export function AboutEvent() {
  const router = useRouter();
  const [loading, setLoading] = useState(false); // State for managing the loader

  // Handle navigation when an image or gallery button is clicked
  const handleGalleryNavigation = (index?: number) => {
    setLoading(true); // Show loader

    setTimeout(() => {
      if (typeof index === "number") {
        router.push(`/gallery?imageIndex=${index}`);
      } else {
        router.push("/gallery");
      }
    }, 2000); // Simulate 2 seconds of loading time
  };

  return (
    <>
      <section className="container mx-auto flex flex-col items-center px-4 py-10">
        <h6
          className="text-center mb-2 text-orange-600 font-bold text-3xl"
          style={{ fontFamily: "inherit" }}
        >
          MAKING LIFE WORTH LIVING
        </h6>
        <h3 className="text-center text-blue-gray-900 text-xl">Showing Care</h3>
        <p className="mt-2 lg:max-w-4xl mb-8 w-full text-center font-normal text-gray-500">
          Whether you’re a dedicated volunteer, a generous donor, or someone
          looking to make a difference, our organization is committed to raising
          awareness and providing support to individuals isolated from their
          families. Join us in our mission to bring joy, connection, and care to
          those in nursing homes, rehab facilities, and isolated at home.
        </p>
        <Swiper
          className="rounded-xl w-full max-w-4xl"
          spaceBetween={30}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          navigation
          loop
          modules={[Autoplay, Pagination, Navigation]}
        >
          {galleryItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative w-full cursor-pointer"
                onClick={() => handleGalleryNavigation(index)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full object-cover"
                  style={{ height: "60vh" }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="w-full flex justify-center items-center">
          <div className="w-3/4 md:w-2/4 text-center p-4">
            <div className="flex justify-center gap-2">
              <button
                className="button19 px-6 py-2 bg-white text-green-900 rounded-lg text-lg"
                onClick={() => handleGalleryNavigation()}
              >
                Gallery
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutEvent;
