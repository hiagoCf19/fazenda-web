import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../../shadcn/ui/carousel";

export function Banners() {
  return (
    <Carousel>
      <CarouselContent className="w-full pl-2">
        <CarouselItem className="md:basis-1/3 md:w-1/2 w-full">
          <img src="/banner2.png" alt="" />
        </CarouselItem>
        <CarouselItem className="md:basis-1/3 md:w-1/2 w-full">
          <img src="/banner1.png" alt="" />
        </CarouselItem>
        <CarouselItem className="md:basis-1/3 md:w-1/2 w-full">
          <img src="/banner3.png" alt="" />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
