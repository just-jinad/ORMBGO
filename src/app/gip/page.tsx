import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Navbar } from '@/components';

export default function Home() {
  return (
    <main>
      <Navbar/>
    {/* Hero Section */}
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
      style={{ minHeight: "75vh" }}>
      <div className="absolute top-0 w-full h-full bg-center bg-cover"
        style={{
          backgroundImage: "url('https://i.pinimg.com/564x/39/9f/71/399f7154f4ad6d618ed4aaa0820ff988.jpg')"
        }}>
        <span className="w-full h-full absolute opacity-75 bg-black"></span>
      </div>
      <div className="container relative mx-auto">
        <div className="flex flex-wrap items-center justify-center">
          <div className="w-full lg:w-6/12 px-4 text-center">
            <h1 className="text-white font-semibold text-5xl">
              Your story starts with us.
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              This is a simple example of a Landing Page you can build
              using Tailwind Starter Kit.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden" style={{ height: "70px" }}>
        <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
          <polygon className="text-gray-300 fill-current" points="2560 0 2560 100 0 100"></polygon>
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
                  <i className="fas fa-award"></i>
                </div>
                <h6 className="text-xl font-semibold">Awarded Agency</h6>
                <p className="mt-2 mb-4 text-gray-600">
                  Divide details about your product or agency work into parts.
                </p>
              </div>
            </div>
          </div>
  
          <div className="w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                  <i className="fas fa-retweet"></i>
                </div>
                <h6 className="text-xl font-semibold">Free Revisions</h6>
                <p className="mt-2 mb-4 text-gray-600">
                  Keep you user engaged by providing meaningful information.
                </p>
              </div>
            </div>
          </div>
  
          <div className="w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                  <i className="fas fa-fingerprint"></i>
                </div>
                <h6 className="text-xl font-semibold">Verified Company</h6>
                <p className="mt-2 mb-4 text-gray-600">
                  A few lines about each feature will keep your users engaged!
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
          <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <div className="text-pink-600 p-3 inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
              <i className="fas fa-rocket text-xl"></i>
            </div>
            <h3 className="text-3xl font-semibold">
              A growing company
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              The extension comes with three pre-built pages to help you get started faster.
            </p>
            <ul className="list-none mt-6">
              <li className="py-2">
                <div className="flex items-center">
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                    <i className="fas fa-fingerprint"></i>
                  </span>
                  <h4 className="text-gray-600">Carefully crafted components</h4>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                    <i className="fab fa-html5"></i>
                  </span>
                  <h4 className="text-gray-600">Amazing page examples</h4>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                    <i className="far fa-paper-plane"></i>
                  </span>
                  <h4 className="text-gray-600">Dynamic components</h4>
                </div>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600">
              <img alt="..." src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80" className="w-full align-middle rounded-t-lg" />
              <blockquote className="relative p-8 mb-4">
                <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" className="absolute left-0 w-full block" style={{ height: "95px", top: "-94px" }}>
                  <polygon points="-30,95 583,95 583,65" className="text-pink-600 fill-current"></polygon>
                </svg>
                <h4 className="text-xl font-bold text-white">Top Notch Services</h4>
                <p className="text-md font-light mt-2 text-white">
                  The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    {/* Team Section */}
    <section className="pt-20 pb-48">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center mb-24">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold">Here are our heroes</h2>
            <p className="text-lg leading-relaxed m-4 text-gray-600">
              Meet the people who make our success possible.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div className="px-6">
              <img alt="..." src="https://images.unsplash.com/photo-1554181220-3c1c2b40a029?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=735&q=80"
                className="shadow-lg rounded-full max-w-full mx-auto" style={{ maxWidth: "120px" }} />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold">Ryan Tompson</h5>
                <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">Web Developer</p>
                <div className="mt-6">
                  <button className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                    <i className="fab fa-twitter"></i>
                  </button>
                  <button className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                    <i className="fab fa-facebook-f"></i>
                  </button>
                  <button className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                    <i className="fab fa-dribbble"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div className="px-6">
              <img alt="..." src="https://images.unsplash.com/photo-1569082696185-681dcbeb4744?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=735&q=80"
                className="shadow-lg rounded-full max-w-full mx-auto" style={{ maxWidth: "120px" }} />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold">Romina Hadid</h5>
                <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">Marketing Specialist</p>
                <div className="mt-6">
                  <button className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                    <i className="fab fa-google"></i>
                  </button>
                  <button className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                    <i className="fab fa-facebook-f"></i>
                  </button>
                  <button className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                    <i className="fab fa-dribbble"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div className="px-6">
              <img alt="..." src="https://images.unsplash.com/photo-1542206395-9feb3edaa68d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=735&q=80"
                className="shadow-lg rounded-full max-w-full mx-auto" style={{ maxWidth: "120px" }} />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold">Alexa Smith</h5>
                <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">UI/UX Designer</p>
                <div className="mt-6">
                  <button className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                    <i className="fab fa-google"></i>
                  </button>
                  <button className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                    <i className="fab fa-facebook-f"></i>
                  </button>
                  <button className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                    <i className="fab fa-dribbble"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div className="px-6">
              <img alt="..." src="https://images.unsplash.com/photo-1554224154-22dec7ec881d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=735&q=80"
                className="shadow-lg rounded-full max-w-full mx-auto" style={{ maxWidth: "120px" }} />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold">Jenna Kardi</h5>
                <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">Founder and CEO</p>
                <div className="mt-6">
                  <button className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                    <i className="fab fa-dribbble"></i>
                  </button>
                  <button className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                    <i className="fab fa-twitter"></i>
                  </button>
                  <button className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                    <i className="fab fa-instagram"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    {/* Call to Action */}
    <section className="pb-20 relative block bg-gray-900">
      <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-8/12 px-4 text-center">
            <h2 className="text-4xl font-semibold text-white">Join our newsletter</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
              Receive weekly updates about our services and exclusive offers.
            </p>
            <div className="mt-12">
              <a href="#pablo" className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-pink-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150">
                Get Started
              </a>
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
            <h5 className="text-lg mt-0 mb-2 text-gray-700">
              Find us on any of these platforms, we respond within 1-2 business days.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6">
              <button className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <i className="fab fa-twitter"></i>
              </button>
              <button className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <i className="fab fa-facebook-square"></i>
              </button>
              <button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <i className="fab fa-dribbble"></i>
              </button>
              <button className="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <i className="fab fa-github"></i>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">Useful Links</span>
                <ul className="list-unstyled">
                  <li>
                    <a href="#pablo" className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">About Us</a>
                  </li>
                  <li>
                    <a href="#pablo" className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">Blog</a>
                  </li>
                  <li>
                    <a href="#pablo" className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">Github</a>
                  </li>
                  <li>
                    <a href="#pablo" className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">Free Products</a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">Other Resources</span>
                <ul className="list-unstyled">
                  <li>
                    <a href="#pablo" className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">MIT License</a>
                  </li>
                  <li>
                    <a href="#pablo" className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#pablo" className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#pablo" className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">Contact Us</a>
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
              Copyright © {new Date().getFullYear()} Notus JS by
              <a href="https://www.creative-tim.com?ref=njjs-footer" className="text-gray-600 hover:text-gray-900"> Creative Tim</a>.
            </div>
          </div>
        </div>
      </div>
    </footer>
  </main>
  
  );
}
