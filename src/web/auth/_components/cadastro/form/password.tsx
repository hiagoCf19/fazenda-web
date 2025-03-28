import { FieldErrors, UseFormRegister } from "react-hook-form";
import { useState } from "react";
import { Button } from "../../../../../components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { PasswordSchema } from "./zod/schema";
interface PasswordStepProps {
  register: UseFormRegister<PasswordSchema>;
  errors: FieldErrors<PasswordSchema>;
}
export function PasswordStep({ register, errors }: PasswordStepProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <>
      <h2 className="text-3xl text-secondary-foreground text-center font-semibold">
        Agora, defina uma senha de <br />
        acesso:
      </h2>
      <div className="w-full max-w-md mx-auto flex flex-col gap-6 px-2">
        {/* Input de Senha */}
        <div className="mb-2 relative border border-secondary-foreground rounded-full px-5 py-2 flex items-center">
          <input
            {...register("password")}
            type={showPassword ? "text" : "password"}
            className="bg-none w-full focus:outline-none"
          />
          <span className="text-xs text-secondary-foreground bg-background absolute -top-2 left-5 px-1">
            Senha:
          </span>
          <Button
            variant="ghost"
            size="icon"
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </Button>
        </div>
        {errors.password && (
          <p className="text-red-500 text-sm">
            {errors.password.message?.toString()}
          </p>
        )}

        {/* Input de Confirmação de Senha */}
        <div className="mb-4 relative border border-secondary-foreground rounded-full px-5 py-2 flex items-center">
          <input
            type={showConfirmPassword ? "text" : "password"}
            className="bg-none w-full focus:outline-none"
          />
          <span className="text-xs text-secondary-foreground bg-background absolute -top-2 left-5 px-1">
            Digite a senha novamente:
          </span>
          <Button
            variant="ghost"
            size="icon"
            type="button"
            onClick={() => setShowConfirmPassword((prev) => !prev)}
          >
            {showConfirmPassword ? <EyeOff /> : <Eye />}
          </Button>
        </div>
      </div>
    </>
  );
}
