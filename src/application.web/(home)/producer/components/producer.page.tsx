import { StarIcon } from "lucide-react";
import { useParams } from "react-router";
import BottomNav from "../../../_components/bottom-navigator-mobile.component";
import { Footer } from "../../_components/footer.component";
import ProducerImage from "./producer-image.component";
import DeliveryInfo from "./delivery-info.component";
import { UnauthenticatedHeader } from "../../../_components/unauthenticated-header.component";
import { HeaderAuthenticaded } from "../../../_components/header-authenticated.component";
import { useSession } from "../../../context/session.context";
import { SeeAllProducts } from "../../see-all/see-all-products.page";
import { mockProducts } from "../../../../mock/mock";

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
      { id: "3", name: "orgânicos" },
    ],
  },
  {
    id: "3",
    name: "farm fresh - organic",
    imageUrl: "/mock/fresh.png",
    deliveryFee: "7.50",
    deliveryTimeMinutes: 35,
    categories: [
      { id: "3", name: "orgânicos" },
      { id: "4", name: "frescos" },
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
      { id: "3", name: "orgânicos" },
      { id: "4", name: "frescos" },
    ],
  },
];

export default function ProducerPage() {
  // TODO: BUSCAR PRODUTOS DO PRODUTOR NO BANCO
  const producer_products = mockProducts;
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
          <div className="flex flex-col overflow-hidden sm:max-w-[35%] pt-5 z-50 relative p-5 rounded-t-xl">
            <div className="flex justify-between items-center ">
              {/* titulo */}
              <div className="flex items-center gap-[0.375rem] sm:justify-between">
                <div className="relative h-8 w-8">
                  <img //imagem que vem antes do titulo
                    src={produtor.imageUrl}
                    alt={produtor.name}
                    className="rounded-full  "
                  />
                </div>
                <h1 className="text-xl font-semibold text-secondary-foreground">
                  {produtor.name}
                </h1>
              </div>
              <div className=" gap-[3px]  bg-foreground text-zinc-50 px-2 py-1 rounded-full flex items-center ">
                <StarIcon
                  size={12}
                  className="fill-yellow-500 text-yellow-500"
                />
                <span className="font-semibold text-xs">5.0</span>
              </div>
            </div>
            {/* TEMPO E CUSTO DE ENTREGA */}
            <DeliveryInfo restaurant={produtor} />
            {/* tags */}
            <div className="flex gap-4 overflow-x-scroll [&::-webkit-scrollbar]:hidden sm:h-min  mt-3">
              {produtor.categories.map((category) => (
                <div
                  key={category.id}
                  className="bg-[#f4f4f4] min-w-[127px] p-1 rounded-sm text-center"
                >
                  <span className="text-xs text-muted-foreground">
                    {category.name}
                  </span>
                </div>
              ))}
            </div>
            <div className="py-5">
              <h1 className="text-lg font-medium">Sobre {produtor.name}</h1>
              <span className="text-sm text-muted-foreground text-justify ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                autem maxime nemo deleniti laborum dolorum rem saepe doloribus
                dolor aliquam earum, ex, cum quia obcaecati omnis. Quisquam nam
                pariatur repudiandae?
              </span>
            </div>
          </div>
        </div>
        <div className="p-12">
          <h1 className="text-zinc-800 text-3xl font-medium"></h1>

          <SeeAllProducts products={producer_products} />
        </div>

        <BottomNav />
        <Footer />
      </div>
    </section>
  );
}
