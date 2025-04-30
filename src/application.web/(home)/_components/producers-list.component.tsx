import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "../../../shadcn/ui/carousel";
import { Producer } from "../../../../types/producer";
import { Link } from "react-router";
import { ProducersCard } from "./producers-card.component";

interface ProducersProps {
  producers: Producer[];
  title: string;
}

export function ProducersList({ producers, title }: ProducersProps) {
  return (
    <div className="space-y-4 p-4 pr-0">
      <div className="flex items-center justify-between">
        <h2 className="text-zinc-800 font-semibold text-2xl">{title}</h2>
        <Link to={"/producers"} className="text-[#FE7000]">
          Ver todos
        </Link>
      </div>
      <Carousel className="[&::-webkit-scrollbar]">
        <CarouselContent>
          {producers.map((producer, i) => (
            <CarouselItem className="basis-auto ml-4" key={i}>
              <ProducersCard producer={producer} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
      </Carousel>
    </div>
  );
}
