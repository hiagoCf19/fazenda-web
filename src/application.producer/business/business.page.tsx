import { HeaderProducer } from "../_components/header.producer.component";
import { Footer } from "../../application.client/(home)/_components/footer.component";
import AnalyticalOrder from "../(home)/_components/analytical/analytical.component";
import { PublicProfile } from "./components/public.profile";
import { MobileNavigator } from "../_components/navigator.producer.component";
import { BestSellingProduct } from "./components/best.selling.product";

const BusinessPage = () => {
  return (
    <section className="overflow-x-hidden min-h-screen bg-[#F8FAF8]">
      <HeaderProducer />
      <div className=" md:px-0 z-50 top-0 w-full bg-zinc-50 md:bg-[#E9F4E9] py-3 md:mb-8">
        <MobileNavigator />
      </div>
      
      <div className="md:mx-12 mx-4 space-y-6 py-6">
        <AnalyticalOrder />
        <BestSellingProduct />
        <PublicProfile
          imageUrl=""
          name="Nome do Produtor"
          rating={4.5}
          description="Descrição do produtor"
          address="Endereço do produtor"
        />
      </div>

      <Footer />
    </section>
  );
};

export default BusinessPage;
