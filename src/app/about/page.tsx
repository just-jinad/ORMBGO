import { Navbar } from "@/components";
import FooterII from "@/components/footerII";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-400 py-8 sm:py-12">
        {/* About Us Section */}
        <section className="text-center py-12 sm:py-16">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">Who We Are</h1>
          <p className="text-gray-600 max-w-xl mx-auto px-4 sm:px-0">
            One Root Many Branches Global Outreach, or ORMBGO, is a non-profit
            community service organization headquartered in Boca Raton, Florida,
            USA. Our primary aim is to raise awareness in local communities of
            the needs of individuals who are isolated from their families, either
            permanently or temporarily, due to internment in nursing homes, rehab
            facilities, or isolation at home.
          </p>
        </section>

        {/* Mission Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-0">
            <h2 className="text-xl sm:text-2xl font-bold text-center mb-8">
              Our Mission
            </h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
              We connect senior citizens who reside in nursing homes with the local
              community and help reduce the impact of loneliness through weekly
              interactive programs and special events.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Images for mission */}
              <div className="bg-gray-400 h-40"></div>
              <div className="bg-gray-400 h-40"></div>
              <div className="bg-gray-400 h-40 sm:col-span-2"></div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-12 sm:py-16 bg-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-0">
            <h2 className="text-xl sm:text-2xl font-bold text-center mb-8">
              Our Vision
            </h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
              To bring our program to every nursing home and rehabilitation
              facility in Boca Raton, then expand into all 50 states, the Caribbean
              Islands, and ultimately take our mission worldwide, one country at a
              time.
            </p>
          </div>
        </section>

        {/* Meet Our Team Section */}
        <section className="bg-gray-100 py-12 sm:py-16">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-8">
            Meet Our Team
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            Our team of talented and dedicated volunteers utilize their talents and
            abilities to bring love and cheer to our precious Senior Citizens as
            well as the community at large. We have developed highly energetic and
            enthusiastic programs to uplift those in need.
          </p>

          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center px-4 sm:px-0">
            {/* Leader 1 */}
            <div>
              <div className="bg-gray-300 rounded-full w-24 h-24 mx-auto mb-4"></div>
              <h3 className="font-bold">Jonathan Warner</h3>
              <p className="text-gray-500">CEO</p>
            </div>

            {/* Leader 2 */}
            <div>
              <div className="bg-gray-300 rounded-full w-24 h-24 mx-auto mb-4"></div>
              <h3 className="font-bold">Tammy Johnson</h3>
              <p className="text-gray-500">Director</p>
            </div>

            {/* Leader 3 */}
            <div>
              <div className="bg-gray-300 rounded-full w-24 h-24 mx-auto mb-4"></div>
              <h3 className="font-bold">David Hackett</h3>
              <p className="text-gray-500">Volunteer Coordinator</p>
            </div>

            {/* Leader 4 */}
            <div>
              <div className="bg-gray-300 rounded-full w-24 h-24 mx-auto mb-4"></div>
              <h3 className="font-bold">Pamela Wagner</h3>
              <p className="text-gray-500">Program Manager</p>
            </div>
          </div>

          {/* View the team button */}
          <div className="text-center mt-8 sm:mt-12">
            <button className="bg-gray-800 text-white py-2 px-6 rounded-lg">
              View the team
            </button>
          </div>
        </section>
        <FooterII />
      </div>
    </>
  );
};

export default AboutPage;
