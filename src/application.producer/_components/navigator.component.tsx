import { BarChart3, ClipboardList } from "lucide-react";
import { RiHome5Line } from "react-icons/ri";
import { PiReceipt } from "react-icons/pi";

export function MobileNavigator() {
  const path = window.location.pathname;

  return (
    <div className="fixed bottom-0 w-full bg-white z-10 border-t flex justify-around py-2">
      <div
        className={`flex flex-col items-center justify-center text-zinc-800  w-16 h-16 rounded-full ${
          path.includes("home") && "bg-secondary/50"
        }`}
      >
        <RiHome5Line size={20} />
        <span className="text-xs mt-1">Inicio</span>
      </div>
      <div className="flex flex-col items-center justify-center text-zinc-800  w-16 h-16 rounded-full">
        <PiReceipt size={20} />
        <span className="text-xs mt-1">Pedidos</span>
      </div>
      <div className="flex flex-col items-center justify-center text-zinc-800  w-16 h-16 rounded-full">
        <ClipboardList size={20} />
        <span className="text-xs mt-1">Cardápio</span>
      </div>
      <div className="flex flex-col items-center justify-center text-zinc-800  w-16 h-16 rounded-full">
        <BarChart3 size={20} />
        <span className="text-xs mt-1">Empresa</span>
      </div>
    </div>
  );
}
