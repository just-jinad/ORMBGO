import Image from "next/image";

interface EventContentCardProps {
  title: string;
  des: string;

  panel: string;
  img: string;
}

export function EventContentCard({
  title,
  des,
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
      </div>
    </div>
  );
}

export default EventContentCard;
