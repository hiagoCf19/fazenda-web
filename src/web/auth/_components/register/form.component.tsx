import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PasswordStep } from "./form/_components/step-3.component";
import { NameAndPhotoStep } from "./form/_components/step-4.component";

import {
  codeSchema,
  emailPhoneSchema,
  nameSchema,
  nifSchema,
  passwordSchema,
} from "./form/zod/schema";
import { CodigoStep } from "./form/_components/step-2.component";
import { useStep } from "../../../context/form-steps-register.context";
import { Button } from "../../../../shadcn/ui/button";
import { useNavigate } from "react-router";
import { RegisterTypeEnum } from "../../register.page";
import { StepNif } from "./form/_components/step-0.component";
import { EmailAndPhoneStep } from "./form/_components/step-1.component";

interface RegisterClientFormProps {
  registerType: RegisterTypeEnum;
}
export default function RegisterClientForm({
  registerType,
}: RegisterClientFormProps) {
  const navigate = useNavigate();
  const { currentStep, setCurrentStep } = useStep();
  const [valueCode, setValueCode] = useState("");
  const [invalidCode, setInvalidCode] = useState(false);
  const stepSchemas = [
    nifSchema,
    emailPhoneSchema,
    codeSchema,
    passwordSchema,
    nameSchema,
    //TODO VALIDAR TAMBÉM O CDASTRO BUSINESS
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
    resolver: zodResolver(stepSchemas[currentStep] as any),
    mode: "onSubmit",
  });
  const handleNextStep = async (data: any) => {
    if (currentStep === 2 && valueCode.length != 4) {
      setInvalidCode(true);
      return;
    }
    if (currentStep === 4) {
      if (registerType === RegisterTypeEnum.INDIVIDUAL) {
        const individual_user = {
          nif: formData.step0.nif,
          email: formData.step1.email,
          phone: formData.step1.phone,
          code: valueCode,
          password: formData.step3.password,
          first_name: formData.step4.firstName,
          last_name: formData.step4.lastName,
          photo: "",
          register_type: registerType,
        };
        console.log("Dados  cadastro na api individual", individual_user);
      } else {
        const company_user = {
          nif: formData.step0.nif,
          email: formData.step1.email,
          phone: formData.step1.phone,
          code: valueCode,
          password: formData.step3.password,
          designation: formData.step4.activity,
          activity: formData.step4.designation,
          companyRepresentative: formData.step4.companyRepresentative,
          photo: "",
          register_type: registerType,
        };
        console.log("Dados para cadastro na api company", company_user);
      }
      //todo: implementar navegação real na integração:
      navigate({
        pathname: "/login",
      });
    }

    // Atualiza o estado com os dados do passo atual
    setFormData((prevData: any) => ({
      ...prevData,
      [`step${currentStep}`]: data,
    }));

    // Atualiza o passo para o próximo
    if (currentStep < stepSchemas.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <>
      <div className="flex gap-1 mt-8 md:mt-0">
        {stepSchemas.map((_, i) => (
          <div
            key={i}
            className={`rounded-full h-3 ${i === currentStep ? "w-7" : "w-4"} ${
              i <= currentStep ? "bg-secondary-foreground/80" : "bg-secondary"
            }`}
          />
        ))}
      </div>

      <form
        onSubmit={handleSubmit(handleNextStep)}
        className="md:p-6 p-4 md:max-w-lg"
      >
        {currentStep === 0 && <StepNif register={register} errors={errors} />}
        {currentStep === 1 && (
          <EmailAndPhoneStep
            registerType={registerType}
            register={register}
            errors={errors}
          />
        )}
        {currentStep === 2 && (
          <CodigoStep
            value={valueCode}
            setValue={setValueCode}
            invalidCode={invalidCode}
            setInvalidCode={setInvalidCode}
          />
        )}

        {currentStep === 3 && (
          <PasswordStep register={register} errors={errors} />
        )}
        {currentStep === 4 && (
          <NameAndPhotoStep
            registerType={registerType}
            register={register}
            errors={errors}
          />
        )}

        <div className="mt-4 flex justify-center items-center">
          <Button
            type="submit"
            className="bg-secondary rounded-3xl h-[48px] text-secondary-foreground w-full"
          >
            {currentStep === 4 ? "Finalizar" : "Próximo"}
          </Button>
        </div>
      </form>
    </>
  );
}
