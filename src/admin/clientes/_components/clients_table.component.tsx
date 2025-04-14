import { Eye, FileEdit } from "lucide-react";
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

export const ClientsTable = () => {
  const clients = [
    {
      nome: "João Mbumba",
      contato: "+244 923 456 789",
      ultimoAcesso: "10/09/2024",
      cadastro: "02/09/2024",
      compras: 4,
      receita: "Kz 1.150,00",
    },
    {
      nome: "Ana Tavares",
      contato: "+244 921 987 654",
      ultimoAcesso: "12/09/2024",
      cadastro: "05/09/2024",
      compras: 7,
      receita: "Kz 2.500,00",
    },
    {
      nome: "Carlos Domingos",
      contato: "+244 922 654 321",
      ultimoAcesso: "11/09/2024",
      cadastro: "03/09/2024",
      compras: 3,
      receita: "Kz 900,00",
    },
    {
      nome: "Maria dos Santos",
      contato: "+244 929 333 222",
      ultimoAcesso: "14/09/2024",
      cadastro: "06/09/2024",
      compras: 5,
      receita: "Kz 1.800,00",
    },
    {
      nome: "Pedro Almeida",
      contato: "+244 923 112 334",
      ultimoAcesso: "09/09/2024",
      cadastro: "01/09/2024",
      compras: 2,
      receita: "Kz 750,00",
    },
    {
      nome: "Lúcia Fernandes",
      contato: "+244 921 777 888",
      ultimoAcesso: "13/09/2024",
      cadastro: "04/09/2024",
      compras: 6,
      receita: "Kz 2.200,00",
    },
    {
      nome: "Fernando Gomes",
      contato: "+244 922 555 666",
      ultimoAcesso: "08/09/2024",
      cadastro: "31/08/2024",
      compras: 1,
      receita: "Kz 300,00",
    },
    {
      nome: "Sara Oliveira",
      contato: "+244 929 444 555",
      ultimoAcesso: "15/09/2024",
      cadastro: "07/09/2024",
      compras: 8,
      receita: "Kz 3.000,00",
    },
    {
      nome: "Ricardo Xavier",
      contato: "+244 923 666 777",
      ultimoAcesso: "07/09/2024",
      cadastro: "30/08/2024",
      compras: 3,
      receita: "Kz 1.000,00",
    },
    {
      nome: "Beatriz Costa",
      contato: "+244 921 888 999",
      ultimoAcesso: "12/09/2024",
      cadastro: "05/09/2024",
      compras: 5,
      receita: "Kz 1.600,00",
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
          <TableHead className="w-[100px]">Nome</TableHead>
          <TableHead className="text-center">Contato</TableHead>
          <TableHead className="text-right">Último acesso / Cadastro</TableHead>
          <TableHead className="text-center">Compras / Receita</TableHead>
          <TableHead className="w-[350px] text-center">Ação</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {clients.map((client, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{client.nome}</TableCell>
            <TableCell className="text-center">
              <div className="">
                <p className="text-zinc-700">{client.contato}</p>
                <span className="text-sm text-foreground">
                  ex.mail@mail.com
                </span>
              </div>
            </TableCell>
            <TableCell className="text-right">
              <div className="">
                <p className="text-zinc-700">{client.ultimoAcesso}</p>
                <span className="text-sm text-foreground">
                  {client.cadastro}
                </span>
              </div>
            </TableCell>
            <TableCell className="text-center">
              <div className="">
                <p className="text-zinc-700 ">{client.compras} Compras</p>
                <span className="text-sm text-foreground">
                  {client.receita}
                </span>
              </div>
            </TableCell>
            <TableCell className="space-x-2 justify-end items-end flex">
              <Button
                variant={"outline"}
                className="text-primary border-primary"
              >
                <FileEdit />
                Editar
              </Button>
              <Button
                variant={"outline"}
                className="text-primary border-primary"
              >
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
