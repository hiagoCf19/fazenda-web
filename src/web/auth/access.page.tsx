import { Building, User } from "lucide-react";
import { Button } from "../../components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../../components/ui/carousel";
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
      image:
        "https://s3-alpha-sig.figma.com/img/731e/c215/ccdbb7ba3539729ead7febb9c421fdb2?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=omcQ6ySMdbVITApOG9bOfc0HHLoZrqGy2iIODXz-d1DV58RhqbsqDCYYdCO5mCneU5J188RoCrT62Aki3VqRrqCEMGXpLRaatHFg1ckUgm1yunClzHoTsayhNh1havpJQf7quwNlqb76mxnU9uzjgqQXHj-VhhT33Bc27llv4OdVvU3cqi5lxJNjYEC3H4UEH36-GZujQU6-cjfy5o0n-7JBHAwlxFsmKvSFzeZ0EAWei1DdeYkcP1QKNSpHYNgASYCDP464P74BmBTdB7uP1TMLzcXkVam0FS8EysgsJzMdhtsDjbhqcKKhmcq5RPQITu5nAAuuuKc0iRhLRbqfHA__",
    },
    {
      title: "Sustentabilidade em cada entrega",
      image:
        "https://s3-alpha-sig.figma.com/img/2169/0356/2277e59de3e1363d91798d12b65c8353?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=j76Vu9Xm076C1YjmmoX5wMsN0WVkpuaNXhFk9hyJaciZVSUBEpAxxIGUFBu7pb~~2SL0M9tEaJg5QC03mgKZIYdZuIcKVtGoI9O-~jyXxIBkDcuhuqDtZBzqTS1KDSs8bk09ofTfs9mUe2~PIi9StvZJcisnrUiYOo5xZLy75bJ0zE4i1nhJsOzSBDw3pBGB0M6RovgSFbKcMLFBE7d7wNBFXJeigftUguIOLhPzTyiZSfEisOtG5b2FYrjykYCOHwDNTjZam1WAev71ppkojWHGh7ZYhf8ZOAbvrNWOGYwxE3v2yHaswAOVSZvhM6Re2H-eVW8YnbeUkkmXHbGPzQ__",
      description:
        "Apoie práticas agrícolas responsáveis e receba produtos que respeitam o meio ambiente.",
    },
    {
      title: "Alimentos frescos, impacto positivo",
      description:
        "Fortalecendo a economia local e valorizando o trabalho dos produtores rurais.",
      image:
        "https://s3-alpha-sig.figma.com/img/72e5/098d/9e1cd37642f46cf8716549e9ef1689f7?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WUTVCMGOtkf9CRYPRfDrLzsJzKSZtlm5ieL7p4CxVW58pyLBkVw9t9vWejM2Jl-LbpjOQRPTU9bgPua2wnO5vuy2mKxeJYOO9VB6~nputO6mI3SETIcDnFJc8PS~nmjRIR2ujSJNuyNCH9wmlOakx-Bciknbm6EaiYZ-NYOtaLHEHM4QNDEFyaVSu~TsSTXj-5xf5cc~-nd8I-iPC792XQ1MAONyHS8tNnwSeacCpVoE6iIRVoAipeptXwKtCTymp5SW~kfg5UJJbe0MQG9r0dqPW2TNFCGvFlpwAYAfDYYG4k5TjjJ6KKoHkyJohjodP95Zx9egL9Y5ToYqA25w1Q__",
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
              <Button
                variant={"link"}
                className="text-[#FE7000] p-0 font-bold hover:underline md:text-lg"
              >
                Faça login
              </Button>
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
