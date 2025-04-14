import { FileEdit } from "lucide-react";
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
export const Categorias = () => {
  const categories = [
    {
      titulo: "Vegetais",
      quantidade: 24,
      created_at: "10/09/2024",
      status: "Ativo",
    },
    {
      titulo: "Frutas",
      quantidade: 22,
      created_at: "10/09/2024",
      status: "Ativo",
    },
    {
      titulo: "Carnes",
      quantidade: 14,
      created_at: "10/09/2024",
      status: "Ativo",
    },
    {
      titulo: "Peixes",
      quantidade: 6,
      created_at: "10/09/2024",
      status: "Inativo",
    },
    {
      titulo: "Grãos",
      quantidade: 12,
      created_at: "10/09/2024",
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
          <TableHead className="text-center">Qtde Itens</TableHead>
          <TableHead className="text-right">Criado em</TableHead>
          <TableHead className="text-center">Status</TableHead>
          <TableHead className="w-[350px] text-center">Ação</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {categories.map((category, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{category.titulo}</TableCell>
            <TableCell className="text-center">{category.quantidade}</TableCell>
            <TableCell className="text-right">{category.created_at}</TableCell>

            <TableCell>
              <div className="flex justify-center">
                <p
                  className={` p-2 px-4 w-min rounded-4xl ${
                    category.status === Status.ATIVO
                      ? "bg-[#A0F4B1]"
                      : "bg-foreground/40"
                  }`}
                >
                  {category.status}
                </p>
              </div>
            </TableCell>

            <TableCell className="space-x-2 flex justify-center">
              <Button variant={"outline"} className="">
                <FileEdit />
                Editar informações
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
