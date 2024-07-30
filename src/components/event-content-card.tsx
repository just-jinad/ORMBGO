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
    <div className="flex flex-col lg:flex-row items-end mb-10 bg-transparent shadow-none">
      <div className="h-[32rem] max-w-[28rem] shrink-0">
        <Image
          width={768}
          height={768}
          src={img}
          alt="testimonial image"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="col-span-full lg:col-span-3 p-6">
        <h6 className="text-blue-gray mb-4">{panel}</h6>
        <h2 className="text-blue-gray mb-4 font-medium text-2xl">{title}</h2>
        <p className="mb-12 md:w-8/12 font-medium text-gray-500">{des}</p>
        <div className="flex items-center gap-4">
          <img
            src="/logos/spotify-logo.png"
            alt="spotify"
            className="rounded-full w-12 h-12"
          />
          <div>
            <h6 className="text-blue-gray mb-0.5">{name}</h6>
            <p className="font-normal text-gray-500 text-sm">{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventContentCard;
