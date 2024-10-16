"use client"
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation"; // Correct import for Next.js 13+
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Hearts } from "react-loader-spinner";

interface GalleryItem {
  src: string;
  alt: string;
  title: string;
  description?: string;
}


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
    description: "One of our wonderful volunteers using her gifts to bless others.",
  },

];

export default function Gallery() {

  const [loading, setLoading] = useState(true)
  const searchParams = useSearchParams();
  const imageIndex = searchParams.get("imageIndex"); 

  
  const startIndex = imageIndex ? parseInt(imageIndex) : 0;

  useEffect(() => {
 const timer =   setTimeout(() => {
      setLoading(false)
    }, 3000);
    

    return ()=> clearTimeout(timer)
  }, [])
  


  return (
<>
    {loading ? (
        <div className="flex justify-center items-center h-60 w-full">
        {/* Fancy Loader */}
        
        <Hearts
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="hearts-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
        
      </div>
      ) : (
        <section className="container mx-auto py-10 px-4">
        <h3 className="text-center text-2xl font-bold mb-8">Gallery</h3>
        <Swiper
          className="rounded-xl w-full max-w-4xl mx-auto"
          spaceBetween={30}
          pagination={{ clickable: true }}
          navigation
          loop
          initialSlide={startIndex} // Start with the clicked image
          modules={[Pagination, Navigation]}
        >
          {galleryItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full">
                {/* <Image
                 src={item.src}
                 alt={item.alt}
                 className="w-full object-cover"
                 style={{ height: "70vh" }}
                /> */}

                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full object-cover"
                  style={{ height: "70vh" }}
                />
              </div>
              <h3 className="text-center mt-4">{item.title}</h3>
              <p className="text-center text-gray-600">{item.description}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      )
    }
    
    </>
  );
}
