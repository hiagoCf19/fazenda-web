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
      image:
        "https://s3-alpha-sig.figma.com/img/85d3/2778/38617ed4ff0eed4b742baafbb974d51b?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=p1PGaK6s7N6NCimDrhJOyZ-8S9ZuEYqx7RRNWsw~5PZYGj9tgkgsutAxGTwDgw4~Pcl8ISkjennDDsKIJ9o3cJ6puvBirBWFhnydj1OlQmCJW3-ll6248oO0HdPVk-o~KFFV~36jYJ~HafiqlXRd1r~-daeQtkxPjDyx3MoDXq9s7FEHfigCWgo9vVdbK9zsjD-3olhWzZbRPDfJJXlJRGTNKete29E0PiTYZhkQksvmHa-JpFdlvKz6qmpdAdwTaK02~SKuSgsplLNMlwBrkxLOaJ395VS16P2wQocrujvFGCJsmLNjRqkx~mjhJozt7Y41s3wfH2WiCGXLXPTnfw__", // You'll replace this with the actual image URL
      priceKg: "Kz 180/Kg",
      priceT: "Kz 140.000/T",
    },
    {
      id: "2",
      name: "Lentilha",
      image:
        "https://s3-alpha-sig.figma.com/img/df2a/1de6/e6da096563c5a5f4f514c7b9dd692e32?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jEHbbphus7ng6wupEN8GIjX2q3nh8ljCdf7xqhh5ADch5DuY49fqcbaB94k3YqkArIfX9gKkluqgzpsA~KidNRxg5L8sO-uniCYvHhSkqW-4MLRdBeTCgo1tRaqDt0PDSeBUgYwAorieDRw2IIxwT62j6aPgrbT-HsKZ-9Mw0aC9WDSVEUronkpqjTdEZC29apH-mwlybXXsK2PYCHBBXFhSrmx5b6tytcn~UYmBJyX0OuQ42XtOGbippKq4eOKMJsq-oEJeiaam7IgjIkcZGThEwhLgrd5N7A~8sfsM2tzZFjkgsZVP2AhVsAtFFqNIChgWsikk8SfzL2EU-3Jkjg__", // You'll replace this with the actual image URL
      priceKg: "Kz 180/Kg",
      priceT: "Kz 140.000/T",
    },
    {
      id: "6",
      name: "Cebola roxa",
      image:
        "https://s3-alpha-sig.figma.com/img/0577/e6da/9838e6649678a2b4d1f1c45ff47a7712?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=h4UPXx-1z-YIbUmAfJNdgEBwJLRG~~GteXs1tOxG7lVyEN~iq1ObPbS3ox2fjQYKxWzsmb5AYLkQKQhOmK0F2eSDErMu6gXijkKVf3e5rscFClGW-99GY7Fx8TOFIY00jsmUlHQn8WInww8uVg7HLE9jXS5vnuynRELKXMu-ZHu6qfmTJzLPkRJxdhwR0~1OIHLNOxxROZXjc-xUBGnZEZKqxsU9BSmgBX6jPCVbT6gA90DQB~DwIYJJmTw~Oz62o2plz~Uy8xgntgQzwk3HT8r8vNpv-Xh1HS3CLHBfananoAyjixMHqw0MC7Rjh804wIRZHuuyfll3fBV9UitXJQ__", // You'll replace this with the actual image URL
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
      {" "}
      {isLoading && (
        <div className="absolute w-full h-screen bg-black/25  z-50">
          <LoadingComponent progress={progress} />
        </div>
      )}
      <div className="p-12 relative">
        {/* Progress bar at the top of the screen */}

        <header className="flex w-full justify-center items-center border-b-2 pb-4">
          <img src="/full_logo.svg" alt="" />
        </header>
        <main className="space-y-12 flex flex-col justify-center items-center py-12">
          <h1 className="text-secondary-foreground font-semibold text-3xl">
            Finalize seu pedido
          </h1>
          <div className="grid grid-cols-3 w-full space-x-20">
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
            className="rounded-full text-secondary-foreground bg-secondary text-xl w-[30%] py-6"
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
