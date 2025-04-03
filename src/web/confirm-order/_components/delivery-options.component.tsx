import { MapPin } from "lucide-react";
import { useSession } from "../../context/session.context";
import { Button } from "../../../shadcn/ui/button";
import { DeliveryOptionList } from "./delivery-option-list.component";
import { DeliveryOptions } from "../../../../types/delivery-options";

interface DeliveryOptionsComponentProps {
  selectedDeliveryOption: DeliveryOptions | null;
  setSelectedDeliveryOption: React.Dispatch<
    React.SetStateAction<DeliveryOptions>
  >;
}
export function DeliveryOptionsComponent({
  selectedDeliveryOption,
  setSelectedDeliveryOption,
}: DeliveryOptionsComponentProps) {
  const { session } = useSession();
  const user = session?.user;

  const deliveryOptionsList = [
    {
      option: "Padrão",
      time: "Entre 2 e 5 dias úteis",
      price: "Kz 1.000,00",
    },
    {
      option: "Express",
      time: "Até 36h",
      price: "Kz 3.000,00",
    },
    {
      option: "Levantar na loja",
      time: "Selecione a loja que desejar",
      price: "Grátis",
    },
  ];
  return (
    <div className="md:min-h-[486px] bg-zinc-50 shadow-lg rounded-xl p-6 space-y-6">
      {/* endereço */}
      <div className="space-y-4">
        <h3 className="font-medium text-xl text-zinc-800">
          Entregar no endereço
        </h3>
        <div className="flex items-center w-full  justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="text-zinc-50 fill-secondary size-10" />
            {session ? (
              <div className="flex flex-col">
                <p className="text-lg text-zinc-800">
                  {user?.endereco.logradouro}, {user?.endereco.number}
                </p>
                <p className="text-zinc-700">
                  {user?.endereco.city} - {user?.endereco.country}
                </p>
              </div>
            ) : (
              <p>Informe um endereço</p>
            )}
          </div>
          <Button variant={"link"} className="text-[#FE7000]">
            Trocar
          </Button>
        </div>
      </div>
      {/* opcoes */}
      <DeliveryOptionList
        selectedOption={selectedDeliveryOption}
        setSelectedOption={setSelectedDeliveryOption}
        list={deliveryOptionsList}
      />
    </div>
  );
}
