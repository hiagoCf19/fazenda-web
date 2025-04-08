import { Trash2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../../shadcn/ui/card";
import { HeaderAuthenticaded } from "../_components/header-authenticated.component";
import NotFound from "../_components/not-found.component";
import { useSession } from "../context/session.context";
import { Button } from "../../shadcn/ui/button";
import { useState } from "react";
import { Dialog, DialogContent } from "../../shadcn/ui/dialog";
import { AdicionarEnderecoForm } from "./_components/form-address.component";

interface Address {
  id: string;
  adress_type: string;
  province: string;
  municipality: string;
  neighborhood: string;
  street: string;
  number: string;
  complement: string;
}
export function AddressPage() {
  const { session } = useSession();
  if (!session) return <NotFound />;
  const [address, setAddress] = useState<Address[]>([
    {
      id: "uuidqjsifjfi0",
      adress_type: "Casa",
      province: "Luanda",
      municipality: "Viana",
      neighborhood: "Zango 2",
      street: "Rua A",
      number: "32",
      complement: "Casa 2",
    },
  ]);

  const [formAberto, setFormAberto] = useState(false);

  const removeAddress = (id: string) => {
    setAddress(address.filter((metodo) => metodo.id !== id));
  };

  const adicionarNovoCartao = () => {
    setFormAberto(true);
  };

  const handleSubmitCartao = (data: any) => {
    // Criar um novo método de pagamento com os dados do formulário
    const newAddress: Address = {
      id: Date.now().toString(), // ID único baseado no timestamp
      adress_type: data.adress_type,
      province: data.province,
      municipality: data.municipality,
      neighborhood: data.neighborhood,
      street: data.street,
      number: data.number,
      complement: data.complement,
    };

    setAddress([...address, newAddress]);
    setFormAberto(false);
  };
  return (
    <section className="md:p-12 overflow-x-hidden relative min-h-screen ">
      <HeaderAuthenticaded session={session} />
      <div className="w-full md:h-[128px] h-[88px]" />

      <Card className="w-full max-w-md mx-auto shadow-lg min-h-[50vh]">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-medium text-secondary-foreground">
            Endereços
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {address.map((addr, i) => (
            <div
              key={i}
              className="flex items-center justify-between  bg-muted/30 rounded-2xl border p-5"
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
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeAddress(addr.id)}
                aria-label="Remover método de pagamento"
              >
                <Trash2 className="size-8 text-muted-foreground" />
              </Button>
            </div>
          ))}
          <Button
            onClick={adicionarNovoCartao}
            className="w-full bg-secondary hover:bg-green-500 text-secondary-foreground font-medium rounded-full text-xl py-6"
          >
            Adicionar novo endereço
          </Button>
        </CardContent>
      </Card>
      <Dialog open={formAberto} onOpenChange={setFormAberto}>
        <DialogContent className="p-0 bg-transparent border-none shadow-none max-w-md">
          <AdicionarEnderecoForm
            onSubmit={handleSubmitCartao}
            onCancel={() => setFormAberto(false)}
          />
        </DialogContent>
      </Dialog>
    </section>
  );
}
