// wallet.history.modal.tsx
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "../../../shadcn/ui/dialog";
import { ScrollArea } from "../../../shadcn/ui/scroll-area";
import { WalletSummary } from "./wallet.sumary";
import { Separator } from "../../../shadcn/ui/separator";

interface Transaction {
  date: string;
  type: string;
  value: string;
  source: string;
}

interface WalletHistoryModalProps {
  transactions: Transaction[];
  children: React.ReactNode;
}

export function WalletHistoryModal({
  transactions,
  children,
}: WalletHistoryModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="!w-screen !h-screen !max-w-none !max-h-none !p-4 flex flex-col ">
        {" "}
        <DialogClose asChild>
          <button
            className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-700"
            aria-label="Fechar"
          >
            <X size={20} />
          </button>
        </DialogClose>
        <DialogHeader>
          <WalletSummary
            balance={1246}
            accountLastDigits="1234"
            onEdit={() => console.log("Editar conta")}
            onRequestTransfer={() => console.log("Solicitar transferência")}
          />
          <Separator />
        </DialogHeader>
        <DialogTitle>Histórico</DialogTitle>
        <ScrollArea className="h-full w-full mt-4 pr-4">
          {" "}
          <table className="w-full text-sm text-left text-zinc-600">
            <thead className="text-xs text-zinc-500 uppercase bg-zinc-50">
              <tr>
                <th className="px-4 py-2">Data</th>
                <th className="px-4 py-2">Tipo</th>
                <th className="px-4 py-2">Valor</th>
                <th className="px-4 py-2">Conta origem</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((t, i) => (
                <tr key={i} className="bg-white border-b hover:bg-zinc-50">
                  <td className="px-4 py-2">{t.date}</td>
                  <td className="px-4 py-2">{t.type}</td>
                  <td className="px-4 py-2">{t.value}</td>
                  <td className="px-4 py-2">{t.source}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
