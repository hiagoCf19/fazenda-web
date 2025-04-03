import { Progress } from "../shadcn/ui/progress";

interface LoadingComponentProps {
  progress: number;
}
export function LoadingComponent({ progress }: LoadingComponentProps) {
  return (
    <div className="flex items-center justify-center h-screen flex-col gap-4">
      <div className="bg-secondary p-6 rounded-2xl">
        <img src="/icon.png" alt="" className="w-20" />
      </div>
      <p className="text-zinc-50 font-bold text-lg">Enviando pedido</p>
      <Progress value={progress} className="w-60 " />
    </div>
  );
}
