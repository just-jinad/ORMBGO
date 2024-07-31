interface StatsCardProps {
  count: string;
  title: string;
}

export function StatsCard({ count, title }: StatsCardProps) {
  return (
    <div className="bg-transparent shadow-none">
      <h1 className="text-4xl md:text-2xl font-bold text-blue-gray-900">
        {count}
      </h1>
      <h6 className="text-lg md:text-xl text-blue-gray-900 mt-1 font-medium">
        {title}
      </h6>
    </div>
  );
}

export default StatsCard;
