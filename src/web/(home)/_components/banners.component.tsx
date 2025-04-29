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
interface BannerProps {
  showCategories: boolean;
  setShowCategories: (show: boolean) => void;
}

// Componente Banners com controle para ChooseByCategory
export function Banners({ showCategories, setShowCategories }: BannerProps) {
  const [bannerSelecionado, setBannerSelecionado] = useState<number | null>(
    null
  );
  const [selectedCategory, setSelectedCategory] = useState("Vegetais");
  const categorias = [
    "Vegetais",
    "Frutas",
    "Carnes",
    "Peixes",
    "Verduras",
    "Carnes",
    "Frutas",
    "Carnes",
    "Peixes",
    "Verduras",
    "Frutas",
    "Carnes",
    "Peixes",
  ];

  // Função para lidar com o clique no banner
  const handleBannerClick = (index: number) => {
    // Se o banner clicado já está selecionado, restaura estado inicial
    if (bannerSelecionado === index) {
      setBannerSelecionado(null);
      setShowCategories(false);
    } else {
      // Caso contrário, seleciona o banner e mostra categorias no topo
      setBannerSelecionado(index);
      setShowCategories(true);
    }
  };

  return (
    <div className="relative ">
      {/* CATEGORIAS NO TOPO – só aparecem após o clique no banner */}
      {showCategories && (
        <div className="z-50 py-2 space-x-6 mb-5">
          {categorias.map((categoria) => (
            <button
              onClick={() => setSelectedCategory(categoria)}
              key={categoria}
              className={`px-3 py-1 text-sm font-medium rounded-full  w-[116px] h-[34px]  ${
                selectedCategory === categoria
                  ? "bg-primary text-zinc-50"
                  : "bg-green-100 text-secondary-foreground"
              }`}
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
