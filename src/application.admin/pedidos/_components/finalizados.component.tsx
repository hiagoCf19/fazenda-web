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
import { useFinalizados } from "../../../hooks/use.deliveries";
import { Status } from "../../../service/finalizados.service";


export const Finalizados = () => {
  const { data: orders = [] } = useFinalizados();

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={`w-5 h-5 ${
            index < rating ? "fill-yellow-400 text-yellow-400" : "text-zinc-400"
          }`}
        />
      ))}
    </div>
  );

  return (
    <Table>
      <TableCaption className="text-end space-x-2 py-4">
        <Button>1</Button>
        <Button variant="outline">2</Button>
        <Button variant="outline">3</Button>
        <Button variant="outline">4</Button>
        <Button variant="outline">5</Button>
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
        {orders.map((order, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{order.numero}</TableCell>
            <TableCell>{order.cliente}</TableCell>
            <TableCell className="text-left">{order.valor}</TableCell>
            <TableCell>{order.produtor}</TableCell>
            <TableCell>
              <p
                className={`p-2 px-4 w-min rounded-4xl ${
                  order.status === Status.ENTREGUE
                    ? "bg-[#20202033]"
                    : "bg-[#FF605899]"
                }`}
              >
                {order.status}
              </p>
            </TableCell>
            <TableCell>
              <StarRating rating={order.avaliacao} />
            </TableCell>
            <TableCell className="space-x-2 flex justify-center">
              <Button variant="outline">
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
