import { Producer } from "../../../types/producer";
import { ChooseByCategory } from "./_components/choose-by-category.component";
import { ProductList } from "./_components/product-list.component";
import { ProducersList } from "./_components/producers-list.component";
import { useSession } from "../context/session.context";
import { HeaderAuthenticaded } from "../_components/header-authenticated.component";
import { Footer } from "./_components/footer.component";
import { UnauthenticatedHeader } from "../_components/unauthenticated-header.component";
import { Banners } from "./_components/banners.component";
import { useState } from "react";
import BottomNav from "../../common/_components/bottom-navigator-mobile.component";

export const ClientHomePage = () => {
  const { session } = useSession();
  const [showCategories, setShowCategories] = useState(false);
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
      category: "Vegetais",
      image: "/vegetable.png",
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
      category: "Vegetais",
      image: "/vegetable.png",
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
      category: "Vegetais",
      image: "/vegetable.png",
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
      category: "Vegetais",
      image: "/vegetable.png",
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
  ];
  const products = [
    {
      id: "1",
      name: "Milho verde",
      image: "/mock/milho.png",
      priceKg: "Kz 150/Kg",
      priceT: "Kz 130.000/T",
    },
    {
      id: "2",
      name: "Lentilha",
      image: "/mock/lentilha.png",
      priceKg: "Kz 180/Kg",
      priceT: "Kz 140.000/T",
    },
    {
      id: "3",
      name: "Bacalhau",
      image: "/mock/bacalhau.png",
      priceKg: "Kz 180/Kg",
      priceT: "Kz 140.000/T",
    },
    {
      id: "4",
      name: "Noz pecan",
      image: "/mock/castanha.png",
      priceKg: "Kz 2.850/Kg",
      priceT: "Kz 2.800.000/T",
    },
    {
      id: "5",
      name: "Melancia",
      image: "/mock/melancia.png",
      priceKg: "Kz 500/Kg",
      priceT: "Kz 300.000/T",
    },
    {
      id: "1",
      name: "Milho verde",
      image: "/mock/milho.png",
      priceKg: "Kz 150/Kg",
      priceT: "Kz 130.000/T",
    },
    {
      id: "2",
      name: "Lentilha",
      image: "/mock/lentilha.png",
      priceKg: "Kz 180/Kg",
      priceT: "Kz 140.000/T",
    },
    {
      id: "3",
      name: "Bacalhau",
      image: "/mock/bacalhau.png",
      priceKg: "Kz 180/Kg",
      priceT: "Kz 140.000/T",
    },
    {
      id: "6",
      name: "Cebola roxa",
      image: "/mock/cebola.png",
      priceKg: "Kz 96/Kg",
      priceT: "Kz 90.000/T",
    },
    {
      id: "6",
      name: "Cebola roxa",
      image: "/mock/cebola.png",
      priceKg: "Kz 96/Kg",
      priceT: "Kz 90.000/T",
    },
    {
      id: "6",
      name: "Cebola roxa",
      image: "/mock/cebola.png",
      priceKg: "Kz 96/Kg",
      priceT: "Kz 90.000/T",
    },
    {
      id: "3",
      name: "Bacalhau",
      image: "/mock/bacalhau.png",
      priceKg: "Kz 180/Kg",
      priceT: "Kz 140.000/T",
    },
  ];
  const producers: Producer[] = [
    {
      businessName: "Fazenda esperança",
      image: "/mock/vilela.png",
      assessment: 5,
      id: "1",
    },
    {
      businessName: "Fazenda Filter",
      image: "/mock/filter.png",
      assessment: 5,
      id: "2",
    },
    {
      businessName: "Farm fresh - Organic",
      image: "/mock/fresh.png",
      assessment: 5,
      id: "3",
    },
    {
      businessName: "Império das colunas",
      image: "/mock/imperio_col.png",
      assessment: 5,
      id: "4",
    },
    {
      businessName: "Chicken Farm",
      image: "/mock/chicken.png",
      assessment: 5,
      id: "5",
    },
    {
      businessName: "Fazenda Aviação",
      image: "/mock/aviacao.png",
      assessment: 5,
      id: "6",
    },
    {
      businessName: "Ouro da Serra",
      image: "/mock/ouro.png",
      assessment: 5,
      id: "7",
    },
    {
      businessName: "Farm fresh - Organic",
      image: "/mock/fresh.png",
      assessment: 5,
      id: "8",
    },

    {
      businessName: "Fazenda Filter",
      image: "/mock/filter.png",
      assessment: 5,
      id: "9",
    },
    {
      businessName: "Farm fresh - Organic",
      image: "/mock/fresh.png",
      assessment: 5,
      id: "10",
    },
    {
      businessName: "Império das colunas",
      image: "/mock/imperio_col.png",
      assessment: 5,
      id: "11",
    },
  ];

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
      <main className="md:mb-12 md:space-y-8 h-full">
        <Banners
          showCategories={showCategories}
          setShowCategories={setShowCategories}
        />
        {!showCategories && (
          <ChooseByCategory
            title="Explore por categoria"
            categories={categories}
          />
        )}

        <ProductList
          seeAllPath="best-selling-products"
          title="Mais pedidos"
          products={products}
        />

        <ProductList
          title="Novidades"
          seeAllPath={"news"}
          products={products}
        />

        <ProducersList title="Produtores" producers={producers} />
      </main>

      <BottomNav />
      <Footer />
    </section>
  );
};
