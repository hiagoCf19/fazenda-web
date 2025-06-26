import { Minus, Plus } from "lucide-react";
import { Product } from "../../../../../types/product";
import { Button } from "../../../../shadcn/ui/button";
import { Input } from "../../../../shadcn/ui/input";
import { useState } from "react";

interface OrderCardProps {
  item: Product;
}

export function OrderCard({ item }: OrderCardProps) {
  const [quantity, setQuantity] = useState(1);
  const [inputValue, setInputValue] = useState("1");

  const increaseQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    setInputValue(String(newQuantity));
  };

  const decreaseQuantity = () => {
    const newQuantity = quantity > 1 ? quantity - 1 : 1;
    setQuantity(newQuantity);
    setInputValue(String(newQuantity));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputBlur = () => {
    const numericValue = Number(inputValue);
    if (!isNaN(numericValue) && numericValue >= 1) {
      setQuantity(numericValue);
    } else {
      // Caso o usuário deixe vazio ou insira zero, volta para 1
      setQuantity(1);
      setInputValue("1");
    }
  };

  return (
    <div className="flex items-center justify-between md:mb-0">
      <div className="flex items-center gap-2">
        <img src={item.image} alt={item.name} className="size-20 rounded-xl" />
        <div className="flex flex-col gap-1">
          <p className="text-zinc-700">{item.name}</p>
          <div>
            <p className="text-sm">{item.priceT}</p>
            <p className="md:text-lg text-sm text-zinc-900">{item.priceKg}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center border-secondary border-2 rounded-full p-1 gap-">
        <Button
          size="icon"
          variant="ghost"
          className="text-zinc-700 hover:bg-background"
          onClick={decreaseQuantity}
        >
          <Minus />
        </Button>

        <Input
          type="text"
          min={1}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          className="w-20 text-center "
        />
        <p className="text-zinc-800">kg</p>
        <Button
          size="icon"
          variant="ghost"
          className="text-zinc-700 hover:bg-background"
          onClick={increaseQuantity}
        >
          <Plus />
        </Button>
      </div>
    </div>
  );
}
