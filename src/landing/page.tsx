import { Search } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { ChooseByCategory } from "./_components/choose-by-category";

export const LandingPage = () => {
  const categories = [
    {
      category: "Vegetais",
      image: "/carrot.png",
    },
    {
      category: "Frutas",
      image: "/apple.png",
    },
    {
      category: "Carnes",
      image: "/meat.png",
    },
    {
      category: "Peixes",
      image: "/fish.png",
    },
    {
      category: "Verduras",
      image: "/vegetable.png",
    },
  ];
  const products = [
    {
      id: "1",
      name: "Milho verde",
      image:
        "https://s3-alpha-sig.figma.com/img/07a5/d27c/92c2a42fbde067277844b801722c9eea?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SMGotVqR7Kwt6rIh-3OoheDt4ze6pZrTgXZ96EaCBu9~Lo4YSwfJ7rcRoM0BAx6mPl2wlaMZdOzw7Zijhc41LWGzoD2I80k3nHqb5Vs6aGYtGDsfxf6cA2MQXAn8DtWAt7SFo4k7FDHfK26OMTIIPpJx8PA5oDj4Z6CNUQQgODuqjqoPLLGWjtB1WsZbfdseldipMvfGGAojFsKCHbjLCPG1Av883AHVHx6xFeTAIiS8YoK~1QlA9cyC0aVxsXqBNo7AsqVOdH-JUn97LTJm3zJsCrHCg7p~yVPRgpg-IHQDgIKV09tppFQb88ozthlr2H04wzkE6Bput~cQIgkp5A__",
      price: "Kz 150/kg",
      category: "Verduras",
    },
  ];
  return (
    <section className="p-12 ">
      <header className="bg-foreground/8 -m-12 p-12 mb-12">
        <div className="flex justify-between">
          <img src="full_logo.svg" alt="Fazenda online" />
          <Button className="bg-secondary text-secondary-foreground">
            Acessar
          </Button>
        </div>
        <div className="flex justify-between">
          <img src="/vegetables_1.png" alt="Cesta de vegetais" />
          <div className="flex flex-col space-y-4 text-center  items-center">
            <h2 className="text-primary text-4xl font-semibold">
              Do campo para a sua mesa
            </h2>
            <p className="text-secondary-foreground text-2xl font-semibold">
              Alimentos frescos e naturais, diretamente de quem cultiva
            </p>
            <div className="bg-white flex items-center  space-x-3 rounded-4xl border w-full">
              <Search className="ml-2" />
              <Input
                type="text"
                className="flex-1 p-2 focus:ring-0 focus:outline-0 focus-visible:border-none focus-visible:ring-none focus-visible:ring-0 shadow-none"
              />
              <div className="">
                <Button className="bg-secondary-foreground hover:bg-secondary-foreground/70 py-6 px-12 rounded-4xl">
                  Pesquisar
                </Button>
              </div>
            </div>
          </div>
          <img src="/vegetables_2.png" alt="Prato de vegetais" />
        </div>
      </header>
      <main className="mb-12 space-y-8">
        <div className="flex gap-6 ">
          <img src="/banner2.png" alt="" className="flex-1" />
          <img src="/banner1.png" alt="" className="flex-1" />
          <img src="/banner3.png" alt="" className="flex-1" />
        </div>
        <ChooseByCategory
          title="Explore por categoria"
          categories={categories}
        />
        <div className="space-y-4">
          <h2 className="text-zinc-800 font-semibold text-2xl">{"title"}</h2>
          <div className="flex gap-8">
            {products.map((product, i) => (
              <div className="flex flex-col space-y-2">
                <div key={i} className="bg-[#E1F3E4] rounded-3xl size-48">
                  <img
                    src={product.image}
                    alt={product.category}
                    className="aspect-square"
                  />
                </div>
                <p className="text-center text-lg text-zinc-800 font-medium">
                  {product.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <div>a</div>
    </section>
  );
};
