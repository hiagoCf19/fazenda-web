import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "../../../shadcn/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef, useEffect } from "react";

type Category = {
  category: string;
  image: string;
};

interface ChooseByCategoryProps {
  categories: Category[];
  title: string;
  visible: boolean; // Nova prop para controlar visibilidade
}

// Componente ChooseByCategory com controle de visibilidade
export const ChooseByCategory = ({
  categories,
  title,
  visible,
}: ChooseByCategoryProps) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [isMouseOver, setIsMouseOver] = useState(false);

  // Referência para o plugin de autoplay
  const autoplayRef = useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
      stopOnLastSnap: false,
    })
  );

  // Controlamos manualmente quando parar/iniciar baseado no mouse
  useEffect(() => {
    if (!carouselApi) return;

    if (isMouseOver) {
      autoplayRef.current.stop();
    } else {
      autoplayRef.current.play();
    }
  }, [carouselApi, isMouseOver]);

  // Função para definir o carouselApi quando ele estiver disponível
  const onCarouselCreated = (api: CarouselApi) => {
    setCarouselApi(api);
  };

  // Se não estiver visível, não renderiza o componente
  if (!visible) return null;

  return (
    <div className="space-y-4 p-4 pb-0">
      <h2 className="text-zinc-800 font-semibold text-2xl">{title}</h2>
      <div
        onMouseEnter={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
      >
        <Carousel
          className="-mx-4"
          plugins={[autoplayRef.current]}
          setApi={onCarouselCreated}
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
            containScroll: false,
            duration: 20,
            watchDrag: false,
            inViewThreshold: 0,
          }}
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
      </div>
      <div className="flex gap-8"></div>
    </div>
  );
};

// Componente Banners com controle para ChooseByCategory
export function Banners() {
  const [mostrarCategoriasNoTopo, setMostrarCategoriasNoTopo] = useState(false);
  const [bannerSelecionado, setBannerSelecionado] = useState<number | null>(
    null
  );
  const categorias = ["Vegetais", "Frutas", "Carnes", "Peixes", "Verduras"];

  // Função para lidar com o clique no banner
  const handleBannerClick = (index: number) => {
    // Se o banner clicado já está selecionado, restaura estado inicial
    if (bannerSelecionado === index) {
      setBannerSelecionado(null);
      setMostrarCategoriasNoTopo(false);
    } else {
      // Caso contrário, seleciona o banner e mostra categorias no topo
      setBannerSelecionado(index);
      setMostrarCategoriasNoTopo(true);
    }
  };

  return (
    <div className="relative ">
      {/* CATEGORIAS NO TOPO – só aparecem após o clique no banner */}
      {mostrarCategoriasNoTopo && (
        <div className="sticky top-0 z-50 py-2 flex justify-center gap-3">
          {categorias.map((categoria) => (
            <button
              key={categoria}
              className="px-3 py-1 text-sm font-medium rounded-full bg-green-100 text-green-700"
            >
              {categoria}
            </button>
          ))}
        </div>
      )}

      {/* CARROSSEL DE BANNERS */}
      {bannerSelecionado !== null ? (
        // tamanho do banner ao clicar
        <div
          className="w-full h-80 flex items-center justify-center rounded-xl overflow-hidden transition-all duration-300 ease-in-out cursor-pointer"
          onClick={() => handleBannerClick(bannerSelecionado)}
        >
          <img
            src={`/banner${bannerSelecionado + 1}.png`}
            alt={`Banner ${bannerSelecionado + 1}`}
            className="h-full w-auto object-contain"
          />
        </div>
      ) : (
        // Carrossel normal de banners quando nenhum foi selecionado
        <Carousel>
          <CarouselContent className="w-full pl-2">
            {["/banner1.png", "/banner2.png", "/banner3.png"].map(
              (src, idx) => (
                <CarouselItem
                  key={idx}
                  className="md:basis-1/3 md:w-1/2 w-full cursor-pointer"
                  onClick={() => handleBannerClick(idx)}
                >
                  <img
                    src={src}
                    alt={`Banner ${idx + 1}`}
                    className="w-full object-cover rounded-xl transition-all duration-300"
                  />
                </CarouselItem>
              )
            )}
          </CarouselContent>
        </Carousel>
      )}
    </div>
  );
}
