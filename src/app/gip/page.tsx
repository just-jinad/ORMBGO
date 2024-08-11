import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Navbar } from "@/components";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Navbar />
      {/* Hero Section */}
      <div
        className="relative pt-16 pb-32 flex content-center items-center justify-center"
        style={{ minHeight: "75vh" }}
      >
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/564x/39/9f/71/399f7154f4ad6d618ed4aaa0820ff988.jpg')",
          }}
        >
          <span className="w-full h-full absolute opacity-75 bg-black"></span>
        </div>
        <div className="container relative mx-auto">
          <div className="flex flex-wrap items-center justify-center">
            <div className="w-full lg:w-6/12 px-4 text-center">
              <h1 className="text-white text-center font-semibold text-5xl">
                Grandparents in Action.
              </h1>
              <p className="mt-4 text-lg text-center text-gray-300">
                Making Life worth Living.
              </p>
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 w-full overflow-hidden"
          style={{ height: "70px" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>

      {/* Features Section */}
      <section className="pb-20 bg-gray-300 -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <i className="fas fa-hands-helping"></i>
                  </div>
                  <h6 className="text-xl font-semibold">
                    Honoring Grandparent Wisdom
                  </h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    Grandparents are one of God’s most treasured gifts. Still,
                    most of the time, their value is never fully recognized in
                    our communities. One Root, Many Branches Global Outreach
                    Inc. seeks to utilize the value and wisdom of this
                    underutilized group and create opportunities where they can
                    positively change the lives of others.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                    <i className="fas fa-heart"></i>
                  </div>
                  <h6 className="text-xl font-semibold">
                    Supportive Mentorship
                  </h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    GPIA will grow into the fullness of our divine nature. Our
                    mission is to make a difference in the lives of children who
                    do not have a grandparent or mentor and to be a supportive
                    force in the child’s life. GPIA will implement change
                    through our passion and wisdom.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                    <i className="fas fa-seedling"></i>
                  </div>
                  <h6 className="text-xl font-semibold">
                    Fostering Joyful Connections
                  </h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    Through our actions and life experiences, we will radiate
                    love and goodwill while building good future citizens and a
                    brighter future for all. ORMB GO will place a memorable,
                    lasting joy in the hearts of our grandparents as they
                    participate in this exciting program.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="flex flex-col lg:flex-row items-start justify-center gap-6 mt-8 text-black rounded-lg p-6 bg-white">
              <div className="w-full lg:w-1/2 text-left">
                {/* <h5 className="text-xl md:text-2xl font-semibold mb-4">WHO WE ARE</h5> */}
                <p
                  className="mb-4 text-sm md:text-base lg:text-lg"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  “Grandparents in Action” are those who embrace the needs of
                  others and seek to make a positive impact throughout our
                  communities. The idea of grandparents in action as a group
                  emerged as I watched the many grandmothers become totally
                  involved in the wellbeing of their grandchildren. I am active
                  with my grandchildren, from school to post-school,
                  extracurricular activities, doctor visits, and trips to the
                  park.
                </p>
                {/* <h5 className="text-xl md:text-2xl font-semibold mb-2">OUR MISSION:</h5> */}
                <p
                  className="mb-4 text-sm md:text-base lg:text-lg"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  My active involvement has made me aware of how other
                  grandparents are involved to the same extent in various ways.
                  This touched and moved my heart, and I realized that our
                  grandparents are tremendously endowed for the noble cause of
                  bettering the lives of our families and youth in our
                  community. GPIA will grow into the fullness of our divine
                  nature. Our mission is to make a difference in the lives of
                  children who do not have a grandparent or mentor and to be a
                  supportive force in the child’s life. GPIA will implement
                  change through our passion and wisdom.
                </p>
                {/* <h5 className="text-xl md:text-2xl font-semibold mb-2">OUR VISION:</h5> */}
                <p
                  className="mb-4 text-sm md:text-base lg:text-lg"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  This will help awaken our community, which comprises ordinary
                  people who are in action and receiving extraordinary results.
                  Our messages to our grandchildren set a positive, powerful
                  tone for their lives. We are and will impact those that we
                  touch. Our distance has no barrier. To participate in GPIA,
                  you simply need to be grandparents who keep your standards
                  high and will create real value. Our motto is “ Life Worth
                  Living.”
                </p>
              </div>
              <div className="w-full lg:w-1/2 flex flex-col items-center">
                <Image
                  width={200}
                  height={200}
                  src="https://static.wixstatic.com/media/e0c18a_c3c13c6c7a884880bc8ff3e16a7441b1~mv2.jpg/v1/crop/x_0,y_0,w_333,h_367/fill/w_249,h_275,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/eula-pennerman-founder-ormbgo_edited.jpg"
                  alt="Rev. Eula"
                  className="rounded-full mb-4 lg:mb-0"
                />
                <h5 className="text-xl md:text-2xl font-semibold mb-2">
                  Rev. Eulalee Pennerman.
                </h5>
                <p className="italic mb-4 text-sm md:text-base lg:text-lg">
                  Founder, ORMBGO
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gray-300 pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">Let's keep in touch!</h4>
              <h5 className="text-lg mt-0 mb-2 text-black">
                Find us on any of these platforms
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <button
                  className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-twitter"></i>
                </button>
                <button
                  className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-facebook-square"></i>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <Link
                        className=" bg-green-600 rounded-xl  p-2 text-white "
                        href={"/"}
                      >
                        Donate
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <ul>
                    <li>
                      <Link href={"/contact"}>Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-400" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-600 font-semibold py-1">
                <p className="text-center font-normal text-black">
                  Copyright © 2024 ORMBGO (One Root Many Branches Global
                  Outreach, Inc.) | All Rights Reserved.
                </p>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
