import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../components/ui/carousel";

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
    <div className="space-y-4 ">
      <h2 className="text-zinc-800 font-semibold text-2xl">{title}</h2>
      <Carousel>
        <CarouselContent>
          {categories.map((category, i) => (
            <CarouselItem className="md:basis-1/7 basis-1/3" key={i}>
              <div
                key={i}
                className="bg-[#E1F3E4] size-24 flex items-center justify-center rounded-3xl"
              >
                <img src={category.image} alt={category.category} />
              </div>
              <p className="text-center text-lg text-zinc-800 font-medium">
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
