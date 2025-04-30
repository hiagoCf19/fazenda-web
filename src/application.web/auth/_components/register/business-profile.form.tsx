import { useState } from "react";
import {
  codeSchema,
  companySchema,
  emailPhoneSchema,
  nifSchema,
  passwordSchema,
} from "./form/zod/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProfileTypeEnum } from "../../register.page";
import { StepNif } from "./form/_components/step-0.component";
import { EmailAndPhoneStep } from "./form/_components/step-1.component";
import { CodigoStep } from "./form/_components/step-2.component";
import { PasswordStep } from "./form/_components/step-3.component";
import { Button } from "../../../../shadcn/ui/button";
import { Loader } from "lucide-react";
import { formatError } from "../../../../helpers/format-error.helper";
import { useStep } from "../../../context/form-steps-register.context";
import { useRegisterUser } from "../../../../hooks/use-register-user.hook";
import { useNavigate } from "react-router";
import { BusinessInfoStep } from "./form/_components/business-info.component";

export function RegisterBusinessProfile() {
  const navigate = useNavigate();
  const { mutate: registerUserMutation, error, isPending } = useRegisterUser();
  const { currentStep, setCurrentStep } = useStep();
  const [valueCode, setValueCode] = useState("");
  const [invalidCode, setInvalidCode] = useState(false);

  const stepSchemas = [
    nifSchema,
    emailPhoneSchema,
    codeSchema,
    passwordSchema,
    companySchema,
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
    // Valida o código no step 2
    if (currentStep === 2 && valueCode.length !== 4) {
      setInvalidCode(true);
      return;
    }
    // Atualiza o formData antes de qualquer lógica
    const updatedFormData = {
      ...formData,
      [`step${currentStep}`]: data,
    };
    setFormData(updatedFormData);

    // Verifica se é o último passo
    const isLastStep = currentStep === stepSchemas.length - 1;
    if (isLastStep) {
      console.log("Dados do formulário:", updatedFormData);
      const registerData = {
        email: updatedFormData.step1.email,
        password: updatedFormData.step3.password,
        phone: updatedFormData.step1.phone,
        nif: updatedFormData.step0.nif,
        profile_type: ProfileTypeEnum.BUSINESS,
        area_of_activity: updatedFormData.step4.activity,
        representative_name: updatedFormData.step4.companyRepresentative,
        designation: updatedFormData.step4.designation,
        photo: "",
      };

      registerUserMutation(registerData, {
        onSuccess: ({ user_id }) => {
          console.log("Usuário registrado com sucesso:", user_id);
          navigate(
            location.pathname.includes("admin") ? "/admin/login" : "/login"
          );
        },
        onError: (error: any) => {
          console.error(error);
        },
      });

      return; // Evita ir para o próximo step
    }

    // Avança para o próximo passo
    setCurrentStep(currentStep + 1);
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
          <EmailAndPhoneStep register={register} errors={errors} />
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
          <BusinessInfoStep register={register} errors={errors} />
        )}
        {error && (
          <p className="text-center py-2 text-red-500">{formatError(error)}</p>
        )}
        <div className="mt-4 flex justify-center items-center">
          {isPending ? (
            <Loader className="text-primary my-4 animate-spin size-8" />
          ) : (
            <Button
              type="submit"
              className="bg-secondary rounded-3xl h-[48px] text-secondary-foreground w-full"
            >
              {currentStep === 4 ? "Finalizar" : "Próximo"}
            </Button>
          )}
        </div>
      </form>
    </>
  );
}
