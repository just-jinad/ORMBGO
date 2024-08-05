import { Footer, Navbar } from "@/components";
import React from "react";

const Contact = () => {
  return (
    <>
      <Navbar />
      <header
        className="bg-cover bg-center h-64 relative"
        style={{
          backgroundImage:
            "url('https://static.wixstatic.com/media/e0c18a_5949decb5c7b417687f66e63c9efebe0~mv2.png/v1/fill/w_316,h_316,q_90/e0c18a_5949decb5c7b417687f66e63c9efebe0~mv2.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-white text-4xl font-bold z-10">Contact Us</h1>
          <p className="text-white text-xl z-10 mt-2 text-center">
            Contact us if you would like more information about our organization, would like to be involved, or make a donation.
          </p>
        </div>
      </header>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
              <div className="bg-white p-8 shadow-lg rounded-lg">
                <h2 className="text-2xl text-green-600 font-semibold mb-6">Get In Touch</h2>
                <form>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-gray-700">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="bg-white p-8 shadow-lg rounded-lg">
                <h2 className="text-2xl text-green-600 font-semibold mb-6">Contact Details</h2>
                <p className="mb-4">
                  Fill up the form and our team will get back to you within 24
                  hours.
                </p>
                <ul className="mb-4">
                  <li className="mb-2">
                    <strong>Call Us:</strong> +561-668-3925
                  </li>
                  <li className="mb-2">
                    <strong>Email Us:</strong> ormbgo@gmail.com
                  </li>
                  <li className="mb-2">
                    <strong>Website:</strong> www.ormbgo.org
                  </li>
                  <li className="mb-2">
                    <strong>Address:</strong> Boca Raton, FL, USA
                  </li>
                </ul>
                <h3 className="text-xl font-semibold mb-4">Follow Us On</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-500 hover:text-gray-900">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-gray-900">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-gray-900">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-gray-900">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3568.8850854910985!2d-80.12931388518116!3d26.368306183361137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8d0b35e6c6789%3A0x76b1be4b5dd9a7d7!2sBoca%20Raton%2C%20FL%2C%20USA!5e0!3m2!1sen!2sus!4v1691231328468!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
