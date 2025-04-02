import { createContext, useContext, useState } from "react";

type StepContextType = {
  currentStep: number;
  setCurrentStep: (step: number) => void;
};

const StepContext = createContext<StepContextType | undefined>(undefined);

export const StepProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <StepContext.Provider value={{ currentStep, setCurrentStep }}>
      {children}
    </StepContext.Provider>
  );
};

export const useStep = () => {
  const context = useContext(StepContext);
  if (!context) {
    throw new Error("useStep deve ser usado dentro de um StepProvider");
  }
  return context;
};
