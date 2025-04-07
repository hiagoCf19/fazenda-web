import { CreditCard, Trash2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../../shadcn/ui/card";
import { HeaderAuthenticaded } from "../_components/header-authenticated.component";
import NotFound from "../_components/not-found.component";
import { useSession } from "../context/session.context";
import { Button } from "../../shadcn/ui/button";
import { useState } from "react";
import { Dialog, DialogContent } from "../../shadcn/ui/dialog";
import { AdicionarCartaoForm } from "./_components/payment-methods.form.component";
import { toast } from "sonner";
import BottomNav from "../_components/bottom-navigator-mobile.component";

interface MetodoPagamento {
  id: string;
  tipo: string;
  descricao: string;
}
export function PaymentMethodsPage() {
  const { session } = useSession();
  if (!session) return <NotFound />;
  const [metodosPagamento, setMetodosPagamento] = useState<MetodoPagamento[]>([
    {
      id: "1",
      tipo: "Cartão de crédito",
      descricao: "Mastercard Final 123",
    },
  ]);

  const [formAberto, setFormAberto] = useState(false);

  const removerMetodo = (id: string) => {
    setMetodosPagamento(metodosPagamento.filter((metodo) => metodo.id !== id));
  };

  const adicionarNovoCartao = () => {
    setFormAberto(true);
  };

  const handleSubmitCartao = (data: any) => {
    // Criar um novo método de pagamento com os dados do formulário
    const novoMetodo: MetodoPagamento = {
      id: Date.now().toString(), // ID único baseado no timestamp
      tipo: "Cartão de crédito",
      descricao: `**** **** **** ${data.numero.slice(-4)}`, // Mostrar apenas os últimos 4 dígitos
    };
    toast.success("Cartão adicionado com sucesso!");
    setMetodosPagamento([...metodosPagamento, novoMetodo]);
    setFormAberto(false);
  };
  return (
    <section className="md:p-12 overflow-x-hidden relative min-h-screen ">
      <HeaderAuthenticaded session={session} />
      <div className="w-full md:h-[128px] h-[88px]" />

      <Card className="md:w-full w-[95%] max-w-md mx-auto shadow-lg min-h-[50vh]">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-medium text-secondary-foreground">
            Pagamentos
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {metodosPagamento.map((metodo) => (
            <div
              key={metodo.id}
              className="flex items-center justify-between  bg-muted/30 rounded-2xl border p-5"
            >
              <div className="flex items-center gap-3">
                <CreditCard className="size-8 text-muted-foreground" />
                <div>
                  <p className="text-xl font-medium text-zinc-800">
                    {metodo.tipo}
                  </p>
                  <p className="text-lg text-muted-foreground">
                    {metodo.descricao}
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removerMetodo(metodo.id)}
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
            Adicionar novo cartão
          </Button>
        </CardContent>
      </Card>
      <Dialog open={formAberto} onOpenChange={setFormAberto}>
        <DialogContent className="p-0 bg-transparent border-none shadow-none max-w-md">
          <AdicionarCartaoForm
            onSubmit={handleSubmitCartao}
            onCancel={() => setFormAberto(false)}
          />
        </DialogContent>
      </Dialog>
      <BottomNav />
    </section>
  );
}
