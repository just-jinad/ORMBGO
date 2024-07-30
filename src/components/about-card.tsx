interface AboutCardProp {
  title: string;
  subTitle: string;
  description: string;
}

export function AboutCard({ title, description, subTitle }: AboutCardProp) {
  return (
    <div className="shadow-none bg-gray-900 rounded-2xl p-5 h-[453px] flex flex-col justify-center items-center">
      <h6 className="mb-4 text-center text-white">{subTitle}</h6>
      <h4 className="text-center text-white">{title}</h4>
      <p className="mt-2 mb-10 text-base w-full lg:w-8/12 text-center font-normal text-white">
        {description}
      </p>
      <button className="bg-white text-gray-900 px-4 py-2 rounded text-sm">
        View Details
      </button>
    </div>
  );
}

export default AboutCard;
