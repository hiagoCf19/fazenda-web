import { Eye, Play } from "lucide-react";
import { Button } from "../../../shadcn/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../shadcn/ui/table";
import { useDeliveries } from "../../../hooks/use.deliveries";

export function Pendentes() {
  const { data: deliveries = [], isLoading, isError } = useDeliveries();

  if (isLoading) return <p>Carregando entregas...</p>;
  if (isError) return <p>Erro ao carregar entregas.</p>;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Número</TableHead>
          <TableHead>Cliente</TableHead>
          <TableHead>Realizado em</TableHead>
          <TableHead>Entrega</TableHead>
          <TableHead className="text-right">Valor</TableHead>
          <TableHead className="w-[350px] text-center">Ação</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {deliveries.map((delivery, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{delivery.numero}</TableCell>
            <TableCell>{delivery.cliente}</TableCell>
            <TableCell>{delivery.realizadoEm}</TableCell>
            <TableCell>{delivery.entrega}</TableCell>
            <TableCell className="text-right">{delivery.valor}</TableCell>
            <TableCell className="space-x-2 justify-end items-end flex">
              <Button>
                <Play size={20} />
                Iniciar
              </Button>
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
}
