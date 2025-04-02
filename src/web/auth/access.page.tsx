import { Building, User } from "lucide-react";
import { Button } from "../../components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../components/ui/carousel";
import { Link } from "react-router";

export function AccessPageWeb() {
  return (
    <div className="flex min-h-screen bg-green-50">
      <div className="w-1/2 flex flex-col justify-center  px-16 py-12">
        <h1 className="text-3xl text-center font-bold text-secondary-foreground mb-1 ">
          Seja bem vindo!
        </h1>
        <p className="mb-6 text-gray-600 text-center">
          Como deseja realizar seu cadastro?
        </p>

        <div className="w-full   flex items-center flex-col">
          <div className="space-y-4 w-[60%] flex justify-center items-center flex-col">
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

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Já é cadastrado?{" "}
              <Button
                variant={"link"}
                className="text-[#FE7000] p-0 font-bold hover:underline"
              >
                Faça login
              </Button>
            </p>
          </div>
        </div>
      </div>

      <div className="w-1/2 bg-green-100 flex flex-col justify-center items-center">
        <img
          src="/full_logo.svg"
          alt="Farmer with produce"
          className="size-56 aspect-square object-contain -my-12"
        />

        <Carousel>
          <CarouselContent>
            <CarouselItem className="space-y-4 flex flex-col items-center ">
              <img
                src="/login_foto1.png"
                alt="Farmer with produce"
                className="w-[499px] h-[551px] aspect-square object-contain"
              />
              <div className="w-[80%]">
                <h1 className="text-secondary-foreground text-3xl text-center">
                  Conectando você ao campo
                </h1>
                <p className="text-xl text-zinc-700 text-center ">
                  Descubra alimentos frescos e de qualidade <br /> diretamente
                  dos pequenos produtores de <br /> Angola.
                </p>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>

        <div className="flex mt-4 space-x-2 items-center">
          <div className="w-6 h-3  bg-secondary-foreground rounded-full"></div>
          <div className="w-5 h-2 bg-secondary rounded-full"></div>
          <div className="w-5 h-2 bg-secondary rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
