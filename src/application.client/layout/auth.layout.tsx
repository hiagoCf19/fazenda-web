import { ChevronLeft } from "lucide-react";
import { Button } from "../../shadcn/ui/button";
import { Outlet, useNavigate } from "react-router";
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
  const navigate = useNavigate();
  const path = window.location.pathname;
  return (
    <section className="md:p-12 p-4 flex justify-center flex-col items-center md:space-y-12">
      <header className="border-b w-full flex items-center md:w-[80%] md:justify-between ">
        <Button
          variant={"ghost"}
          className="hover:bg-background hover:underline border-none mb-2 z-40"
          onClick={() => {
            if (currentStep !== 0) {
              setCurrentStep(currentStep - 1);
            } else {
              navigate("/landing-access");
            }
          }}
        >
          <ChevronLeft className="size-7" />
          <p className="hidden md:block"> Voltar</p>
        </Button>

        <h1 className="text-2xl text-secondary-foreground  text-center  absolute inset-x-0 z-0">
          Cadastro {path.endsWith("producer") ? "Produtor" : "Cliente"}
        </h1>
      </header>

      <Outlet />
    </section>
  );
}
