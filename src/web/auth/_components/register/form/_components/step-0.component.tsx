import { FieldErrors, UseFormRegister } from "react-hook-form";
import { NifSchema } from "../zod/schema";
import { InputFormComponenteProps } from "../_components/input-form.component";
import { InputFormComponente } from "../_components/input-form.component";

interface StepNifProps {
  register: UseFormRegister<NifSchema>;
  errors: FieldErrors<NifSchema>;
}

export function StepNif({ register, errors }: StepNifProps) {
  return (
    <>
      <h2 className="md:text-3xl text-xl text-secondary-foreground text-center font-medium mb-8">
        Para começar, informe seu <br /> NIF abaixo:
      </h2>
      <InputFormComponente
        register={register as InputFormComponenteProps["register"]}
        errors={errors}
        label="NIF"
        name="nif" // Adicionando a propriedade name
      />
    </>
  );
}
