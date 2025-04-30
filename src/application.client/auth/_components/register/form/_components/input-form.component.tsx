import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Input } from "../../../../../../shadcn/ui/input";
import {
  CompanySchema,
  EmailPhoneSchema,
  NameSchema,
  NifSchema,
} from "../zod/schema";

export interface InputFormComponenteProps {
  register: UseFormRegister<
    NifSchema | NameSchema | CompanySchema | EmailPhoneSchema
  >;
  errors: FieldErrors<
    NifSchema | NameSchema | CompanySchema | EmailPhoneSchema
  >;
  label: string;
  name: string; // Adicionando esta propriedade para tornar dinâmico
}

export function InputFormComponente({
  register,
  errors,
  label,
  name,
}: InputFormComponenteProps) {
  return (
    <div className="w-full mx-auto min-h-16 md:space-y-3">
      <div className="relative ">
        <Input
          {...register(name as any)}
          className=" md:h-[59px] md:w-[460px]   h-[49px] w-[326px] border-secondary-foreground rounded-full pl-8 "
        />
        <span className="text-xs text-secondary-foreground bg-background absolute -top-2 left-5 px-2">
          {label}:
        </span>
      </div>
      {errors[name as keyof typeof errors] ? (
        <p className="text-red-500 text-sm px-4 h-5 my-2 md:my-0">
          {errors[name as keyof typeof errors]?.message?.toString()}
        </p>
      ) : (
        <p className="text-sm px-4 h-5 w-full" />
      )}
    </div>
  );
}
