import { FileEditIcon } from "lucide-react";
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
  ATIVO = "Ativo",
  INATIVO = "Inativo",
}
export const Itens = () => {
  const itens = [
    {
      title: "Milho verde",
      price: "Kz 150,00",
      link_producers: 12,
      number_of_sales: 24,
      status: "Ativo",
    },
    {
      title: "Tomate",
      price: "Kz 150,00",
      link_producers: 6,
      number_of_sales: 19,
      status: "Ativo",
    },
    {
      title: "Cebola",
      price: "Kz 150,00",
      link_producers: 18,
      number_of_sales: 21,
      status: "Ativo",
    },
    {
      title: "Melancia",
      price: "Kz 150,00",
      link_producers: 3,
      number_of_sales: 17,
      status: "Inativo",
    },
    {
      title: "Lentilha",
      price: "Kz 150,00",
      link_producers: 4,
      number_of_sales: 10,
      status: "Ativo",
    },
    {
      title: "Milho verde",
      price: "Kz 150,00",
      link_producers: 12,
      number_of_sales: 24,
      status: "Ativo",
    },
    {
      title: "Tomate",
      price: "Kz 150,00",
      link_producers: 6,
      number_of_sales: 19,
      status: "Ativo",
    },
    {
      title: "Cebola",
      price: "Kz 150,00",
      link_producers: 18,
      number_of_sales: 21,
      status: "Ativo",
    },
    {
      title: "Melancia",
      price: "Kz 150,00",
      link_producers: 3,
      number_of_sales: 17,
      status: "Inativo",
    },
    {
      title: "Lentilha",
      price: "Kz 150,00",
      link_producers: 4,
      number_of_sales: 10,
      status: "Ativo",
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
          <TableHead className="w-[100px]">Título</TableHead>
          <TableHead className="text-center">Preço/kg</TableHead>
          <TableHead className="text-center">Vìnculo agricultores</TableHead>
          <TableHead className="text-center">N° de vendas</TableHead>
          <TableHead className="text-center">Status</TableHead>
          <TableHead className="w-[350px] text-center">Ação</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {itens.map((item, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{item.title}</TableCell>
            <TableCell className="text-center">{item.price}</TableCell>
            <TableCell className="text-center">
              {item.link_producers} vínculos
            </TableCell>
            <TableCell className="text-center">
              {item.number_of_sales} vendas
            </TableCell>
            <TableCell>
              <div className="flex justify-center">
                <p
                  className={` p-2 px-4 w-min rounded-4xl ${
                    item.status === Status.ATIVO
                      ? "bg-[#A0F4B1]"
                      : "bg-foreground/40"
                  }`}
                >
                  {item.status}
                </p>
              </div>
            </TableCell>

            <TableCell className="space-x-2 justify-center flex">
              <Button
                variant={"outline"}
                className="text-primary border-primary"
              >
                <FileEditIcon />
                Editar informações
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
