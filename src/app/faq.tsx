"use client";

import React, { useState } from "react";

const FAQS = [
  {
    title: "1. How do I register for the AI Conference 2023?",
    desc: "You can register for the AI Conference 2023 by visiting our registration page. Follow the simple steps to complete your registration and secure your spot at the conference.",
  },
  {
    title: "2. What are the registration fees, and what is included?",
    desc: "It really matters and then like it really doesn't matter. What matters is the people who are sparked by it. And the people who are like offended by it, it doesn't matter. Because it's about motivating the doers. Because I'm here to follow my dreams and inspire other people to follow their dreams, too. We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don't appreciate the moment until it's passed.",
  },
  {
    title: "3. Can I get a refund if I need to cancel my registration?",
    desc: "The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out. But the time is now to be okay to be the greatest you. Would you believe in what you believe in, if you were the only one who believed it? If everything I did failed - which it doesn't, it actually succeeds - just the fact that I'm willing to fail is an inspiration. People are so scared to lose that they don't even try. Like, one thing people can't say is that I'm not trying, and I'm not trying my hardest, and I'm not trying to do the best way I know how.",
  },
  {
    title: "4. Will there be on-site registration available?",
    desc: "I always felt like I could do anything. That's the main thing people are controlled by! Thoughts- their perception of themselves! They're slowed down by their perception of themselves. If you're taught you can't do anything, you won't do anything. I was taught I could do everything. If everything I did failed - which it doesn't, it actually succeeds - just the fact that I'm willing to fail is an inspiration. People are so scared to lose that they don't even try. Like, one thing people can't say is that I'm not trying, and I'm not trying my hardest, and I'm not trying to do the best way I know how.",
  },
  {
    title: "5. What is the dress code for the conference?",
    desc: "There's nothing I really wanted to do in life that I wasn't able to get good at. That's my skill. I'm not really specifically talented at anything except for the ability to learn. That's what I do. That's what I'm here for. Don't be afraid to be wrong because you can't learn anything from a compliment. I always felt like I could do anything. That's the main thing people are controlled by! Thoughts- their perception of themselves! They're slowed down by their perception of themselves. If you're taught you can't do anything, you won't do anything. I was taught I could do everything.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  const handleOpen = (value: number) => setOpen(open === value ? null : value);

  return (
    <>
      <section className="container mx-auto p-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* <!-- Sponsor a Senior --> */}

          <div className="flex flex-col items-center text-center p-4  rounded-md shadow-lg" data-aos="fade-up" data-aos-duration="1000">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mb-4 text-green-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              {/* <!-- Add your heart SVG icon code here --> */}
            </svg>
            <h3 className="font-bold text-xl mb-2">SPONSOR A SENIOR</h3>
            <p className="text-gray-600 mb-4">
              You can make someone's day by purchasing a goodie bag filled with
              small items guaranteed to bring a smile! $10
            </p>
            <button className="px-4 py-2 border border-gray-300 rounded-md text-black hover:bg-gray-100">
              CLICK HERE
            </button>
          </div>
          {/* <!-- Sponsor an Event --> */}
          <div className="flex flex-col items-center text-center p-4  rounded-md shadow-lg" data-aos="fade-up" data-aos-duration="1000">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mb-4 text-green-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              {/* <!-- Add your calendar check SVG icon code here --> */}
            </svg>
            <h3 className="font-bold text-xl mb-2">SPONSOR AN EVENT</h3>
            <p className="text-gray-600 mb-4">
              Be an event sponsor and help us bring people together!
            </p>
            <button className="px-4 py-2 border mt-12  border-gray-300 rounded-md text-black hover:bg-gray-100">
              CLICK HERE
            </button>
          </div>
          {/* <!-- Donate --> */}
          <div className="flex flex-col items-center text-center p-4  rounded-md shadow-lg" data-aos="fade-up" data-aos-duration="1000">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mb-4 text-green-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              {/* <!-- Add your piggy bank SVG icon code here --> */}
            </svg>
            <h3 className="font-bold text-xl mb-2">DONATE</h3>
            <p className="text-gray-600 mb-4">
              Your tax-deductible donations help us to keep growing and are very
              gratefully received.
            </p>
            <button className="px-4 py-2 mt-6 border border-gray-300 rounded-md text-black hover:bg-gray-100">
              DONATE
            </button>
          </div>
          {/* <!-- Volunteer --> */}
          <div className="flex flex-col items-center text-center p-4 rounded-md shadow-lg" data-aos="fade-up" data-aos-duration="1000">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mb-4 text-green-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              {/* <!-- Add your hand SVG icon code here --> */}
            </svg>
            <h3 className="font-bold text-xl mb-2">VOLUNTEER</h3>
            <p className="text-gray-600 mb-4">
              People need your smile, your talents, and your love!
            </p>
            <button className="px-4 py-2 mt-12 border border-gray-300 rounded-md text-black hover:bg-gray-100">
              JOIN US!
            </button>
          </div>
        </div>
      </section>

      <section className="py-8 px-8 lg:py-20">
  <div className="container mx-auto">
    <div className="text-center">
      <h1 className="text-3xl lg:text-4xl text-blue-gray-900 mb-4">
        Be a Volunteer
      </h1>
      <p className="mx-auto mb-24 lg:w-3/5 text-gray-500">
        You can also be part of us by volunteering and using your talent, gift and resources to bless lives
      </p>
    </div>

    <div className="mx-auto lg:max-w-screen-lg lg:px-20">
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          className="border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="First Name"
        />
        <input
          className="border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Last Name"
        />
        <input
          className="border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
          type="email"
          placeholder="Email"
        />
        <input
          className="border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
          type="tel"
          placeholder="Phone Number"
        />
        <textarea
          className="border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500 md:col-span-2"
          placeholder="Message"
        ></textarea>
        <button
          className="md:col-span-2 bg-green-500 text-white px-4 py-2 rounded-md font-bold hover:bg-green-900 transition duration-300"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</section>

    </>
  );
}

export default Faq;
