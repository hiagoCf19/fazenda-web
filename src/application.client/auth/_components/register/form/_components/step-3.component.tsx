import { FieldErrors, UseFormRegister } from "react-hook-form";
import { useState } from "react";
import { Button } from "../../../../../../shadcn/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { PasswordSchema } from "../zod/schema";
interface PasswordStepProps {
  register: UseFormRegister<PasswordSchema>;
  errors: FieldErrors<PasswordSchema>;
}
export function PasswordStep({ register, errors }: PasswordStepProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <>
      <h2 className="md:text-3xl text-2xl  text-secondary-foreground text-center font-semibold">
        Agora, defina uma senha de <br />
        acesso:
      </h2>
      <div className="w-full max-w-md mx-auto flex flex-col  px-2">
        {/* Input de Senha */}
        <div className="space-y-2  flex md:block flex-col justify-center items-center">
          <div className="relative  border-secondary-foreground border rounded-full flex items-center md:px-4 px-8 mt-4  md:h-[59px]  h-[49px] w-[326px] md:w-auto">
            <input
              {...register("password")}
              type={showPassword ? "text" : "password"}
              className="bg-transparent outline-none shadow-none text-secondary-foreground  py-2  md:w-[460px] "
              aria-invalid={!!errors.password}
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
              {showPassword ? <Eye /> : <EyeOff />}
            </Button>
          </div>
          {errors.password ? (
            <p className="text-red-500 h-4 text-sm px-4">
              {errors.password.message?.toString()}
            </p>
          ) : (
            <p className="h-4 w-2" />
          )}
        </div>

        {/* Input de Confirmação de Senha */}
        <div className="space-y-2  flex md:block flex-col justify-center items-center">
          <div className="relative  border-secondary-foreground border rounded-full flex items-center md:px-4 px-8 mt-4  md:h-[59px]  h-[49px] w-[326px] md:w-auto">
            <input
              {...register("confirmPassword")}
              type={showConfirmPassword ? "text" : "password"}
              className="bg-transparent outline-none shadow-none text-secondary-foreground py-2  w-[460px] "
              aria-invalid={!!errors.confirmPassword}
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
              {showConfirmPassword ? <Eye /> : <EyeOff />}
            </Button>
          </div>
          {errors.confirmPassword ? (
            <p className="text-red-500 h-4 text-sm px-4">
              {errors.confirmPassword.message?.toString()}
            </p>
          ) : (
            <p className="h-4 w-2" />
          )}
        </div>
      </div>
    </>
  );
}
