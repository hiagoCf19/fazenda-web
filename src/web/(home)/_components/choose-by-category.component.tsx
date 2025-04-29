//carrossel de categorias
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../../shadcn/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

type Category = {
  category: string;
  image: string;
};

interface SectionProps {
  categories: Category[];
  title: string;
}

export const ChooseByCategory = ({ categories, title }: SectionProps) => {
  // Criando uma referência para o plugin Autoplay para controlar melhor o comportamento
  const autoplayRef = useRef(
    Autoplay({
      delay: 1000, // Reduz para uma transição mais rápida
      stopOnInteraction: false, //  para quando o usuário interage com os controles
      stopOnMouseEnter: true, // Para quando o mouse está sobre o carrossel
      stopOnLastSnap: false, // Não para ao chegar no último item
    })
  );

  return (
    <div className="space-y-4 p-4 pb-0">
      <h2 className="text-zinc-800 font-semibold text-2xl">{title}</h2>
      <Carousel
        className="-mx-4"
        plugins={[autoplayRef.current]}
        opts={{
          align: "start",
          loop: true, // Habilita o loop infinito
          dragFree: false, // Melhor comportamento com autoplay
          containScroll: false, // Melhor para loop
          skipSnaps: false, // Não pular posições
          slidesToScroll: 1, // Rolar um item por vez
          duration: 1000, // Velocidade de transição mais rápida (valor menor = mais rápido)
        }}
        /* onMouseEnter={() => autoplayRef.current.stop()}
        onMouseLeave={() => autoplayRef.current.play()} */
      >
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
