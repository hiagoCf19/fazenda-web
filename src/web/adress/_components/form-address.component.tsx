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
import { Form, FormField, FormLabel } from "../../../shadcn/ui/form";
import { angolaAddressSchema } from "./zod/address.schema";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../shadcn/ui/select";
import { InputFormComponent } from "../../_components/input-form.component";

type CartaoFormValues = z.infer<typeof angolaAddressSchema>;

interface AdicionarEnderecoFormProps {
  onSubmit: (data: CartaoFormValues) => void;
  onCancel: () => void;
}

export function AdicionarEnderecoForm({
  onSubmit,
}: AdicionarEnderecoFormProps) {
  const form = useForm<CartaoFormValues>({
    resolver: zodResolver(angolaAddressSchema),
    defaultValues: {
      id: "",
      adress_type: "",
      province: "",
      municipality: "",
      neighborhood: "",
      street: "",
      number: "",
      complement: "",
    },
  });

  return (
    <Card className="w-full max-w-xl mx-auto shadow-md">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-medium text-secondary-foreground">
          Endereço de entrega
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-[65%]">
                <FormField
                  control={form.control}
                  name="street"
                  render={({ field }) => (
                    <InputFormComponent
                      label="Rua (opcional)"
                      placeholder=""
                      field={field}
                    />
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="province"
                render={({ field }) => (
                  <div className="space-y-2 flex-1 relative">
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormLabel className="absolute bg-background -top-2 px-2 mx-2 text-secondary-foreground">
                        Província
                      </FormLabel>
                      <SelectTrigger className="border  border-secondary-foreground rounded-full py-6 w-full">
                        <SelectValue placeholder="Selecione a província" />
                      </SelectTrigger>
                      <SelectContent>
                        {[
                          "Bengo",
                          "Benguela",
                          "Bié",
                          "Cabinda",
                          "Cuando Cubango",
                          "Cuanza Norte",
                          "Cuanza Sul",
                          "Cunene",
                          "Huambo",
                          "Huíla",
                          "Luanda",
                          "Lunda Norte",
                          "Lunda Sul",
                          "Malanje",
                          "Moxico",
                          "Namibe",
                          "Uíge",
                          "Zaire",
                        ].map((prov) => (
                          <SelectItem key={prov} value={prov}>
                            {prov}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="number"
              render={({ field }) => (
                <InputFormComponent
                  label="Número da casa"
                  placeholder=""
                  field={field}
                />
              )}
            />

            <FormField
              control={form.control}
              name="municipality"
              render={({ field }) => (
                <InputFormComponent
                  label="Município"
                  placeholder=""
                  field={field}
                />
              )}
            />

            <FormField
              control={form.control}
              name="neighborhood"
              render={({ field }) => (
                <InputFormComponent
                  label="Bairro"
                  placeholder=""
                  field={field}
                />
              )}
            />

            <FormField
              control={form.control}
              name="complement"
              render={({ field }) => (
                <InputFormComponent
                  label="Ponto de referência (opcional)"
                  placeholder=""
                  field={field}
                />
              )}
            />

            <Button
              type="submit"
              className="w-full bg-secondary py-6 rounded-full text-secondary-foreground font-medium"
            >
              Salvar endereço
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
