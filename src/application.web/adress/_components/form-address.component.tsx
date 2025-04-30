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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../shadcn/ui/select";
import { InputFormComponent } from "../../_components/input-form.component";
import { DialogClose } from "../../../shadcn/ui/dialog";
import { X } from "lucide-react";
import { createAddressSchema } from "./zod/address.schema";

type AdressFormValues = z.infer<typeof createAddressSchema>;

interface AdicionarEnderecoFormProps {
  onSubmit: (data: AdressFormValues) => void;
  onCancel: () => void;
}

export function AdicionarEnderecoForm({
  onSubmit,
}: AdicionarEnderecoFormProps) {
  const form = useForm<AdressFormValues>({
    resolver: zodResolver(createAddressSchema),
    defaultValues: {
      street: "",
      number: "",
      complement: "",
      postalCode: "",
      neighborhood: "",
      municipality: "",
      province: "",
      commune: "",
      referencePoint: "",
      country: "Angola",
      address_type: "Casa", // ou "Outro" como padrão, se preferir
    },
  });

  return (
    <Card className="w-full max-w-xl mx-auto shadow-md ">
      <CardHeader className="text-center  flex items-center justify-center">
        <CardTitle className="text-3xl font-medium text-secondary-foreground">
          Endereço de entrega
        </CardTitle>
        <DialogClose className="absolute right-0 p-4">
          <X className="text-primary" />
        </DialogClose>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="flex-1">
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
              <div className="w-1/3">
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
              </div>
            </div>
            <div className="flex gap-2 justify-between">
              <div className="w-[60%]">
                <FormField
                  control={form.control}
                  name="complement"
                  render={({ field }) => (
                    <InputFormComponent
                      label="Complemento"
                      placeholder=""
                      field={field}
                    />
                  )}
                />
              </div>
              <div className="w-[40%]">
                <FormField
                  control={form.control}
                  name="postalCode"
                  render={({ field }) => (
                    <InputFormComponent
                      label="Código postal"
                      placeholder=""
                      field={field}
                    />
                  )}
                />
              </div>
            </div>
            <div className="flex justify-between gap-2">
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
                name="municipality"
                render={({ field }) => (
                  <InputFormComponent
                    label="Município"
                    placeholder=""
                    field={field}
                  />
                )}
              />
            </div>
            <div className="flex justify-between gap-2">
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
              <div className="w-[40%]">
                <FormField
                  control={form.control}
                  name="commune"
                  render={({ field }) => (
                    <InputFormComponent
                      label="Comuna"
                      placeholder=""
                      field={field}
                    />
                  )}
                />
              </div>
            </div>

            <FormField
              control={form.control}
              name="referencePoint"
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
