import { StarIcon } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../shadcn/ui/carousel";
import { Producer } from "../../../../types/producer";
import { Link } from "react-router";

interface ProducersProps {
  producers: Producer[];
  title: string;
}

export function ProducersList({ producers, title }: ProducersProps) {
  return (
    <div className="space-y-4 p-4 pb-0">
      <div className="flex items-center justify-between">
        <h2 className="text-zinc-800 font-semibold text-2xl">{title}</h2>
        <Link to={"/producers"} className="text-[#FE7000]">
          Ver todos
        </Link>
      </div>
      <Carousel className="-mx-4">
        <CarouselContent>
          {producers.map((producer, i) => (
            <CarouselItem className="ml-4 basis-auto" key={i}>
              <Link to={`/produtor/${producer.id}`} className="block">
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
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>
    </div>
  );
}
