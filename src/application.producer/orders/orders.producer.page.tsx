import { Footer } from "../../application.client/(home)/_components/footer.component";
import { OrderCard } from "../../common/_components/card.order.component";
import { HeaderProducer } from "../_components/header.producer.component";
import { Separator } from "../../shadcn/ui/separator";
import { deliveredOrders, pendingOrders } from "../../mock-info";
import { MobileNavigator } from "../_components/navigator.producer.component";

export function OrdersProducerPage() {
  return (
    <section className="overflow-x-hidden h-screen">
      <HeaderProducer />

      <div className="px-4 md:px-12  space-y-8 ">
        <h3 className="text-zinc-600 font-semibold my-5 text-2xl">
          Meus pedidos
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {pendingOrders.map((order, i) => (
            <OrderCard order={order} key={i} />
          ))}
        </div>
        <Separator />
        {/* historico */}
        <div>
          <h3 className="text-zinc-600 font-semibold my-5 text-2xl">
            Histórico
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {deliveredOrders.map((order, i) => (
              <OrderCard order={order} key={i} className="w-full" />
            ))}
          </div>
        </div>
      </div>
      <MobileNavigator />

      <Footer />
    </section>
  );
}
