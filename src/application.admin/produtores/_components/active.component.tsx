import { FilePenLine, Star } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../shadcn/ui/table";
import { Button } from "../../../shadcn/ui/button";
import { useActiveProducers } from "../../../hooks/use.inactive.producers";

export const Active = () => {
  const { data = [], isLoading } = useActiveProducers();

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
          <TableHead className="w-[100px]">Empresa/Responsável</TableHead>
          <TableHead className="text-center">Contato</TableHead>
          <TableHead className="text-right">Vendas</TableHead>
          <TableHead className="text-center">Receita</TableHead>
          <TableHead className="text-center">Avaliação</TableHead>
          <TableHead className="w-[350px] text-center">Ação</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((producer, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">
              <div>
                <p className="text-zinc-700">{producer.empresa}</p>
                <span className="text-foreground">{producer.responsavel}</span>
              </div>
            </TableCell>
            <TableCell className="text-center">{producer.contato}</TableCell>
            <TableCell className="text-right">{producer.vendas}</TableCell>
            <TableCell className="text-center">{producer.receita}</TableCell>
            <TableCell className="text-center">
              <div className="flex items-center justify-center gap-2">
                <Star className="fill-yellow-400 text-yellow-400" />
                {producer.avaliacao}
              </div>
            </TableCell>
            <TableCell className="space-x-2 justify-end items-end flex">
              <Button
                variant={"outline"}
                className="text-primary border-primary"
              >
                <FilePenLine />
                Editar informações
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
