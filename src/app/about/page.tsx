import { Navbar } from "@/components";
import FooterII from "@/components/footerII";
import React from "react";

const page = () => {
  return (
    <>
    <Navbar/>
      <div className="bg-gray-400 py-12">
        <section className="text-center py-16">
          <h1 className="text-3xl font-bold mb-4">About Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Our Mission</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {/* <!-- Images for mission (You can use images here) --> */}
              <div className="bg-gray-400 h-40"></div>
              <div className="bg-gray-400 h-40"></div>
              <div className="bg-gray-400 h-40 col-span-2"></div>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-16">
          <h2 className="text-2xl font-bold text-center mb-8">
            Meet Our Leaders
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>

          <div className="max-w-6xl mx-auto grid grid-cols-4 gap-8 text-center">
            {/* <!-- Leader 1 --> */}
            <div>
              <div className="bg-gray-300 rounded-full w-24 h-24 mx-auto mb-4"></div>
              <h3 className="font-bold">Jonathan Warner</h3>
              <p className="text-gray-500">CEO</p>
            </div>

            <div>
              <div className="bg-gray-300 rounded-full w-24 h-24 mx-auto mb-4"></div>
              <h3 className="font-bold">Tammy Johnson</h3>
              <p className="text-gray-500">CEO</p>
            </div>

            <div>
              <div className="bg-gray-300 rounded-full w-24 h-24 mx-auto mb-4"></div>
              <h3 className="font-bold">David Hackett</h3>
              <p className="text-gray-500">CEO</p>
            </div>

            <div>
              <div className="bg-gray-300 rounded-full w-24 h-24 mx-auto mb-4"></div>
              <h3 className="font-bold">Pamela Wagner</h3>
              <p className="text-gray-500">CEO</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-gray-800 text-white py-2 px-6 rounded-lg">
              View the team
            </button>
          </div>
        </section>
        <FooterII/>
      </div>
    </>
  );
};

export default page;
