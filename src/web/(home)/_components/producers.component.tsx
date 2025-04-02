import { StarIcon } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../../components/ui/carousel";
import { Producer } from "../../../../types/producer";
interface ProducersProps {
  producers: Producer[];
  title: string;
}
export function Producers({ producers, title }: ProducersProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-zinc-800 font-semibold text-2xl">{title}</h2>
      <Carousel>
        <CarouselContent className="-ml-4">
          {producers.map((producer, i) => (
            <CarouselItem className="pl-4 basis-auto " key={i}>
              <div className="relative  rounded-t-3xl rounded-b-xs shadow-xl overflow-hidden md:w-[169px] md:h-[82px] w-[140px] h-[70px]">
                <img
                  src={producer.image}
                  alt={producer.businessName}
                  className="aspect-video"
                />
              </div>
              <div className=" w-full">
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
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
