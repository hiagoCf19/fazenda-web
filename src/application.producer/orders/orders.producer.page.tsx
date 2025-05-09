import { MobileNavigator } from "../_components/navigator.component";

export function ProducerOrdersPage() {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Meus Pedidos</h1>
        <div className="flex flex-col gap-4">
          <p>Em breve...</p>
        </div>
      </div>
      <MobileNavigator />
    </div>
  );
}
