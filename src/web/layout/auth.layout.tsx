import { ChevronLeft } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Outlet } from "react-router";
import { StepProvider, useStep } from "../context/form-steps-register.context";
export function AuthLayout() {
  return (
    <StepProvider>
      <AuthLayoutContent />
    </StepProvider>
  );
}
function AuthLayoutContent() {
  const { currentStep, setCurrentStep } = useStep();

  return (
    <section className="p-12 flex justify-center flex-col items-center space-y-12">
      <header className="border-b flex items-center w-[80%] justify-between ">
        <Button
          variant={"ghost"}
          className="hover:bg-background hover:underline border-none mb-2 z-40"
          onClick={() => {
            console.log(currentStep);
            currentStep != 0 && setCurrentStep(currentStep - 1);
          }}
        >
          <ChevronLeft className="size-7" />
          Voltar
        </Button>

        <h1 className="text-2xl text-secondary-foreground  text-center  absolute inset-x-0 z-0">
          Cadastro Cliente
        </h1>
      </header>

      <Outlet />
    </section>
  );
}
