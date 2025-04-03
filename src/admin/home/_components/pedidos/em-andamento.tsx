import { Eye } from "lucide-react";
import { Button } from "../../../../shadcn/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../shadcn/ui/table";
enum Status {
  PENDENTE = "Pendente",
  PROCESSANDO = "Processando",
  ENTREGA_SOLICITADA = "Entrega solicitada",
  ENVIADO = "Enviado",
}
export const EmAndamento = () => {
  const orders = [
    {
      numero: "#321",
      cliente: "Carlos Mendes da Silva Filho",
      valor: "Kz 1.847,50",
      produtor: "Fazenda Esperança",
      status: Status.PENDENTE,
    },
    {
      numero: "#321",
      cliente: "Fernando Oliveira de Souza",
      valor: "Kz 3.480,00",
      produtor: "Fazenda Filter",
      status: Status.PROCESSANDO,
    },
    {
      numero: "#321",
      cliente: "Lucas Almeida Gomes",
      valor: "Kz 2.921,50",
      produtor: "Farm Fresh - Organic",
      status: Status.PROCESSANDO,
    },
    {
      numero: "#321",
      cliente: "Fernando Oliveira de Souza",
      valor: "Kz 850,00",
      produtor: "ChickenFarm",
      status: Status.PROCESSANDO,
    },
    {
      numero: "#321",
      cliente: "Roberto Lima",
      valor: "Kz 4.100,00",
      produtor: "Fazenda Aviação",
      status: Status.PROCESSANDO,
    },
    {
      numero: "#321",
      cliente: "Carlos Mendes da Silva Filho",
      valor: "Kz 1.847,50",
      produtor: "Ouro da Serra",
      status: Status.ENTREGA_SOLICITADA,
    },
    {
      numero: "#321",
      cliente: "Fernando Oliveira de Souza",
      valor: "Kz 3.480,00",
      produtor: "Farm Fresh - Organic",
      status: Status.ENTREGA_SOLICITADA,
    },
    {
      numero: "#321",
      cliente: "Lucas Almeida Gomes",
      valor: "Kz 2.921,50",
      produtor: "Fazenda Esperança",
      status: Status.ENVIADO,
    },
    {
      numero: "#321",
      cliente: "Fernando Oliveira de Souza",
      valor: "Kz 850,00",
      produtor: "Fazenda Filter",
      status: Status.ENVIADO,
    },
    {
      numero: "#321",
      cliente: "Roberto Lima",
      valor: "Kz 4.100,00",
      produtor: "ChickenFarm",
      status: Status.ENVIADO,
    },
  ];

  return (
    <Table>
      <TableCaption className="text-end space-x-2">
        <Button>1</Button>
        <Button variant={"outline"}>2</Button>
        <Button variant={"outline"}>3</Button>
        <Button variant={"outline"}>4</Button>
        <Button variant={"outline"}>5</Button>
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Número</TableHead>
          <TableHead>Cliente</TableHead>
          <TableHead className="text-left">Valor</TableHead>
          <TableHead>Produtor</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="w-[350px] text-center">Ação</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((delivery, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{delivery.numero}</TableCell>
            <TableCell>{delivery.cliente}</TableCell>
            <TableCell className="text-left">{delivery.valor}</TableCell>
            <TableCell>{delivery.produtor}</TableCell>
            <TableCell>
              <p
                className={` p-2 px-4 w-min rounded-4xl ${
                  delivery.status === Status.PENDENTE
                    ? "bg-[#A0F4B1]"
                    : delivery.status === Status.PROCESSANDO
                    ? "bg-[#FE70004D]"
                    : delivery.status === Status.ENTREGA_SOLICITADA
                    ? "bg-[#FF60584D]"
                    : "bg-primary text-zinc-50"
                }`}
              >
                {delivery.status}
              </p>
            </TableCell>

            <TableCell className="space-x-2 justify-end items-end flex">
              <Button variant={"outline"} className="">
                <Eye />
                Visualizar
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
