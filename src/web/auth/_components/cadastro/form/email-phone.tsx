import { Input } from "../../../../../components/ui/input";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { EmailPhoneSchema } from "./zod/schema";

interface EmailAndPhoneStepProps {
  register: UseFormRegister<EmailPhoneSchema>;
  errors: FieldErrors<EmailPhoneSchema>;
}

interface EmailAndPhoneStepProps {
  register: UseFormRegister<EmailPhoneSchema>;
  errors: FieldErrors<EmailPhoneSchema>;
}
export function EmailAndPhoneStep({
  register,
  errors,
}: EmailAndPhoneStepProps) {
  return (
    <>
      <h2 className="text-3xl text-secondary-foreground text-center font-medium">
        Agora, informe seu email e <br />
        telefone:
      </h2>
      <div className="w-full max-w-md mx-auto flex flex-col gap-6 ">
        <div className="mb-4 relative">
          <Input
            {...register("email")}
            className="w-full border-secondary-foreground rounded-full"
          />
          <span className="text-xs text-secondary-foreground bg-background absolute -top-2 left-5 px-2">
            Email:
          </span>
          {errors.email && (
            <p className="text-red-500 text-sm">
              {errors.email.message?.toString()}
            </p>
          )}
        </div>
        <div className="mb-4 relative">
          <Input
            {...register("phone")}
            name={"phone"}
            className="w-full border-secondary-foreground rounded-full"
          />
          <span className="text-xs text-secondary-foreground bg-background absolute -top-2 left-5 px-2">
            Telefone:
          </span>
          {errors.phone && (
            <p className="text-red-500 text-sm">
              {errors.phone.message?.toString()}
            </p>
          )}
        </div>
      </div>
    </>
  );
}
