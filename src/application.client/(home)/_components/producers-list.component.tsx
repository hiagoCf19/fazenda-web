import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "../../../shadcn/ui/carousel";
import { Producer } from "../../../../types/producer";
import { Link } from "react-router";
import { ProducersCard } from "./producers-card.component";
import { useState } from "react";

interface ProducersProps {
  producers: Producer[];
  title: string;
}

export function ProducersList({ producers, title }: ProducersProps) {
  const [showNext, setShowNext] = useState(false);
  return (
    <div
      className="space-y-4  pb-0  "
      onMouseEnter={() => setShowNext(!showNext)}
      onMouseLeave={() => setShowNext(!showNext)}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-zinc-800 font-semibold text-2xl">{title}</h2>
        <Link to={"/producers"} className="text-[#FE7000]">
          Ver todos
        </Link>
      </div>
      <div className=" relative -mr-12 ">
        <Carousel className="[&::-webkit-scrollbar]">
          <CarouselContent className=" mr-12">
            {producers.map((producer, i) => (
              <CarouselItem className="basis-auto ml-4" key={i}>
                <ProducersCard producer={producer} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="absolute z-40 right-4 " hidden={!showNext} />
        </Carousel>
      </div>
    </div>
  );
}
