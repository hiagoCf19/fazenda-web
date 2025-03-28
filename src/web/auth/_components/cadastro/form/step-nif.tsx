import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Input } from "../../../../../components/ui/input";
import { NifSchema } from "./zod/schema";

interface StepNifProps {
  register: UseFormRegister<NifSchema>;
  errors: FieldErrors<NifSchema>;
}
export function StepNif({ register, errors }: StepNifProps) {
  return (
    <>
      <h2 className="text-3xl text-secondary-foreground text-center font-medium">
        Para começar, informe seu <br />
        NIF abaixo:
      </h2>
      <div className="w-full max-w-md mx-auto">
        <div className="mb-4 relative">
          <Input
            {...register("nif")}
            className="w-full border-secondary-foreground rounded-full"
          />
          <span className="text-xs text-secondary-foreground bg-background absolute -top-2 left-5 px-2">
            NIF:
          </span>
        </div>
        {errors.nif && (
          <p className="text-red-500 text-sm">
            {errors.nif.message?.toString()}
          </p>
        )}
      </div>
    </>
  );
}
