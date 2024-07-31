import Image from "next/image";

interface EventContentCardProps {
  title: string;
  des: string;
  name: string;
  position: string;
  panel: string;
  img: string;
}

export function EventContentCard({
  title,
  des,
  name,
  position,
  panel,
  img,
}: EventContentCardProps) {
  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-end mb-10 bg-transparent shadow-none">
      <div className="w-full lg:w-[28rem] h-[20rem] lg:h-[32rem] shrink-0 mb-6 lg:mb-0">
        <Image
          width={768}
          height={768}
          src={img}
          alt="testimonial image"
          className="h-full w-full object-cover rounded-lg"
        />
      </div>
      <div className="w-full lg:flex-1 p-6">
        <h6 className="text-blue-gray-900 mb-2 lg:mb-4 text-sm md:text-base lg:text-lg">
          {panel}
        </h6>
        <h2 className="text-blue-gray-900 mb-2 lg:mb-4 font-medium text-lg md:text-xl lg:text-2xl">
          {title}
        </h2>
        <p className="mb-6 lg:mb-12 text-gray-500 text-sm md:text-base lg:text-lg">
          {des}
        </p>
        <div className="flex items-center gap-4">
          <img
            src="/logos/spotify-logo.png"
            alt="spotify"
            className="rounded-full w-10 h-10 md:w-12 md:h-12"
          />
          <div>
            <h6 className="text-blue-gray-900 mb-0.5 text-sm md:text-base lg:text-lg">
              {name}
            </h6>
            <p className="font-normal text-gray-500 text-xs md:text-sm lg:text-base">
              {position}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventContentCard;
