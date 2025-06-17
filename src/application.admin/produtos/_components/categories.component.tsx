// components/categorias/categorias.component.tsx
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
import { CategorieStatus } from "../../../service/categories-products.service";
import { useCategories } from "../../../hooks/use.categories-products";

export const Categories = () => {
  const { data: categories = [] } = useCategories();

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
                  className={`p-2 px-4 w-min rounded-4xl ${
                    category.status === CategorieStatus.ATIVO
                      ? "bg-[#A0F4B1]"
                      : "bg-foreground/40"
                  }`}
                >
                  {category.status}
                </p>
              </div>
            </TableCell>
            <TableCell className="space-x-2 flex justify-center">
              <Button variant={"outline"}>
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
