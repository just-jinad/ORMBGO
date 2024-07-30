"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";


export function SponsoredBy() {
  return (
    <section className="py-8 px-8 lg:py-20 text-white">
      <div className="container mx-auto text-center">
        <Typography variant="h6" color="blue-gray" className="mb-8">
          WHO WE ARE
        </Typography>
     
        <div className="flex flex-col lg:flex-row items-start justify-center gap-6 mt-8 text-black rounded-lg p-6">
          <div className="w-full lg:w-1/2 text-left">
            <Typography variant="h5" className="mb-4">
              WHO WE ARE
            </Typography>
            <Typography className="mb-4">
              One Root Many Branches Global Outreach, or ORMBGO, is a non-profit
              community service organization headquartered in Boca Raton,
              Florida, USA. Our primary aim is to raise awareness in local
              communities of the needs of individuals who are isolated from
              their families, either permanently or temporarily, due to
              internment in nursing homes, rehab facilities, or isolated at
              home.
            </Typography>
            <Typography variant="h5" className="mb-2">
              OUR MISSION:
            </Typography>
            <Typography className="mb-4">
              We connect senior citizens who reside in nursing homes with the
              local community and help reduce the impact of loneliness through
              weekly interactive programs and special events.
            </Typography>
            <Typography variant="h5" className="mb-2">
              OUR VISION:
            </Typography>
            <Typography className="mb-4">
              To bring our program to every nursing home and rehabilitation
              facility in Boca Raton, then expand into all 50 states, the
              Caribbean Islands, and ultimately take our mission worldwide, one
              country at a time.
            </Typography>
            <Typography variant="h5" className="mb-2">
              OUR TEAM:
            </Typography>
            <Typography className="mb-4">
              Our team of talented and dedicated volunteers utilize their
              talents and abilities to bring love and cheer to our precious
              Senior Citizens as well as the community at large. We have
              developed highly energetic and
                <br />
              <Button className="mt-2">Give</Button>
            </Typography>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-center">
            <Image
              width={200}
              height={200}
              src="https://static.wixstatic.com/media/e0c18a_c3c13c6c7a884880bc8ff3e16a7441b1~mv2.jpg/v1/crop/x_0,y_0,w_333,h_367/fill/w_249,h_275,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/eula-pennerman-founder-ormbgo_edited.jpg"
              alt="Rev. Eula"
              className="rounded-full  mb-4 lg:mb-0"
            />
            <Typography variant="h5" className="mb-2">
              Rev. Eula
            </Typography>
            <Typography className="italic mb-4">
              Founder, ORMBGO
            </Typography>
            <Typography className="italic">
              "To everyone who lives within a community I say this, Don't
              postpone joy! One Root Many Branches Global Outreach, Inc.
              strives to uplift the human spirit and make Life Worth Living!"
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SponsoredBy;
