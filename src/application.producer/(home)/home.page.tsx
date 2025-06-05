import { Footer } from "../../application.client/(home)/_components/footer.component";
import { useSession } from "../../application.client/context/session.context";
import { Separator } from "../../shadcn/ui/separator";
import { HeaderProducer } from "../_components/header.producer.component";

import { BannerProducer } from "./_components/banner.component";
import { PendingApprovalComponent } from "./pending-approval/pendding-approval.page";
import AnalyticalOrder from "./_components/analytical/analytical.component";
import { OrderCard } from "../../common/_components/card.order.component";
import { pendingOrders } from "../../mock-info";
import { MobileNavigator } from "../_components/navigator.producer.component";

export function HomePageProducer() {
  const { session } = useSession();
  if (!session?.user.is_approved) return <PendingApprovalComponent />;

  return (
    <section className="overflow-x-hidden h-screen">
      <HeaderProducer />
      <div className="md:mx-12 mx-4 space-y-8 min-h-[50vh] ">
        <BannerProducer />
        <Separator />
        <div className="md:flex gap-12 hidden">
          {pendingOrders.map((order, i) => (
            <OrderCard order={order} key={i} className="w-1/3" />
          ))}
        </div>

        <AnalyticalOrder />
      </div>
      <MobileNavigator />
      <Footer />
    </section>
  );
}
