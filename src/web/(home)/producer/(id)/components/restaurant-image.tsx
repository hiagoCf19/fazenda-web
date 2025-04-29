import { ChevronLeftIcon } from "lucide-react";
import { Button } from "../../../../../shadcn/ui/button";

interface ProdutorImageProps {
  produtor: any;
}

const ProdutorImage = ({ produtor }: ProdutorImageProps) => {
  return (
    <div className="relative w-full sm:w-[60%] h-[250px] sm:h-[380px]">
      <img
        src="/mock/fazenda-web1.jpeg"
        alt={produtor?.nome ?? "fazenda esperança"}
        className="object-contain w-full h-full"
      />
      <Button
        className="absolute left-4 top-4 rounded-full bg-zinc-50 text-foreground hover:text-zinc-50 shadow-md sm:hidden"
        size="icon"
      >
        <ChevronLeftIcon />
      </Button>
    </div>
  );
};

export default ProdutorImage;
