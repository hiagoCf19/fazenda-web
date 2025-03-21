import { Eye, Play } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";

const deliveries = [
  {
    numero: "#321",
    cliente: "Carlos Mendes da Silva Filho",
    realizadoEm: "13:45 10/08/2024",
    entrega: "Padrão",
    valor: "Kz 1.947,50",
  },
  {
    numero: "#321",
    cliente: "Fernando Oliveira de Souza",
    realizadoEm: "10:30 10/08/2024",
    entrega: "Padrão",
    valor: "Kz 3.480,00",
  },
  {
    numero: "#321",
    cliente: "Lucas Almeida Gomes",
    realizadoEm: "09:44 10/08/2024",
    entrega: "Express",
    valor: "Kz 2.921,50",
  },
  {
    numero: "#321",
    cliente: "Fernando Oliveira de Souza",
    realizadoEm: "08:27 10/08/2024",
    entrega: "Levantar na loja",
    valor: "Kz 850,00",
  },
  {
    numero: "#321",
    cliente: "Roberto Lima",
    realizadoEm: "07:58 10/08/2024",
    entrega: "Padrão",
    valor: "Kz 4.100,00",
  },
];

export function TableDemo() {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
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
              <Button className="">
                <Play size={20} />
                Iniciar
              </Button>
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
}
