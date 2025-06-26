import { Pencil } from "lucide-react";
import { HeaderProducer } from "../../_components/header.producer.component";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../shadcn/ui/table";
import { useWalletTransactions } from "../../../hooks/use.wallet.transactions";
import { Skeleton } from "../../../shadcn/ui/skeleton";

const WalletPage = () => {
  const balance = 1246;
  const accountLastDigits = "1234";

  const {
    data: transactions,
    isLoading,
    isError,
    error,
  } = useWalletTransactions();

  function onEdit() {
    console.log("onEdit: Editar conta vinculada");
  }
  function onRequestTransfer() {
    console.log("onRequestTransfer: Solicitar transferência");
  }

  const formatCurrency = (value: number, currency: string) => {
    return `${currency} ${value.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  return (
    <section className="space-y-4">
      <HeaderProducer />
      <div className="mx-12">
        <h1 className="text-2xl font-bold text-zinc-600 mb-4">Carteira</h1>
        <div className="flex flex-col lg:flex-row gap-4 rounded-xl mb-8">
          {/* Saldo Total */}
          <div className="flex-1 bg-white shadow rounded-lg p-4">
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
              className="bg-green-500 hover:bg-green-600 text-white font-medium rounded-md py-2 px-4 w-full lg:w-auto transition"
            >
              Solicitar transferência
            </button>
          </div>
        </div>

        {/* Seção de Histórico */}
        <h2 className="text-xl font-bold text-zinc-600 mb-4">Histórico</h2>
        <div className="bg-white p-4 rounded-lg shadow overflow-hidden">
          <Table>
            <TableHeader className=" ">
              <TableRow>
                {/* Data: Largura fixa, alinhado à esquerda */}
                <TableHead className="w-[100px] text-zinc-600 text-left">
                  Data
                </TableHead>
                {/* Tipo: Largura mais adaptável, mas ainda na esquerda */}
                <TableHead className="text-zinc-600 text-left">Tipo</TableHead>
                {/* Valor: Alinhado à direita, sem largura fixa para permitir que o 'Conta origem' empurre */}
                <TableHead className="text-left text-zinc-600">Valor</TableHead>
                {/* Conta origem: Esta coluna deve absorver o espaço restante */}
                <TableHead className="text-zinc-600 text-left">
                  Conta origem
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                Array.from({ length: 5 }).map((_, i) => (
                  <TableRow key={i}>
                    <TableCell className="w-[100px]">
                      {" "}
                      <Skeleton className="h-4 w-[80px]" />
                    </TableCell>
                    <TableCell>
                      {" "}
                      <Skeleton className="h-4 w-[100px]" />
                    </TableCell>
                    <TableCell className="text-right">
                      <Skeleton className="h-4 w-[120px] ml-auto" />
                    </TableCell>
                    <TableCell>
                      {" "}
                      <Skeleton className="h-4 w-[150px]" />
                    </TableCell>
                  </TableRow>
                ))
              ) : isError ? (
                <TableRow>
                  <TableCell colSpan={4} className="text-center text-red-500">
                    Erro ao carregar transações: {error?.message}
                  </TableCell>
                </TableRow>
              ) : (
                transactions?.map((transaction) => (
                  <TableRow key={transaction.id} className="hover:bg-zinc-50">
                    <TableCell className="w-[100px] font-medium text-zinc-800 text-left">
                      {transaction.date}
                    </TableCell>
                    <TableCell className="text-zinc-700 text-left">
                      {transaction.type}
                    </TableCell>
                    <TableCell
                      className={`text-left font-semibold ${
                        transaction.type === "Recebido"
                          ? "text-zinc-800"
                          : "text-zinc-800"
                      }`}
                    >
                      {formatCurrency(transaction.value, transaction.currency)}
                    </TableCell>
                    <TableCell className="text-zinc-700 text-left">
                      {transaction.accountOrigin}
                    </TableCell>
                  </TableRow>
                ))
              )}
              {!isLoading && !isError && transactions?.length === 0 && (
                <TableRow>
                  <TableCell colSpan={4} className="text-center text-zinc-500">
                    Nenhuma transação encontrada.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default WalletPage;
