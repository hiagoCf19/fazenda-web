import { FieldErrors, UseFormRegister } from "react-hook-form";
import { EmailPhoneSchema } from "../zod/schema";
import {
  InputFormComponente,
  InputFormComponenteProps,
} from "./input-form.component";
import { RegisterTypeEnum } from "../../../../register.page";

interface EmailAndPhoneStepProps {
  register: UseFormRegister<EmailPhoneSchema>;
  errors: FieldErrors<EmailPhoneSchema>;
  registerType: RegisterTypeEnum;
}

export function EmailAndPhoneStep({
  register,
  errors,
  registerType,
}: EmailAndPhoneStepProps) {
  return (
    <>
      <h2 className="text-3xl text-secondary-foreground text-center font-medium">
        {registerType === RegisterTypeEnum.INDIVIDUAL
          ? "Agora, informe seu email e \n telefone:"
          : "Agora, informe email e \n telefone da empresa"}
      </h2>
      <div className="mt-4 w-full max-w-md mx-auto flex flex-col gap-2 px-2">
        <InputFormComponente
          errors={errors}
          name="email"
          register={register as InputFormComponenteProps["register"]}
          label="Email"
        />
        <InputFormComponente
          errors={errors}
          name={"phone"}
          register={register as InputFormComponenteProps["register"]}
          label="Telefone"
        />
      </div>
    </>
  );
}
