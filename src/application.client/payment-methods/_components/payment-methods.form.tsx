"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../../shadcn/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../shadcn/ui/card";
import { Form, FormField } from "../../../shadcn/ui/form";
import { cartaoSchema } from "../../../zod/client/payment-card.schema";
import { InputFormComponent } from "../../../common/_components/input-form.component";

type CartaoFormValues = z.infer<typeof cartaoSchema>;

interface AdicionarCartaoFormProps {
  onSubmit: (data: CartaoFormValues) => void;
  onCancel: () => void;
}

export function AdicionarCartaoForm({ onSubmit }: AdicionarCartaoFormProps) {
  const form = useForm<CartaoFormValues>({
    resolver: zodResolver(cartaoSchema),
    defaultValues: {
      numero: "",
      validade: "",
      cvv: "",
      titular: "",
      documento: "",
    },
  });

  return (
    <Card className="md:w-full w-[95%] max-w-xl mx-auto shadow-md">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-medium text-secondary-foreground">
          Cartão de crédito
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="numero"
              render={({ field }) => (
                <InputFormComponent
                  placeholder="0000 0000 0000 0000"
                  label="Número do cartão"
                  field={field}
                />
              )}
            />

            <div className="grid grid-cols-2 gap-2">
              <FormField
                control={form.control}
                name="validade"
                render={({ field }) => (
                  <InputFormComponent
                    label="Data de validade"
                    placeholder="MM/AA"
                    field={field}
                  />
                )}
              />

              <FormField
                control={form.control}
                name="cvv"
                render={({ field }) => (
                  <InputFormComponent
                    field={field}
                    placeholder="123"
                    label="CVV"
                  />
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="titular"
              render={({ field }) => (
                <InputFormComponent
                  field={field}
                  placeholder="Nome como está no cartão"
                  label="Nome do titular"
                />
              )}
            />

            <FormField
              control={form.control}
              name="documento"
              render={({ field }) => (
                <InputFormComponent
                  field={field}
                  placeholder="000.000.000-00"
                  label="CPF / CNPJ do titular"
                />
              )}
            />

            <Button
              type="submit"
              className="w-full bg-secondary py-6 rounded-full text-secondary-foreground font-medium"
            >
              Adicionar novo cartão
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
