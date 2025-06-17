import { Pencil } from "lucide-react";
import { HeaderProducer } from "../../_components/header.producer.component";

const WalletPage = () => {
  const balance = 1246;
  const accountLastDigits = "1234";
  function onEdit() {
    console.log("onedit");
  }
  function onRequestTransfer() {
    console.log("onRequestTransfer");
  }
  return (
    <section className=" space-y-4">
      <HeaderProducer />
      <div className="mx-12 ">
        <h1 className="text-2xl  font-bold text-zinc-600">Carteira</h1>
        <div className="flex flex-col lg:flex-row gap-4  rounded-xl ">
          {/* Saldo Total */}
          <div className="flex-1 bg-white shadow rounded-lg p-4 ">
            <p className="text-sm text-zinc-500">Saldo total</p>
            <p className="text-2xl font-semibold text-zinc-800">
              {balance.toLocaleString("pt-BR")}k
            </p>
          </div>

          {/* Conta vinculada */}
          <div className="flex-1 bg-zinc-50 rounded-lg p-4 shadow flex justify-between items-center">
            <div>
              <p className="text-sm text-zinc-500">Conta vinculada</p>
              <p className="font-medium tracking-wider">
                **** **** **** {accountLastDigits}
              </p>
            </div>
            <button
              onClick={onEdit}
              className="bg-green-100 text-green-700 p-1 rounded-full hover:bg-green-200 transition"
              aria-label="Editar conta"
            >
              <Pencil size={16} />
            </button>
          </div>

          {/* Botão de transferência */}
          <div className="flex-1 bg-zinc-50 rounded-lg p-4 shadow flex items-center justify-center">
            <button
              onClick={onRequestTransfer}
              className="bg-ring hover:bg-green-600 text-white font-medium rounded-md py-2 px-4 w-full lg:w-auto transition"
            >
              Solicitar transferência
            </button>
          </div>
        </div>
        <span>Criando tabelas...</span>
      </div>
    </section>
  );
};

export default WalletPage;
