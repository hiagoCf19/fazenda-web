import { Link } from "react-router";
import { Producer } from "../../../../types/producer";
import { StarIcon } from "lucide-react";

interface ProducerCardProps {
  producer: Producer;
}
export function ProducersCard({ producer }: ProducerCardProps) {
  return (
    <Link to={`/produtor/${producer.id}`}>
      <div className="relative rounded-t-3xl rounded-b-xs shadow-xl overflow-hidden md:w-[169px] md:h-[82px] w-[140px] h-[70px]">
        <img
          src={producer.image}
          alt={producer.businessName}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full">
        <p className="text-lg text-zinc-800 font-medium md:leading-normal leading-5 mt-2">
          {producer.businessName}
        </p>
        <div className="flex items-center gap-2">
          <StarIcon className="text-yellow-400 fill-yellow-400 w-5 h-5" />
          <span className="text-zinc-700 font-medium">
            {producer.assessment}.0
          </span>
        </div>
      </div>
    </Link>
  );
}
