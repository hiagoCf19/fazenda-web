import { PaymentMethods } from "../../../../types/payment-method";
import { PaymentList } from "./payment-list.component";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../shadcn/ui/select";

enum PaymentMethodsEnum {
  REFERENCIA = "Referência",
  TRANSFER = "Transferência Bancária",
  MULTI_EXPRESS = "Multicaixa Express",
}
interface PaymentComponentProps {
  selectedPayment: PaymentMethods;
  setSelectedPayment: React.Dispatch<React.SetStateAction<PaymentMethods>>;
  setParcelas: React.Dispatch<React.SetStateAction<string>>;
}
export function PaymentComponent({
  selectedPayment,
  setSelectedPayment,
  setParcelas,
}: PaymentComponentProps) {
  const paymentMethods = [
    {
      method: PaymentMethodsEnum.REFERENCIA,
      description: "Pagamento imediato",
    },
    {
      method: PaymentMethodsEnum.TRANSFER,
      description: "Até 3 dias para confirmação",
    },
    {
      method: PaymentMethodsEnum.MULTI_EXPRESS,
      description: "Em até 3x sem juros",
      span: "Mastercard final 123",
    },
  ];

  return (
    <div className="md:min-h-[486px] bg-zinc-50 shadow-lg rounded-xl p-6 space-y-6">
      <PaymentList
        list={paymentMethods}
        selectedPayment={selectedPayment}
        setSelectedPayment={setSelectedPayment}
      />
      {selectedPayment.method === PaymentMethodsEnum.MULTI_EXPRESS && (
        <Select onValueChange={setParcelas}>
          <SelectTrigger className="w-full rounded-full border-border p-4 py-8">
            <SelectValue placeholder="1x de 3.480,00" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1x de 3.480,00</SelectItem>
            <SelectItem value="2">2x de 1,740,00</SelectItem>
            <SelectItem value="3">3x de 1.160,00</SelectItem>
          </SelectContent>
        </Select>
      )}
    </div>
  );
}
