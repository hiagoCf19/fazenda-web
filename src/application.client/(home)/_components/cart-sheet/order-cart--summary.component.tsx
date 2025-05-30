export function OrderSummary() {
  return (
    <>
      <h1 className="text-lg text-zinc-700 font-semibold">
        Resumo dos valores
      </h1>
      <div className="md:space-y-2">
        <div className="flex justify-between">
          <p className="md:text-base text-sm">Subtotal</p>
          <span className="md:text-base text-sm">Kz 480,00</span>
        </div>
        <div className="flex justify-between">
          <p className="md:text-base text-sm">Taxa de entrega</p>
          <span className="md:text-base text-sm">Kz 3.000,00</span>
        </div>
        <div className="flex justify-between">
          <p className="text-zinc-800 md:text-lg font-medium">Total</p>
          <span className="text-zinc-800 md:text-lg font-medium">
            Kz 3.480,00
          </span>
        </div>
      </div>
    </>
  );
}
