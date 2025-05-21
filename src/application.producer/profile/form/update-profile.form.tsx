"use client";
import { useForm } from "react-hook-form";
import { Form, FormField } from "../../../shadcn/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Session } from "../../../../types/session.type";
import { Button } from "../../../shadcn/ui/button";
import { toast } from "sonner";
import { StandardizationName } from "../../../helpers/standardization-name.helper";
import { InputFormComponent } from "../../../common/_components/input-form.component";
import {
  updateProfilePRODUCER,
  updateProfilePRODUCERType,
} from "../../../zod/producer/update-profile.schema";

interface FormUpdateProfileProps {
  session: Session;
}
export function FormUpdateProfile({ session }: FormUpdateProfileProps) {
  const form = useForm<updateProfilePRODUCERType>({
    resolver: zodResolver<updateProfilePRODUCERType>(updateProfilePRODUCER),
    defaultValues: {
      business_name: session?.user.first_name || "",
      responsible: session?.user.last_name || "",
      phone: session?.user.phone || "",
    },
  });
  const onSubmit = (data: updateProfilePRODUCERType) => {
    console.log(data);
    toast.success("Dados atualizados com sucesso!");
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
        <FormField
          control={form.control}
          name="business_name"
          render={({ field }) => (
            <InputFormComponent
              placeholder={StandardizationName(session.user)}
              label="Nome da empresa"
              field={field}
            />
          )}
        />

        <FormField
          control={form.control}
          name="responsible"
          render={({ field }) => (
            <InputFormComponent
              label="Responsável"
              placeholder={session?.user.first_name as string}
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
