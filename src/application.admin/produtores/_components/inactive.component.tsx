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
import { Status } from "../../../service/inactive-producers.service";
import { useInactiveProducers } from "../../../hooks/use.inactive.producers";

export const Inactive = () => {
  const { data = [], isLoading } = useInactiveProducers();

  if (isLoading) return <p>Carregando...</p>;

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
            <TableCell>
              <div className="flex justify-center">
                <p
                  className={`p-2 px-4 w-min rounded-4xl ${
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
