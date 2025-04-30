import { ControllerRenderProps } from "react-hook-form";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../shadcn/ui/form";
import { Input } from "../../shadcn/ui/input";

interface InputPaymentMethodProps {
  field: ControllerRenderProps<any>;
  label: string;
  placeholder: string;
}
export function InputFormComponent({
  field,
  label,
  placeholder,
}: InputPaymentMethodProps) {
  return (
    <FormItem className=" relative">
      <FormLabel className="absolute bg-background -top-2 px-2 mx-2 text-secondary-foreground">
        {label}
      </FormLabel>
      <FormControl>
        <Input
          className="border  border-secondary-foreground rounded-full py-6"
          placeholder={placeholder}
          {...field}
          maxLength={19}
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  );
}
