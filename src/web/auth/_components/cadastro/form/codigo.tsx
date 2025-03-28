import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "../../../../../components/ui/input-otp";

interface CodigoStepProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}
export function CodigoStep({ value, setValue }: CodigoStepProps) {
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
          <div className="space-y-2">
            <InputOTP
              maxLength={4}
              value={value}
              onChange={(value) => setValue(value)}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} className="size-16" />
              </InputOTPGroup>

              <InputOTPGroup>
                <InputOTPSlot index={1} className="size-16" />
              </InputOTPGroup>
              <InputOTPGroup>
                <InputOTPSlot index={2} className="size-16" />
              </InputOTPGroup>

              <InputOTPGroup>
                <InputOTPSlot index={3} className="size-16" />
              </InputOTPGroup>
            </InputOTP>
          </div>
          {/* Consolidated Error Display */}
          {/* {errors.pin && (
            <div className="mt-2 text-red-500 text-center">
              {errors.pin.message}
            </div>
          )} */}
        </div>
      </div>
    </>
  );
}
