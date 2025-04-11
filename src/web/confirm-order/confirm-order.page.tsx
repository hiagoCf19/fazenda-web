import { useEffect, useState } from "react";

import { PaymentComponent } from "./_components/payment.component";
import { PaymentMethods } from "../../../types/payment-method";
import { DeliveryOptions } from "../../../types/delivery-options";
import { DeliveryOptionsComponent } from "./_components/delivery-options.component";
import { Button } from "../../shadcn/ui/button";
import { OrderResumeComponent } from "./_components/order-resume.component";
import { LoadingComponent } from "../../common/loading.component";
//import { useNavigate } from "react-router";

export function ConfirmOrderPage() {
  // const navigate = useNavigate();
  const [selectedDeliveryOption, setSelectedDeliveryOption] =
    useState<DeliveryOptions>({
      option: "Padrão",
      time: "Entre 2 e 5 dias úteis",
      price: "Kz 1.000,00",
    });

  const [selectedPayment, setSelectedPayment] = useState<PaymentMethods>({
    method: "Multicaixa Express",
    description: "Em até 3x sem juros",
    span: "Mastercard final 123",
  });
  const [parcelas, setParcelas] = useState("1");

  // Add loading state and progress state
  // Add loading state and progress state
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  // Effect to handle progress animation
  useEffect(() => {
    if (isLoading && progress < 100) {
      const timer = setTimeout(() => {
        setProgress((prevProgress) => {
          // Increase progress more slowly as it approaches 100%
          const increment = Math.max(1, 10 - Math.floor(prevProgress / 10));
          return Math.min(prevProgress + increment, 99);
        });
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [isLoading, progress]);
  //MOCKMOCKMOCKMOCKMOCKMOCKMOCKMOCKMOCKMOCKMOCKMOCKMOCKMOCKMOCKMOCKMOCKMOCKMOCKMOCK (REMOVER com integração)
  const items = [
    {
      id: "3",
      name: "Bacalhau",
      image: "/mock/bacalhau.png", // You'll replace this with the actual image URL
      priceKg: "Kz 180/Kg",
      priceT: "Kz 140.000/T",
    },
    {
      id: "2",
      name: "Lentilha",
      image: "/mock/lentilha.png", // You'll replace this with the actual image URL
      priceKg: "Kz 180/Kg",
      priceT: "Kz 140.000/T",
    },
    {
      id: "6",
      name: "Cebola roxa",
      image: "/mock/cebola.png", // You'll replace this with the actual image URL
      priceKg: "Kz 96/Kg",
      priceT: "Kz 90.000/T",
    },
  ];
  //MOCKMOCKMOCKMOCKMOCKMOCKMOCKMOCKMOCKMOCKMOCKMOCKMOCKMOCKMOCKMOCKMOCKMOCKMOCKMOCK

  async function sendToServer() {
    // Start loading
    setIsLoading(true);
    setProgress(0);

    console.log({
      selectedDeliveryOption,
      selectedPayment,
      parcelas,
      //carrinho{}
    });

    // Simulate server request with a delay
    try {
      // Simulate a network request
      await new Promise((resolve) => setTimeout(resolve, 3000));

      // Complete the progress
      setProgress(100);

      // Reset loading state after a short delay
      setTimeout(() => {
        setIsLoading(false);
        setProgress(0);
        // You could add navigation or success message here
      }, 500);
    } catch (error) {
      console.error("Error processing order:", error);
      setIsLoading(false);
      setProgress(0);

      // Handle error state here
    }
  }

  return (
    <>
      {isLoading && (
        <div className="fixed w-full h-screen bg-black/35  z-50">
          <LoadingComponent progress={progress} />
        </div>
      )}
      <div className="md:p-12 p-4 relative">
        {/* Progress bar at the top of the screen */}

        <header className="flex w-full justify-center items-center border-b-2 pb-4">
          <img src="/full_logo.svg" alt="" />
        </header>
        <main className="md:space-y-12 space-y-4 flex flex-col justify-center items-center md:py-12 py-4">
          <h1 className="text-secondary-foreground font-semibold md:text-3xl text-2xl">
            Finalize seu pedido
          </h1>
          <div className="md:grid grid-cols-3 w-full md:space-x-20 space-y-4 md:space-y-0">
            <DeliveryOptionsComponent
              selectedDeliveryOption={selectedDeliveryOption}
              setSelectedDeliveryOption={setSelectedDeliveryOption}
            />
            <PaymentComponent
              selectedPayment={selectedPayment}
              setSelectedPayment={setSelectedPayment}
              setParcelas={setParcelas}
            />
            <OrderResumeComponent items={items} />
          </div>
        </main>
        <footer className="flex justify-center items-center ">
          <Button
            className="rounded-full text-secondary-foreground bg-secondary text-xl md:w-[30%] w-full py-6"
            onClick={sendToServer}
            disabled={isLoading}
          >
            {isLoading ? "Processando..." : "Fazer pedido"}
          </Button>
        </footer>
      </div>
    </>
  );
}
