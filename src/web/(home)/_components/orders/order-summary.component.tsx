export function OrderSummary() {
  return (
    <>
      <h1 className="text-lg text-zinc-700 font-semibold">
        Resumo dos valores
      </h1>
      <div className="space-y-2">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <span>Kz 480,00</span>
        </div>
        <div className="flex justify-between">
          <p>Taxa de entrega</p>
          <span>Kz 3.000,00</span>
        </div>
        <div className="flex justify-between">
          <p className="text-zinc-800 text-lg font-medium">Total</p>
          <span className="text-zinc-800 text-lg font-medium">Kz 3.480,00</span>
        </div>
      </div>
    </>
  );
}
