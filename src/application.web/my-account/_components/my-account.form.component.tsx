"use client";
import { useForm } from "react-hook-form";
import { Form, FormField } from "../../../shadcn/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Session } from "../../../../types/session.type";
import { updateAccountSchema } from "./zod/update-account.schema";
import { Button } from "../../../shadcn/ui/button";
import { toast } from "sonner";
import { StandardizationName } from "../../../helpers/standardization-name.helper";
import { InputFormComponent } from "../../../common/_components/input-form.component";

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
    resolver: zodResolver<UpdateAccountForm>(updateAccountSchema),
    defaultValues: {
      first_name: session?.user.first_name || "",
      last_name: session?.user.last_name || "",
      phone: session?.user.phone || "",
    },
  });
  const onSubmit = (data: UpdateAccountForm) => {
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
              placeholder={StandardizationName(session.user)}
              label="Nome"
              field={field}
            />
          )}
        />

        {session.user.profile_type === "business" ||
          (session.user.profile_type === "individual" && (
            <FormField
              control={form.control}
              name="last_name"
              render={({ field }) => (
                <InputFormComponent
                  label="Sobrenome"
                  placeholder={session?.user.last_name as string}
                  field={field}
                />
              )}
            />
          ))}

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <InputFormComponent
              field={field}
              placeholder={session?.user.phone}
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
