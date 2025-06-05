import { Eye } from "lucide-react";
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
import { useInProgressOrders } from "../../../hooks/use.deliveries";
import { Status } from "../../../service/em-andamento.service";

export const EmAndamento = () => {
  const { data: orders = [], isLoading } = useInProgressOrders();

  if (isLoading) return <p>Carregando...</p>;

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
                className={`p-2 px-4 w-min rounded-4xl ${
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
              <Button variant={"outline"}>
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
