// producers-list.component.tsx - ATUALIZADO
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
      className="space-y-4 pb-0"
      onMouseEnter={() => setShowNext(true)}
      onMouseLeave={() => setShowNext(false)}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-zinc-800 font-semibold text-2xl">{title}</h2>
        <Link to={"/producers"} className="text-[#FE7000]">
          Ver todos
        </Link>
      </div>

      <div className="relative group -mr-12">
        <Carousel className="[&::-webkit-scrollbar]">
          <CarouselPrevious
            className={`
              absolute z-40 left-4 
              transition-opacity duration-300
              ${showNext ? "opacity-100" : "opacity-0"}
            `}
          />

          <CarouselContent className="mr-12">
            {producers.map((producer, i) => (
              <CarouselItem
                className="basis-auto ml-4 overflow-visible"
                key={i}
              >
                <ProducersCard producer={producer} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselNext
            className={`
              absolute z-40 right-4
              transition-opacity duration-300
              ${showNext ? "opacity-100" : "opacity-0"}
            `}
            onMouseEnter={() => setShowPrevius(!showPrevius)}
          />
        </Carousel>
      </div>
    </div>
  );
}
