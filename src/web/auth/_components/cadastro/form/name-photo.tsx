import { Input } from "../../../../../components/ui/input";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { NameSchema } from "./zod/schema";
interface NameAndPhotoStepProps {
  register: UseFormRegister<NameSchema>;
  errors: FieldErrors<NameSchema>;
}
export function NameAndPhotoStep({ register, errors }: NameAndPhotoStepProps) {
  return (
    <div>
      <h2 className="text-3xl text-secondary-foreground text-center font-semibold">
        Insira seu nom e escolha <br /> uma foto de perfil
      </h2>
      <div className="mt-4 w-full max-w-md mx-auto flex flex-col gap-6 px-2">
        <div className="mb-4 relative">
          <Input
            {...register("firstName")}
            name={"firstName"}
            className="w-full border-secondary-foreground rounded-full"
          />
          <span className="text-xs text-secondary-foreground bg-background absolute -top-2 left-5 px-2">
            Nome:
          </span>
        </div>
        {errors.firstName && (
          <p className="text-red-500 text-sm">
            {errors.firstName.message?.toString()}
          </p>
        )}
        <div className="mb-4 relative">
          <Input
            {...register("lastName")}
            name={"lastName"}
            className="w-full border-secondary-foreground rounded-full"
          />
          <span className="text-xs text-secondary-foreground bg-background absolute -top-2 left-5 px-2">
            Sobrenome:
          </span>
        </div>
        {errors.lastName && (
          <p className="text-red-500 text-sm">
            {errors.lastName.message?.toString()}
          </p>
        )}
        {/* <div className="flex items-center gap-2">
          <div className="rounded-full flex items-center justify-center p-4 bg-white shadow-lg">
            <User className="text-secondary size-6 fill-secondary" />
          </div>
          <Button
            variant={"outline"}
            className="text-secondary-foreground border-secondary rounded-3xl py-5 px-16"
          >
            Selecionar uma foto
          </Button>
        </div> */}
      </div>
    </div>
  );
}
