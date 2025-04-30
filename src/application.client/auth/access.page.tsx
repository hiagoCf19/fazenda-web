import { Building, User } from "lucide-react";
import { Button } from "../../shadcn/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../../shadcn/ui/carousel";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

export function AccessPageWeb() {
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [_, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrentSlide(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  const carouselItem = [
    {
      title: "Conectando você ao campo",
      description:
        "Descubra alimentos frescos e de qualidade diretamente dos pequenos produtores de Angola.",
      image: "/landing-1.png",
    },
    {
      title: "Sustentabilidade em cada entrega",
      image: "/landing-2.png",
      description:
        "Apoie práticas agrícolas responsáveis e receba produtos que respeitam o meio ambiente.",
    },
    {
      title: "Alimentos frescos, impacto positivo",
      description:
        "Fortalecendo a economia local e valorizando o trabalho dos produtores rurais.",
      image: "landing-3.png",
    },
  ];
  return (
    <div className="flex flex-col-reverse md:flex-row md:min-h-screen bg-background">
      <div className="md:w-1/2 flex flex-col  justify-center  px-16 md:py-12 ">
        <h1 className="md:text-3xl text-xl text-center font-bold text-secondary-foreground my-2 md:my-0">
          Seja bem vindo!
        </h1>
        <p className="mb-6 text-gray-600 text-center">
          Como deseja realizar seu cadastro?
        </p>

        <div className="w-full   flex items-center flex-col">
          <div className="space-y-4 md:w-[60%] w-full flex justify-center items-center flex-col">
            <Link to={"/register/client"} className="w-full">
              <Button className="w-full bg-secondary  text-secondary-foreground rounded-xl py-6 font-medium hover:bg-secondary/80  flex items-center justify-center text-xl">
                <User />
                Cliente
              </Button>
            </Link>
            <Button
              className="w-full border-secondary-foreground rounded-xl py-6 font-medium  flex items-center justify-center text-secondary-foreground text-xl"
              variant={"outline"}
            >
              <Building />
              Produtor
            </Button>
          </div>

          <div className="md:mt-6 mt-2 text-center">
            <p className="text-gray-600 md:text-lg">
              Já é cadastrado?{" "}
              <Link to={"/login"}>
                <Button
                  variant={"link"}
                  className="text-[#FE7000] p-0 font-bold hover:underline md:text-lg"
                >
                  Faça login
                </Button>
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* carousel */}

      <div className="md:w-1/2 md:bg-green-100 flex flex-col md:justify-center items-center ">
        <img
          src="/full_logo.svg"
          alt="Farmer with produce"
          className="md:size-56 size-20  aspect-square object-contain md:-my-12 scale-200 md:scale-none"
        />

        <Carousel
          setApi={setApi}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent>
            {carouselItem.map((item, i) => (
              <CarouselItem
                key={i}
                className="md:space-y-4 space-y-2 flex flex-col items-center "
              >
                <img
                  src={item.image}
                  alt="Farmer with produce"
                  className="md:w-[499px] md:h-[551px]  w-[326px] h-[360px] rounded-2xl object-cover"
                />
                <div className="w-[80%]">
                  <h1 className="text-secondary-foreground md:text-3xl text-xl text-center">
                    {item.title}
                  </h1>
                  <p className="md:text-xl text-zinc-700 text-center text-sm ">
                    {item.description}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Indicador do slide atual */}
        <div className="flex justify-center mt-4 space-x-2 items-center">
          {" "}
          {carouselItem.map((_, index) => (
            <div
              key={index}
              className={`w-5 h-2 rounded-full ${
                currentSlide === index + 1
                  ? "bg-secondary-foreground w-6 h-3"
                  : "bg-secondary"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
