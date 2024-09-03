import Link from 'next/link'
import React from 'react'

const FooterII = () => {
  return (
    <>
         {/* Footer */}
      <footer className="relative bg-gray-300 pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-xl font-bold">Let's keep in touch!</h4>
              <h5 className="text-xl mt-0 mb-2 text-black">
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
                        href={"/https://www.paypal.com/donate/?hosted_button_id=YSNTPLW36DV3Y"}
                    
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
    </>
  )
}

export default FooterII