
"use client";

import { useSession } from "../context/session.context";
import { HeaderAuthenticaded } from "../_components/header-authenticated.component";
import { UnauthenticatedHeader } from "../_components/unauthenticated-header.component";
import { Footer } from "./_components/footer.component";
import { Banners } from "./_components/banners.component";
import { ChooseByCategory } from "./_components/choose-by-category.component";
import { ProductList } from "./_components/product-list.component";
import { ProducersList } from "./_components/producers-list.component";
import BottomNav from "../../common/_components/bottom-navigator-mobile.component";
import { useState } from "react";
import { useCategories } from "../../hooks/use.categories";
import { useProducts } from "../../hooks/use.products";
import { useProducers } from "../../hooks/producer.hook";

export const ClientHomePage = () => {
  const { session } = useSession();
  const [showCategories, setShowCategories] = useState(false);

  const {
    data: categories,
    isLoading: loadingCategories,
    isError: errorCategories,
  } = useCategories();

  const {
    data: products,
    isLoading: loadingProducts,
    isError: errorProducts,
  } = useProducts();

  const {
    data: producers,
    isLoading: loadingProducers,
    isError: errorProducers,
  } = useProducers();

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
          <>
            {loadingCategories && <p>Carregando categorias...</p>}
            {errorCategories && <p>Erro ao carregar categorias</p>}
            {categories && (
              <ChooseByCategory
                title="Explore por categoria"
                categories={categories}
              />
            )}
          </>
        )}

        {loadingProducts && <p>Carregando produtos...</p>}
        {errorProducts && <p>Erro ao carregar produtos</p>}
        {products && (
          <>
            <ProductList
              seeAllPath="best-selling-products"
              title="Mais pedidos"
              products={products}
            />
            <ProductList
              title="Novidades"
              seeAllPath="news"
              products={products}
            />
          </>
        )}

        {loadingProducers && <p>Carregando produtores...</p>}
        {errorProducers && <p>Erro ao carregar produtores</p>}
        {producers && (
          <ProducersList title="Produtores" producers={producers} />
        )}
      </main>

      <BottomNav />
      <Footer />
    </section>
  );
};
