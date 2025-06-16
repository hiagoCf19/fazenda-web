import { Pencil, Wallet } from "lucide-react";
import { Separator } from "../../../shadcn/ui/separator";
import { WalletHistoryModal } from "./wellet.history.modal";

interface WalletCardProps {
  balance: number; // ex: 1246
  accountLastDigits: string; // ex: "1234"
  onEdit?: () => void;
  onRequestTransfer?: () => void;
  onViewHistory?: () => void;
}

const mockedTransactions = [
  {
    date: "01/02/25",
    type: "Recebido",
    value: "Kz 549,89",
    source: "Carteira Fazenda Online",
  },
  {
    date: "01/02/25",
    type: "Transferência",
    value: "Kz 1.450,00",
    source: "**** **** **** 1234",
  },
  {
    date: "01/02/25",
    type: "Recebido",
    value: "Kz 549,89",
    source: "Carteira Fazenda Online",
  },
  {
    date: "01/02/25",
    type: "Transferência",
    value: "Kz 1.450,00",
    source: "**** **** **** 1234",
  },
  {
    date: "01/02/25",
    type: "Recebido",
    value: "Kz 549,89",
    source: "Carteira Fazenda Online",
  },
  {
    date: "01/02/25",
    type: "Transferência",
    value: "Kz 1.450,00",
    source: "**** **** **** 1234",
  },
  {
    date: "01/02/25",
    type: "Recebido",
    value: "Kz 549,89",
    source: "Carteira Fazenda Online",
  },
  {
    date: "01/02/25",
    type: "Transferência",
    value: "Kz 1.450,00",
    source: "**** **** **** 1234",
  },
  // ... demais transações mockadas
];
export const WalletCard = ({
  balance,
  accountLastDigits,
  onEdit,
  onRequestTransfer,
}: //onViewHistory,
WalletCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow p-4 w-full ">
      {/* Header: ícone e saldo */}
      <div className="flex items-center gap-3 max-w-sm">
        <div className="bg-green-100 text-green-600 rounded-full p-2">
          <Wallet size={24} />
        </div>
        <div>
          <p className="text-sm text-zinc-500">Sua carteira</p>
          <p className="text-2xl font-semibold text-zinc-800">
            {balance.toLocaleString("pt-BR")}k
          </p>
        </div>
      </div>

      {/* Conta vinculada */}
      <div className="flex justify-between items-center mt-6">
        <div>
          <p className="text-sm text-zinc-500">Conta vinculada</p>
          <p className="font-medium tracking-wider">
            **** **** **** {accountLastDigits}
          </p>
        </div>

        <button onClick={onEdit} className="text-green-600 hover:opacity-80">
          <Pencil size={16} />
        </button>
      </div>
      <Separator />
      {/* Ações */}
      <div className="mt-4 flex flex-col gap-2">
        <button
          onClick={onRequestTransfer}
          className="bg-ring text-white rounded-full py-2 font-medium hover:bg-green-500 transition"
        >
          Solicitar transferência
        </button>

        <WalletHistoryModal transactions={mockedTransactions}>
          <button className="mt-4 border border-zinc-300 rounded-full py-2 font-medium text-zinc-700 hover:bg-zinc-100 transition w-full">
            Histórico de transferências
          </button>
        </WalletHistoryModal>
      </div>
    </div>
  );
};
