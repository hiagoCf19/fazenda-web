import { Eye, Star } from "lucide-react";
import { Button } from "../../../shadcn/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../shadcn/ui/table";
enum Status {
  ENTREGUE = "Entregue",
  CANCELADO = "Cancelado",
}
export const Finalizados = () => {
  const orders = [
    {
      numero: "#321",
      cliente: "Carlos Mendes da Silva Filho",
      valor: "Kz 1.847,50",
      produtor: "Fazenda Esperança",
      avaliacao: 0,
      status: Status.ENTREGUE,
    },
    {
      numero: "#321",
      cliente: "Fernando Oliveira de Souza",
      valor: "Kz 3.480,00",
      produtor: "Fazenda Filter",
      avaliacao: 0,
      status: Status.CANCELADO,
    },
    {
      numero: "#321",
      cliente: "Lucas Almeida Gomes",
      valor: "Kz 2.921,50",
      produtor: "Farm Fresh - Organic",
      avaliacao: 4,
      status: Status.ENTREGUE,
    },
    {
      numero: "#321",
      cliente: "Fernando Oliveira de Souza",
      valor: "Kz 850,00",
      produtor: "ChickenFarm",
      avaliacao: 3,
      status: Status.ENTREGUE,
    },
    {
      numero: "#321",
      cliente: "Roberto Lima",
      valor: "Kz 4.100,00",
      produtor: "Fazenda Aviação",
      avaliacao: 5,
      status: Status.ENTREGUE,
    },
    {
      numero: "#321",
      cliente: "Carlos Mendes da Silva Filho",
      valor: "Kz 1.847,50",
      produtor: "Ouro da Serra",
      avaliacao: 0,
      status: Status.CANCELADO,
    },
    {
      numero: "#321",
      cliente: "Fernando Oliveira de Souza",
      valor: "Kz 3.480,00",
      produtor: "Farm Fresh - Organic",
      avaliacao: 5,
      status: Status.ENTREGUE,
    },
    {
      numero: "#321",
      cliente: "Lucas Almeida Gomes",
      valor: "Kz 2.921,50",
      produtor: "Fazenda Esperança",
      avaliacao: 4,
      status: Status.ENTREGUE,
    },
    {
      numero: "#321",
      cliente: "Fernando Oliveira de Souza",
      valor: "Kz 850,00",
      produtor: "Fazenda Filter",
      avaliacao: 0,
      status: Status.CANCELADO,
    },
    {
      numero: "#321",
      cliente: "Roberto Lima",
      valor: "Kz 4.100,00",
      produtor: "ChickenFarm",
      avaliacao: 5,
      status: Status.ENTREGUE,
    },
  ];
  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={`w-5 h-5 ${
              index < rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-zinc-400"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <Table>
      <TableCaption className="text-end space-x-2 py-4">
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
          <TableHead>Avaliação</TableHead>
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
                  delivery.status === Status.ENTREGUE
                    ? "bg-[#20202033]"
                    : "bg-[#FF605899]"
                }`}
              >
                {delivery.status}
              </p>
            </TableCell>
            <TableCell>
              <StarRating rating={delivery.avaliacao} />
            </TableCell>

            <TableCell className="space-x-2 flex justify-center">
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
