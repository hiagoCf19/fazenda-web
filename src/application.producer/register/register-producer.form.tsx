import { useNavigate } from "react-router";
import { useStep } from "../../application.client/context/form-steps-register.context";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { StepNif } from "../../application.client/register/_components/step-0.component";
import { EmailAndPhoneStep } from "../../application.client/register/_components/step-1.component";
import { CodigoStep } from "../../application.client/register/_components/step-2.component";
import { PasswordStep } from "../../application.client/register/_components/step-3.component";

import { formatError } from "../../helpers/format-error.helper";
import { Button } from "../../shadcn/ui/button";
import { Loader } from "lucide-react";
import {
  codeSchema,
  emailPhoneSchema,
  nifSchema,
  passwordSchema,
} from "../../zod/client/register-client.schema";
import { ProducerBusinessInfoStep } from "../../common/_components/register/step-4.producer.component";
import { producerBusinessInfoSchema } from "../../zod/producer/create-producer.schema";
import { useRegisterProducer } from "../../hooks/producer.hook";
import { useSession } from "../../application.client/context/session.context";

const RegisterProducerProfileForm = () => {
  const navigate = useNavigate();
  const { setSession } = useSession();

  const {
    mutate: registerProducerMutation,
    error,
    isPending,
  } = useRegisterProducer();

  const { currentStep, setCurrentStep } = useStep();
  const [valueCode, setValueCode] = useState("");
  const [invalidCode, setInvalidCode] = useState(false);
  const stepSchemas = [
    nifSchema,
    emailPhoneSchema,
    codeSchema,
    passwordSchema,
    producerBusinessInfoSchema,
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
      //comentado para teste
      const registerData = {
        email: updatedFormData.step1.email,
        password: updatedFormData.step3.password,
        phone: updatedFormData.step1.phone,
        nif: updatedFormData.step0.nif,
        company_name: updatedFormData.step4.businessName,
        responsible_name: updatedFormData.step4.personResponsible,
        contact_phone: updatedFormData.step4.contactPhone,
        photo: "",
      };

      registerProducerMutation(registerData, {
        onSuccess: ({ access_token, user }) => {
          localStorage.setItem("access_token", access_token);
          localStorage.setItem("user", JSON.stringify(user));
          setSession({ access_token, user });
          navigate(`/register/producer/documents/${user.id}`);
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
          <ProducerBusinessInfoStep register={register} errors={errors} />
        )}

        {/* Exibe mensagens de erro */}
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
              {currentStep === 5 ? "Finalizar" : "Próximo"}
            </Button>
          )}
        </div>
      </form>
    </>
  );
};

export default RegisterProducerProfileForm;
