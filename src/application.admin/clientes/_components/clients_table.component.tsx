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
import { useClients } from "../../../hooks/use.clients";

export const ClientsTable = () => {
  const { data: clients = [], isLoading } = useClients();

  if (isLoading) {
    return <p>Carregando clientes...</p>;
  }

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
              <div>
                <p className="text-zinc-700">{client.contato}</p>
                <span className="text-sm text-foreground">
                  ex.mail@mail.com
                </span>
              </div>
            </TableCell>
            <TableCell className="text-right">
              <div>
                <p className="text-zinc-700">{client.ultimoAcesso}</p>
                <span className="text-sm text-foreground">
                  {client.cadastro}
                </span>
              </div>
            </TableCell>
            <TableCell className="text-center">
              <div>
                <p className="text-zinc-700">{client.compras} Compras</p>
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
