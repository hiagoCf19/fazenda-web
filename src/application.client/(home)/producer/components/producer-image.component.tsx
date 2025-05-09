import { ChevronLeftIcon } from "lucide-react";
import { Button } from "../../../../shadcn/ui/button";

interface ProdutorImageProps {
  produtor: any;
}

const ProducerImage = ({ produtor }: ProdutorImageProps) => {
  return (
    <div className="relative  w-[50%]">
      <img
        src="/mock/fazenda-web1.jpeg"
        alt={produtor?.nome}
        className="object-contain w-full h-full rounded-md"
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

export default ProducerImage;
