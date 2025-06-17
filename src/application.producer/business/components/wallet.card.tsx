import { Pencil, Wallet } from "lucide-react";
import { Separator } from "../../../shadcn/ui/separator";
import { Button } from "../../../shadcn/ui/button";
import { Link } from "react-router";

interface WalletCardProps {
  balance: number; // ex: 1246
  accountLastDigits: string; // ex: "1234"
  onEdit?: () => void;
  onRequestTransfer?: () => void;
  onViewHistory?: () => void;
}

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
        <div className="bg-primary text-zinc-50 rounded-full p-2">
          <Wallet size={24} />
        </div>
        <div>
          <p className="text-sm text-zinc-500">Sua carteira</p>
          <p className="text-4xl font-bold text-zinc-800">
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
        <Button
          onClick={onRequestTransfer}
          className="bg-secondary text-secondary-foreground rounded-full py-6 font-bold hover:bg-green-500 transition"
        >
          Solicitar transferência
        </Button>

        <Link to="/producer/business/wallet">
          <Button className="w-full bg-zinc-50 border shadow text-secondary-foreground rounded-full py-6 font-bold hover:bg-green-500 transition">
            Histórico de transferências
          </Button>
        </Link>
      </div>
    </div>
  );
};
