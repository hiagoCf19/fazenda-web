import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
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
  const [showPrevius, setShowPrevius] = useState(false);

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
      <div className=" relative group -mr-12 ">
        <Carousel className="[&::-webkit-scrollbar]">
          <CarouselPrevious
            hidden={!showPrevius}
            className="absolute z-40 left-4"
          />
          <CarouselContent className=" mr-12">
            {producers.map((producer, i) => (
              <CarouselItem className="basis-auto ml-4" key={i}>
                <ProducersCard producer={producer} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext
            className="absolute z-40 right-4 "
            onMouseEnter={() => setShowPrevius(!showPrevius)}
            hidden={!showNext}
          />

          {/* Overlay gradiente no canto direito */}

          <div
            className="
          -mt-4
          pointer-events-none
          absolute top-0 right-0 h-full w-32
          bg-gradient-to-r from-black/5 to-black/90
          opacity-0
          group-hover:opacity-100
          transition-opacity duration-300
          z-30
          [mask-image:linear-gradient(to_bottom,transparent_0%,black_50%,black_50%,transparent_100%)]
          [mask-composite:intersect]
          [mask-mode:match-source]
    "
          />
        </Carousel>
      </div>
    </div>
  );
}
