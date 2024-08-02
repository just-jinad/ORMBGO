"use client";

import Image from "next/image";

export function SponsoredBy() {
  return (
    <section className="py-8 px-4 md:px-8 lg:py-20 text-white">
      <div className="container mx-auto text-center"  >
        <h6 className="text-blue-gray-900 mb-8 text-lg font-medium">
          WHO WE ARE
        </h6>
        <div className="flex flex-col lg:flex-row items-start justify-center gap-6 mt-8 text-black rounded-lg p-6 bg-white">
          <div className="w-full lg:w-1/2 text-left">
            <h5 className="text-xl md:text-2xl font-semibold mb-4">WHO WE ARE</h5>
            <p className="mb-4 text-sm md:text-base lg:text-lg" data-aos="fade-up" data-aos-duration="1000">
              One Root Many Branches Global Outreach, or ORMBGO, is a non-profit
              community service organization headquartered in Boca Raton,
              Florida, USA. Our primary aim is to raise awareness in local
              communities of the needs of individuals who are isolated from
              their families, either permanently or temporarily, due to
              internment in nursing homes, rehab facilities, or isolated at
              home.
            </p>
            <h5 className="text-xl md:text-2xl font-semibold mb-2">OUR MISSION:</h5>
            <p className="mb-4 text-sm md:text-base lg:text-lg" data-aos="fade-up" data-aos-duration="1000">
              We connect senior citizens who reside in nursing homes with the
              local community and help reduce the impact of loneliness through
              weekly interactive programs and special events.
            </p>
            <h5 className="text-xl md:text-2xl font-semibold mb-2">OUR VISION:</h5>
            <p className="mb-4 text-sm md:text-base lg:text-lg" data-aos="fade-up" data-aos-duration="1000">
              To bring our program to every nursing home and rehabilitation
              facility in Boca Raton, then expand into all 50 states, the
              Caribbean Islands, and ultimately take our mission worldwide, one
              country at a time.
            </p>
            <h5 className="text-xl md:text-2xl font-semibold mb-2">OUR TEAM:</h5>
            <p className="mb-4 text-sm md:text-base lg:text-lg" data-aos="fade-up" data-aos-duration="1000">
              Our team of talented and dedicated volunteers utilize their
              talents and abilities to bring love and cheer to our precious
              Senior Citizens as well as the community at large. We have
              developed highly energetic and
              <br />
              <button className="mt-2 w-80 font-bold text-xl bg-green-500 hover:bg-pink-900 hover:text-white border hover:border-gray-300 text-white shadow-lg px-4 py-2 rounded-lg">
                Give 
              </button>
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
            <h5 className="text-xl md:text-2xl font-semibold mb-2">Rev. Eula</h5>
            <p className="italic mb-4 text-sm md:text-base lg:text-lg">Founder, ORMBGO</p>
            <p className="italic text-sm md:text-base lg:text-lg">
              "To everyone who lives within a community I say this, Don't
              postpone joy! One Root Many Branches Global Outreach, Inc.
              strives to uplift the human spirit and make Life Worth Living!"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SponsoredBy;
