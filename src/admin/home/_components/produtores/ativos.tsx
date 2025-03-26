import { Eye, FilePenLine, Star } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";
import { Button } from "../../../../components/ui/button";

export const Ativos = () => {
  const empresas = [
    {
      empresa: "OrganicFarm",
      responsavel: "João Mbumba",
      contato: "+ 244 923 456 789",
      email: "organicfarm@gmail.com",
      vendas: "16 vendas",
      receita: "Kz 24.589,50",
      avaliacao: 4.3,
    },
    {
      empresa: "OrganicFarm",
      responsavel: "João Mbumba",
      contato: "+ 244 923 456 789",
      email: "organicfarm@gmail.com",
      vendas: "16 vendas",
      receita: "Kz 24.589,50",
      avaliacao: 4.3,
    },
    {
      empresa: "OrganicFarm",
      responsavel: "João Mbumba",
      contato: "+ 244 923 456 789",
      email: "organicfarm@gmail.com",
      vendas: "16 vendas",
      receita: "Kz 24.589,50",
      avaliacao: 4.3,
    },
    {
      empresa: "OrganicFarm",
      responsavel: "João Mbumba",
      contato: "+ 244 923 456 789",
      email: "organicfarm@gmail.com",
      vendas: "16 vendas",
      receita: "Kz 24.589,50",
      avaliacao: 4.3,
    },
    {
      empresa: "OrganicFarm",
      responsavel: "João Mbumba",
      contato: "+ 244 923 456 789",
      email: "organicfarm@gmail.com",
      vendas: "16 vendas",
      receita: "Kz 24.589,50",
      avaliacao: 4.3,
    },
    {
      empresa: "OrganicFarm",
      responsavel: "João Mbumba",
      contato: "+ 244 923 456 789",
      email: "organicfarm@gmail.com",
      vendas: "16 vendas",
      receita: "Kz 24.589,50",
      avaliacao: 4.3,
    },
    {
      empresa: "OrganicFarm",
      responsavel: "João Mbumba",
      contato: "+ 244 923 456 789",
      email: "organicfarm@gmail.com",
      vendas: "16 vendas",
      receita: "Kz 24.589,50",
      avaliacao: 4.3,
    },
    {
      empresa: "OrganicFarm",
      responsavel: "João Mbumba",
      contato: "+ 244 923 456 789",
      email: "organicfarm@gmail.com",
      vendas: "16 vendas",
      receita: "Kz 24.589,50",
      avaliacao: 4.3,
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
          <TableHead className="w-[100px]">Empresa/Responsável</TableHead>
          <TableHead className="text-center">Contato</TableHead>
          <TableHead className="text-right">Vendas</TableHead>
          <TableHead className="text-center">Receita</TableHead>
          <TableHead className="text-center">Avaliação</TableHead>
          <TableHead className="w-[350px] text-center">Ação</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {empresas.map((producer, index) => (
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
