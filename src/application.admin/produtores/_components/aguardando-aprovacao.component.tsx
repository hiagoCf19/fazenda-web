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

export const AguardandoAprovacao = () => {
  const producers = [
    {
      empresa: "Organic Farm",
      responsavel: "João Mbumba",
      telefone: "+ 244 923 457 789",
      email: "organicfarm@mail.com",
    },
    {
      empresa: "#Fazenda Esperança",
      responsavel: "Rodrigo Silva",
      telefone: "+ 244 923 457 789",
      email: "esperanca.fazenda@mail.com",
    },
    {
      empresa: "Chicken Farm",
      responsavel: "Angela Gomes",
      telefone: "+ 244 923 457 789",
      email: "chickenfarm@mail.com",
    },
    {
      empresa: "Fazenda luz",
      responsavel: "Luiz Renato",
      telefone: "+ 244 923 457 789",
      email: "fazenda_luz@mail.com",
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
          <TableHead className="w-[100px]">Empresa</TableHead>
          <TableHead className="text-center">Responsável</TableHead>
          <TableHead className="text-right">Telefone</TableHead>
          <TableHead className="text-center">Email</TableHead>
          <TableHead className="w-[350px] text-center">Ação</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {producers.map((producer, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{producer.empresa}</TableCell>
            <TableCell className="text-center">
              {producer.responsavel}
            </TableCell>
            <TableCell className="text-right">{producer.telefone}</TableCell>
            <TableCell className="text-center">{producer.email}</TableCell>
            <TableCell className="space-x-2 justify-end items-end flex">
              <Button className="">Aprovar</Button>
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
