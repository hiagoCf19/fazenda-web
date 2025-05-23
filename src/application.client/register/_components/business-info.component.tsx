import { FieldErrors, UseFormRegister } from "react-hook-form";

import { User } from "lucide-react";

import { useState } from "react";
import { CompanySchema } from "../../../zod/client/register-client.schema";
import {
  InputFormComponente,
  InputFormComponenteProps,
} from "./input-form.component";
interface NameAndPhotoStepProps {
  register: UseFormRegister<CompanySchema>;
  errors: FieldErrors<CompanySchema>;
}

export function BusinessInfoStep({ register, errors }: NameAndPhotoStepProps) {
  const [buttonText, setButtonText] = useState("Selecionar uma foto");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setButtonText("Alterar");
    }
  };
  return (
    <div>
      <h2 className="text-3xl text-secondary-foreground text-center font-semibold">
        Insira o nome da empresa e <br /> esolha uma foto de perfil
      </h2>
      <div className="mt-4 w-full mx-auto flex flex-col gap-2 px-2">
        <InputFormComponente
          register={register as InputFormComponenteProps["register"]}
          errors={errors}
          label="Designação"
          name="designation" // Usando o nome do campo
        />
        <InputFormComponente
          register={register as InputFormComponenteProps["register"]}
          errors={errors}
          label="Área de atuação"
          name="activity" // Usando o nome do campo
        />
        <InputFormComponente
          register={register as InputFormComponenteProps["register"]}
          errors={errors}
          label="Representante da empresa"
          name="companyRepresentative" // Usando o nome do campo
        />
      </div>
      ;
      <div className="flex items-center gap-2 w-full mt-4 ">
        {/* Ícone de perfil */}
        <div className="w-[20%] h-[60px] flex items-center justify-center rounded-full bg-zinc-50 shadow-md">
          <User className="text-secondary fill-secondary size-8" />
        </div>

        {/* Botão estilizado */}
        <label className="border-2 border-secondary text-secondary-foreground rounded-full p-4 w-full h-[60px] flex items-center justify-center cursor-pointer relative hover:bg-green-100 transition">
          {buttonText}
          <input
            type="file"
            className="absolute inset-0 opacity-0 cursor-pointer"
            onChange={handleFileChange}
          />
        </label>
      </div>
    </div>
  );
}
