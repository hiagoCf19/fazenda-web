"use client";
import { useForm } from "react-hook-form";
import { Form, FormField } from "../../../shadcn/ui/form";
import { InputFormComponent } from "../../_components/input-form.component";
import { zodResolver } from "@hookform/resolvers/zod";
import { Session } from "../../../../types/session.type";
import { updateAccountSchema } from "./zod/update-account.schema";
import { Button } from "../../../shadcn/ui/button";
import { toast } from "sonner";

interface UpdateAccountForm {
  first_name: string;
  last_name: string;
  phone: string;
}
interface MyAccountFormComponentProps {
  session: Session;
}
export function MyAccountFormComponent({
  session,
}: MyAccountFormComponentProps) {
  const form = useForm<UpdateAccountForm>({
    resolver: zodResolver(updateAccountSchema),
    defaultValues: {
      first_name: session?.user.name,
      last_name: "",
      phone: "",
    },
  });
  const onSubmit = (data: any) => {
    console.log(data);
    toast.success("Dados atualizados com sucesso!");
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="first_name"
          render={({ field }) => (
            <InputFormComponent
              placeholder={session?.user.name}
              label="Nome"
              field={field}
            />
          )}
        />

        <FormField
          control={form.control}
          name="last_name"
          render={({ field }) => (
            <InputFormComponent
              label="Sobrenome"
              placeholder={session?.user.name}
              field={field}
            />
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <InputFormComponent
              field={field}
              placeholder={""}
              label="Telefone"
            />
          )}
        />
        <Button
          type="submit"
          className="w-full bg-secondary hover:bg-green-500 text-secondary-foreground font-medium rounded-full text-xl py-6"
        >
          Salvar
        </Button>
      </form>
    </Form>
  );
}
