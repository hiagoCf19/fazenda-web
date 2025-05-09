import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../../shadcn/ui/tooltip";
import { ReactNode } from "react";

interface TooltipDemoProps {
  button: ReactNode;
  hover: string;
}
export function TooltipDemo({ button, hover }: TooltipDemoProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="border-none" asChild>
          {button}
        </TooltipTrigger>
        <TooltipContent>
          <p>{hover}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
