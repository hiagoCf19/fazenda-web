import { Button } from "../../../../../../components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "../../../../../../components/ui/input-otp";

interface CodigoStepProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  invalidCode: boolean;
  setInvalidCode: React.Dispatch<React.SetStateAction<boolean>>;
}
export function CodigoStep({
  value,
  setValue,
  invalidCode,
  setInvalidCode,
}: CodigoStepProps) {
  return (
    <>
      <div>
        <h2 className="text-3xl text-secondary-foreground text-center font-medium">
          Insira o código abaixo
        </h2>
        <span className="my-4 flex text-center text-zinc-700 mt-4">
          Enviamos um código para seu email e para seu <br /> telefone via sms,
          digite-o abaixo para continuar o <br /> cadastro:
        </span>
      </div>
      <div className="w-full max-w-md mx-auto flex flex-col gap-6">
        <div className="mb-4 w-full flex flex-col items-center justify-center">
          <div className="space-y-2 my-4">
            <InputOTP
              maxLength={4}
              value={value}
              onChange={(value) => {
                setValue(value);
                invalidCode && setInvalidCode(false);
              }}
            >
              <InputOTPGroup>
                <InputOTPSlot
                  index={0}
                  className={`size-16 ${invalidCode && "border-red-500"}`}
                />
              </InputOTPGroup>

              <InputOTPGroup>
                <InputOTPSlot
                  index={1}
                  className={`size-16 ${invalidCode && "border-red-500"}`}
                />
              </InputOTPGroup>
              <InputOTPGroup>
                <InputOTPSlot
                  index={2}
                  className={`size-16 ${invalidCode && "border-red-500"}`}
                />
              </InputOTPGroup>

              <InputOTPGroup>
                <InputOTPSlot
                  index={3}
                  className={`size-16 ${invalidCode && "border-red-500"}`}
                />
              </InputOTPGroup>
            </InputOTP>
          </div>
          <div className="flex items-center gap-1">
            <p className="text-secondary-foreground">Não recebeu o código ? </p>
            <Button variant={"link"} className=" p-0 text-[#FE7000]">
              Enviar novamente
            </Button>
          </div>
          {invalidCode && <span className="text-red-500">Código inválido</span>}
        </div>
      </div>
    </>
  );
}
