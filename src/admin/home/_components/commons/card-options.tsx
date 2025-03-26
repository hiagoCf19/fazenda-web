import { Button } from "../../../../components/ui/button";

import { ReactNode } from "react";

interface StatusTabsProps<T extends ReactNode> {
  selectedValue: T;
  setSelectedValue: (value: T) => void;
  options: T[];
}

export function CardOptions({
  selectedValue,
  setSelectedValue,
  options,
}: StatusTabsProps<any>) {
  return (
    <div className="p-0 bg-foreground/10 rounded-t-xl">
      {options.map((option, index) => (
        <Button
          key={String(option)}
          className={`rounded-none p-6 ${index === 0 ? "rounded-tl-xl" : ""} ${
            selectedValue === option && "border-b-2 border-b-[#FE7000]"
          }`}
          onClick={() => setSelectedValue(option)}
          variant={selectedValue === option ? "default" : "ghost"}
        >
          {option as any}
        </Button>
      ))}
    </div>
  );
}
