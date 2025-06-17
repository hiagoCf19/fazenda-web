import { HeaderProducer } from "../_components/header.producer.component";
import { Footer } from "../../application.client/(home)/_components/footer.component";
import AnalyticalOrder from "../(home)/_components/analytical/analytical.component";
import { PublicProfile } from "./components/public.profile";
import { MobileNavigator } from "../_components/navigator.producer.component";
import { BestSellingProduct } from "./components/best.selling.product";
import { WalletCard } from "./components/wallet.card";
import { OrdersChart } from "./components/orders.chart";
import { usePublicProfile } from "../../hooks/use-public-profile";

const BusinessPage = () => {
  const { data: profile } = usePublicProfile();

  return (
    <section className=" overflow-x-hidden h-screen">
      <HeaderProducer />

      <div className="md:mx-12 mx-4 py-6  space-y-6">
        {/* Primeira linha - 3 componentes pequenos lado a lado */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <WalletCard
            balance={1246}
            accountLastDigits="1234"
            onEdit={() => console.log("Editar conta")}
            onRequestTransfer={() => console.log("Solicitar transferência")}
            onViewHistory={() => console.log("Ver histórico")}
          />

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <OrdersChart />
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-100">
            <BestSellingProduct />
          </div>
        </div>

        {/* Segunda linha - Analytics principal */}
        <div className="w-full">
          <AnalyticalOrder />
        </div>

        {/* Perfil público (com dados do mock via TanStack) */}
        {profile && (
          <div className="w-full">
            <PublicProfile
              imageUrl={profile.imageUrl}
              name={profile.name}
              rating={profile.rating}
              description={profile.description}
              address={profile.address}
              //onEdit={() => console.log("Editar perfil")}
            />
          </div>
        )}
      </div>

      <MobileNavigator />
      <Footer />
    </section>
  );
};

export default BusinessPage;
