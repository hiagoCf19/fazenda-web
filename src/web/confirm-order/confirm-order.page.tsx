import { DeliveryOptions } from "./_components/delivery-options.component";

export function ConfirmOrderPage() {
  return (
    <div className="p-12">
      <header className="flex w-full justify-center items-center border-b-2 pb-4">
        <img src="/full_logo.svg" alt="" />
      </header>
      <main className="space-y-12 flex flex-col justify-center items-center py-12">
        <h1 className="text-secondary-foreground text-3xl">
          Finalize seu pedido
        </h1>
        <div className="grid grid-cols-3 w-full gap-4">
          <DeliveryOptions />
          <div className="border">2</div>
          <div className="border">3</div>
        </div>
      </main>
    </div>
  );
}
