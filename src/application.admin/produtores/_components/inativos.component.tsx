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
enum Status {
  INATIVO = "Inativo",
  RECUSADO = "Recusado",
}

export const Inativos = () => {
  const data = [
    {
      empresa: "Organic Farm",
      responsavel: "João Mbumba",
      telefone: "+ 244 923 457 789",
      email: "organicfarm@mail.com",
      status: Status.RECUSADO,
    },
    {
      empresa: "#Fazenda Esperança",
      responsavel: "Rodrigo Silva",
      telefone: "+ 244 923 457 789",
      email: "esperanca.fazenda@mail.com",
      status: Status.INATIVO,
    },
    {
      empresa: "Chicken Farm",
      responsavel: "Angela Gomes",
      telefone: "+ 244 923 457 789",
      email: "chickenfarm@mail.com",
      status: Status.INATIVO,
    },
    {
      empresa: "Fazenda luz",
      responsavel: "Luiz Renato",
      telefone: "+ 244 923 457 789",
      email: "fazenda_luz@mail.com",
      status: Status.INATIVO,
    },
    {
      empresa: "Organic Farm",
      responsavel: "João Mbumba",
      telefone: "+ 244 923 457 789",
      email: "organicfarm@mail.com",
      status: Status.RECUSADO,
    },
    {
      empresa: "#Fazenda Esperança",
      responsavel: "Rodrigo Silva",
      telefone: "+ 244 923 457 789",
      email: "esperanca.fazenda@mail.com",
      status: Status.INATIVO,
    },
    {
      empresa: "Chicken Farm",
      responsavel: "Angela Gomes",
      telefone: "+ 244 923 457 789",
      email: "chickenfarm@mail.com",
      status: Status.INATIVO,
    },
    {
      empresa: "Fazenda luz",
      responsavel: "Luiz Renato",
      telefone: "+ 244 923 457 789",
      email: "fazenda_luz@mail.com",
      status: Status.INATIVO,
    },
  ];
  return (
    <Table>
      <TableCaption className="text-end space-x-2 py-4">
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
          <TableHead className="text-center">Status</TableHead>
          <TableHead className="w-[350px] text-center">Ação</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((delivery, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{delivery.empresa}</TableCell>
            <TableCell className="text-center">
              {delivery.responsavel}
            </TableCell>
            <TableCell className="text-right">{delivery.telefone}</TableCell>
            <TableCell className="text-center">{delivery.email}</TableCell>
            <TableCell className="">
              <div className="flex justify-center">
                <p
                  className={` p-2 px-4 w-min rounded-4xl ${
                    delivery.status === Status.INATIVO
                      ? "bg-[#20202033]"
                      : "bg-[#FF605899]"
                  }`}
                >
                  {delivery.status}
                </p>
              </div>
            </TableCell>

            <TableCell className="space-x-2 flex justify-center">
              <Button
                variant={"outline"}
                className=" text-primary border-primary"
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
