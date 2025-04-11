import { FieldErrors, UseFormRegister } from "react-hook-form";
import { EmailPhoneSchema } from "../zod/schema";
import {
  InputFormComponente,
  InputFormComponenteProps,
} from "./input-form.component";
import { ProfileTypeEnum } from "../../../../register.page";

interface EmailAndPhoneStepProps {
  register: UseFormRegister<EmailPhoneSchema>;
  errors: FieldErrors<EmailPhoneSchema>;
  profile_type: ProfileTypeEnum;
}

export function EmailAndPhoneStep({
  register,
  errors,
  profile_type,
}: EmailAndPhoneStepProps) {
  return (
    <>
      <h2 className="md:text-3xl text-2xl  text-secondary-foreground text-center font-medium">
        {profile_type === ProfileTypeEnum.INDIVIDUAL
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
