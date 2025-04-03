import { Search } from "lucide-react";
import { Card, CardContent, CardHeader } from "../../shadcn/ui/card";
import { ClientsTable } from "./_components/clientes/clients_table";

export const Clientes = () => {
  return (
    <>
      <div className="flex items-center space-x-5 mb-5">
        <h1 className="text-4xl text-zinc-700 font-semibold ">Clientes</h1>
      </div>

      <Card className=" mt-5 pt-0">
        <CardHeader className="p-0">
          <div className="p-8 flex justify-between">
            <p className="text-4xl font-semibold">500 Clientes</p>

            <div className="border rounded-lg flex items-center px-4 w-[30%]">
              <input
                placeholder="Buscar por cliente"
                className=" border-none ring-none outline-none w-full "
              />
              <Search />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <ClientsTable />
        </CardContent>
      </Card>
    </>
  );
};
