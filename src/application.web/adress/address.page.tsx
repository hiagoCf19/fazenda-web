import { Trash2, TriangleAlert } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../shadcn/ui/card";
import { HeaderAuthenticaded } from "../_components/header-authenticated.component";
import NotFound from "../_components/not-found.component";
import { useSession } from "../context/session.context";
import { Button } from "../../shadcn/ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
} from "../../shadcn/ui/dialog";
import { AdicionarEnderecoForm } from "./_components/form-address.component";
import {
  useCreateUserAddress,
  useDeleteUserAddress,
  useUserAddress,
} from "../../hooks/use-user.hook";
import { DialogTitle } from "@radix-ui/react-dialog";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../shadcn/ui/alert-dialog";

export function AddressPage() {
  const { session } = useSession();

  const userId = session?.user.id;
  const deleteMutation = useDeleteUserAddress(userId || 0);
  const createMutation = useCreateUserAddress();

  const { data: address } = useUserAddress(userId || 0);

  const [formAberto, setFormAberto] = useState(false);

  if (!session) return <NotFound />;

  const removeAddress = (addressId: number) => {
    deleteMutation.mutate(addressId);
  };

  const addAddress = () => {
    setFormAberto(true);
  };

  const handeSubmitAddress = (data: any) => {
    if (!session) return;

    createMutation.mutate(
      { ...data, userId: session.user.id },
      {
        onSuccess: () => {
          toast.success("Endereço adicionado com sucesso!");
          setFormAberto(false);
        },
        onError: () => {
          toast.error("Erro ao adicionar endereço.");
        },
      }
    );
  };
  return (
    <section className="md:p-12 overflow-x-hidden relative min-h-screen ">
      <HeaderAuthenticaded session={session} />
      <div className="w-full md:h-[128px] h-[88px]" />

      <Card className="w-full max-w-md mx-auto shadow-lg min-h-[50vh] relative">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-medium text-secondary-foreground">
            Endereços
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {(address ?? []).length > 0 ? (
            (address ?? []).map((addr: any, i: number) => (
              <div
                key={i}
                className="flex items-center justify-between bg-muted/30 rounded-2xl border p-5"
              >
                <div className="flex items-center gap-3">
                  <div>
                    <p className="text-xl font-medium text-zinc-800">
                      {addr.adress_type}
                    </p>
                    <p className="text-lg text-muted-foreground">
                      {addr.street}, {addr.number} - {addr.neighborhood}
                    </p>
                  </div>
                </div>
                <AlertDialog>
                  <AlertDialogTrigger>
                    <Trash2 className="size-8 text-muted-foreground" />
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle className="text-zinc-700 flex items-center gap-2">
                        <TriangleAlert className="text-yellow-600" /> Excluir
                        endereço
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        Um endereço removido não pode ser restaurado. Esta ação
                        não pode ser desfeita. Você realmente deseja continuar?
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        className="bg-red-500"
                        onClick={() => removeAddress(addr.id)}
                      >
                        Continuar
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            ))
          ) : (
            <div className="text-center text-muted-foreground text-lg py-8">
              Nenhum endereço adicionado.
            </div>
          )}
        </CardContent>
        <CardFooter className="absolute bottom-8 p-4 w-full">
          <Button
            onClick={addAddress}
            className="w-full bg-secondary hover:bg-green-500 text-secondary-foreground font-medium rounded-full text-xl py-6"
          >
            Adicionar novo endereço
          </Button>
        </CardFooter>
      </Card>
      <Dialog open={formAberto} onOpenChange={setFormAberto}>
        <DialogContent className="p-0 bg-transparent border-none shadow-none max-w-md">
          <DialogTitle />
          <DialogDescription />
          <AdicionarEnderecoForm
            onSubmit={handeSubmitAddress}
            onCancel={() => setFormAberto(false)}
          />
        </DialogContent>
      </Dialog>
    </section>
  );
}
