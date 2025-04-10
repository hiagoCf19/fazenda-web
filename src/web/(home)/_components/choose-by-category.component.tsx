import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../../shadcn/ui/carousel";

type Category = {
  category: string;
  image: string;
};
interface SectionProps {
  categories: Category[];
  title: string;
}
export const ChooseByCategory = ({ categories, title }: SectionProps) => {
  return (
    <div className="space-y-4 p-4 pb-0  ">
      <h2 className="text-zinc-800 font-semibold text-2xl">{title}</h2>
      <Carousel className="-mx-4">
        <CarouselContent className="">
          {categories.map((category, i) => (
            <CarouselItem className="basis-auto ml-4" key={i}>
              <div
                key={i}
                className="bg-[#E1F3E4] size-24 flex items-center justify-center rounded-3xl"
              >
                <img src={category.image} alt={category.category} />
              </div>
              <p className="md:text-start text-center text-lg text-zinc-800 font-medium">
                {category.category}
              </p>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex gap-8"></div>
    </div>
  );
};
