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
    <div className="flex flex-col items-start bg-transparent shadow-none">
      <div className="w-full h-[20rem] mb-4">
        <Image
          width={768}
          height={768}
          src={img}
          alt="event image"
          className="h-full w-full object-cover rounded-lg"
        />
      </div>
      <h2 className="text-black font-bold text-lg mb-2">
        {title}
      </h2>
      <p className="text-gray-700 text-sm leading-6">
        {des}
      </p>
    </div>
  );
}

export function EventContent() {
  const EVENT_CONTENT = [
    {
      title: "Dancing with residents at a nursing home. 2019.",
      des: "We bring joy, love and gifts to the residents of nursing homes and rehab facilities every week.",
      panel: "NURSING HOMES",
      img: "https://static.wixstatic.com/media/e0c18a_d14d1a94618641ccad78e1a1031d2b6a~mv2.jpeg/v1/fill/w_438,h_329,q_90/e0c18a_d14d1a94618641ccad78e1a1031d2b6a~mv2.webp",
    },
    {
      title: "Visiting the elderly during 2020",
      des: "We sponsor special events for the community several times per year to raise funds for our organization and bring people together",
      panel: "COMMUNITY EVENTS",
      img: "https://static.wixstatic.com/media/e0c18a_8f8c1141527147e9bfacefc109e22471~mv2.jpeg/v1/fill/w_188,h_250,q_90/e0c18a_8f8c1141527147e9bfacefc109e22471~mv2.webp",
    },
    {
      title: "Gifts and goodies for nursing home residents! 2017",
      des: "We love to meet new people and spend time with old friends at our monthly birthday gatherings!",
      panel: "MONTHLY BIRTHDAY GATHERINGS",
      img: "https://static.wixstatic.com/media/e0c18a_c43f1ec76fe84644b2de1b41b8c27258~mv2.jpeg/v1/fill/w_388,h_292,q_90/e0c18a_c43f1ec76fe84644b2de1b41b8c27258~mv2.webp",
    },
  ];

  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="mx-auto container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {EVENT_CONTENT.map((props, idx) => (
          <EventContentCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default EventContent;
