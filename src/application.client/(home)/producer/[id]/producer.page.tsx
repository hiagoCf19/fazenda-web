import { StarIcon } from "lucide-react";
import { Link, useParams } from "react-router";
import { Footer } from "../../_components/footer.component";

import { UnauthenticatedHeader } from "../../../_components/unauthenticated-header.component";
import { HeaderAuthenticaded } from "../../../_components/header-authenticated.component";
import { useSession } from "../../../context/session.context";
import ProducerImage from "../components/producer-image.component";
import DeliveryInfo from "../components/delivery-info.component";
import { SeeAllProducts } from "../../see-all/see-all-products.page";
import { mockProducts } from "../../../../mock/mock";
import BottomNav from "../../../../common/_components/bottom-navigator-mobile.component";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../shadcn/ui/avatar";

// Array de produtores
const produtores = [
  {
    id: "1",
    name: "fazenda esperança",
    imageUrl: "/mock/vilela.png",
    deliveryFee: "6.50",
    deliveryTimeMinutes: 30,
    categories: [
      { id: "1", name: "fazenda" },
      { id: "2", name: "produtos" },
    ],
  },
  {
    id: "2",
    name: "fazenda filter",
    imageUrl: "/mock/filter.png",
    deliveryFee: "5.00",
    deliveryTimeMinutes: 25,
    categories: [
      { id: "1", name: "fazenda" },
      { id: "3", name: "Vegetais" },
    ],
  },
  {
    id: "3",
    name: "farm fresh - organic",
    imageUrl: "/mock/fresh.png",
    deliveryFee: "7.50",
    deliveryTimeMinutes: 35,
    categories: [
      { id: "3", name: "Vegetais" },
      { id: "4", name: "Frutas" },
      { id: "5", name: "Peixes" },
    ],
  },
  {
    id: "4",
    name: "império das colunas",
    imageUrl: "/mock/imperio_col.png",
    deliveryFee: "8.00",
    deliveryTimeMinutes: 40,
    categories: [{ id: "5", name: "tradicional" }],
  },
  {
    id: "5",
    name: "chicken farm",
    imageUrl: "/mock/chicken.png",
    deliveryFee: "5.50",
    deliveryTimeMinutes: 30,
    categories: [
      { id: "6", name: "aves" },
      { id: "7", name: "ovos" },
    ],
  },
  {
    id: "6",
    name: "fazenda aviação",
    imageUrl: "/mock/aviacao.png",
    deliveryFee: "9.00",
    deliveryTimeMinutes: 45,
    categories: [{ id: "8", name: "premium" }],
  },
  {
    id: "7",
    name: "ouro da serra",
    imageUrl: "/mock/ouro.png",
    deliveryFee: "7.00",
    deliveryTimeMinutes: 35,
    categories: [
      { id: "9", name: "serra" },
      { id: "10", name: "especiais" },
    ],
  },
  {
    id: "8",
    name: "farm fresh - organic",
    imageUrl: "/mock/fresh.png",
    deliveryFee: "7.50",
    deliveryTimeMinutes: 35,
    categories: [
      { id: "3", name: "Vegetais" },
      { id: "4", name: "Frutas" },
      { id: "5", name: "Peixes" },
    ],
  },
];

export default function ProducerPage() {
  // Obtém o slug da URL
  const { slug } = useParams<{ slug: string }>();

  // Normaliza o slug para comparação

  // Encontra o produtor correspondente ao slug da URL
  const produtor =
    produtores.find((p) => {
      return p.id === slug;
    }) || produtores[0]; // Fallback para o primeiro produtor se nenhum for encontrado
  const { session } = useSession();
  return (
    <section className="md:p-12 overflow-x-hidden relative min-h-screen">
      {!session ? (
        <UnauthenticatedHeader />
      ) : (
        <HeaderAuthenticaded session={session} />
      )}
      <div
        className={`w-full ${
          session ? "md:h-[129px] h-[88px]" : "md:h-0 h-[25px]"
        } `}
      />
      <div className="">
        <div className="sm:flex sm:px-20 mt-6 sm:mt-10 gap-12">
          <ProducerImage produtor={produtor} />
          <div className="flex flex-col overflow-hidden sm:max-w-[35%] pt-5 relative p-5 rounded-t-xl">
            <div className="flex justify-between items-center ">
              {/* titulo */}
              <div className="flex items-center gap-[0.375rem] sm:justify-between">
                <Avatar className="size-10">
                  <AvatarFallback className="bg-secondary text-secondary-foreground ">
                    CN
                  </AvatarFallback>
                  <AvatarImage src={session?.user.phone} />
                </Avatar>
                <h1 className="text-xl font-semibold text-secondary-foreground">
                  {produtor.name}
                </h1>
              </div>
              <div className=" gap-[3px]  text-zinc-50 px-2 py-1 rounded-full flex items-center ">
                <StarIcon
                  size={12}
                  className="fill-yellow-500 text-yellow-500"
                />
                <span className="font-semibold text-zinc-800 text-xs">5.0</span>
              </div>
            </div>
            {/* TEMPO E CUSTO DE ENTREGA */}
            <DeliveryInfo restaurant={produtor} />
            {/* tags */}
            <h3 className="mt-5 text-xl font-semibold text-zinc-700">
              Produtos que oferta
            </h3>
            <div className="flex gap-4 overflow-x-scroll [&::-webkit-scrollbar]:hidden sm:h-min  mt-3">
              {produtor.categories.map((category) => (
                <div
                  key={category.id}
                  className="bg-[#E1F3E4] min-w-[127px] p-1 rounded-sm text-center"
                >
                  <span className="text-sm text-muted-foreground">
                    {category.name}
                  </span>
                </div>
              ))}
            </div>
            <div className="py-5">
              <h1 className="text-lg font-medium text-zinc-800">
                Sobre {produtor.name}
              </h1>
              <span className="text-sm text-muted-foreground text-justify ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                autem maxime nemo deleniti laborum dolorum rem saepe doloribus
                dolor aliquam earum, ex, cum quia obcaecati omnis. Quisquam nam
                pariatur repudiandae?
              </span>
            </div>
            <div className="">
              <h1 className="text-lg font-medium text-zinc-800">Endereço</h1>
              <span className="text-sm text-muted-foreground text-justify ">
                Talatona, Via c3, zona INST4 no Loteamento <br /> Palncas negras
                35
              </span>
            </div>
          </div>
        </div>
        <div className="p-12">
          <div className="flex justify-between items-center">
            <h1 className="text-zinc-800 text-3xl font-medium py-6">
              Produtos
            </h1>
            <Link
              to={`/see-all/products/producer/1`}
              className="text-[#FE7000]"
            >
              Ver todos
            </Link>
          </div>
          <SeeAllProducts products={mockProducts} />
        </div>

        <BottomNav />
        <Footer />
      </div>
    </section>
  );
}
