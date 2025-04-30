import { ChevronRight } from "lucide-react";

interface SeeAllButtonProps {
  href: string;
  label?: string;
}

export const SeeAllButton = ({
  href,
  label = "Ver todos",
}: SeeAllButtonProps) => {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 p-0 hover:bg-transparent hover:underline h-fit text-[#FE7000]"
    >
      {label}
      <ChevronRight className="ml-1 h-4 w-4 text-[#FE7000]" />
    </a>
  );
};
