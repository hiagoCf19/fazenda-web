import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { StepNif } from "./step-nif";
import { PasswordStep } from "./password";
import { NameAndPhotoStep } from "./name-photo";
import { EmailAndPhoneStep } from "./email-phone";
import { CodigoStep } from "./codigo";
import {
  codeSchema,
  emailPhoneSchema,
  nameSchema,
  nifSchema,
  passwordSchema,
} from "./zod/schema";

export default function RegisterClientForm() {
  const [step, setStep] = useState(0);
  const [valueCode, setValueCode] = useState("");
  const stepSchemas = [
    nifSchema,
    passwordSchema,
    nameSchema,
    emailPhoneSchema,
    codeSchema,
  ];
  const [formData, setFormData] = useState<any>({
    step0: {},
    step1: {},
    step2: {},
    step3: {},
    step4: {},
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    resolver: zodResolver(stepSchemas[step] as any), // Resolver baseado no passo atual
    mode: "onChange",
  });
  const handleNextStep = async (data: any) => {
    console.log(step);

    if (step === 4) {
      console.log(formData);
      console.log("otp value", valueCode);
    }

    // Atualiza o estado com os dados do passo atual
    setFormData((prevData: any) => ({
      ...prevData,
      [`step${step}`]: data,
    }));

    // Atualiza o passo para o próximo
    if (step < stepSchemas.length - 1) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleNextStep)}
      className="p-6 max-w-lg mx-auto"
    >
      {step === 0 && <StepNif register={register} errors={errors} />}
      {step === 1 && <PasswordStep register={register} errors={errors} />}
      {step === 2 && <NameAndPhotoStep register={register} errors={errors} />}
      {step === 3 && <EmailAndPhoneStep register={register} errors={errors} />}
      {step === 4 && <CodigoStep value={valueCode} setValue={setValueCode} />}

      <div className="mt-4 flex justify-between">
        <button
          type="button"
          onClick={() => step != 1 && setStep(step - 1)}
          className="px-4 py-2 bg-gray-300 text-black rounded"
        >
          Voltar
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          {step === 4 ? "Enviar" : "Próximo"}
        </button>
      </div>
    </form>
  );
}
