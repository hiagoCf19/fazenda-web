import { BarChart3, ClipboardList, Home, ReceiptText } from "lucide-react";
import { Link } from "react-router";

export function MobileNavigator() {
  const path = window.location.pathname;

  return (
    <div className="md:hidden fixed bottom-0 w-full bg-white z-10 border-t flex justify-around py-2">
      <Link
        to={"/producer"}
        className={`flex flex-col items-center justify-center text-zinc-800  w-16 h-16 rounded-full ${
          path === "/producer" && "bg-secondary/50"
        }`}
      >
        <Home size={20} />
        <span className="text-xs mt-1">Inicio</span>
      </Link>
      <Link
        to={"/producer/orders"}
        className={`flex flex-col items-center justify-center text-zinc-800  w-16 h-16 rounded-full  ${
          path.includes("orders") && "bg-secondary/50"
        }`}
      >
        <ReceiptText size={20} />
        <span className="text-xs mt-1">Pedidos</span>
      </Link>
      <Link
        to="/producer/menu"
        className={`flex flex-col items-center justify-center text-zinc-800 w-16 h-16 rounded-full ${
          path.includes("menu") && "bg-secondary/50"
        }`}
      >
        <ClipboardList size={20} />
        <span className="text-xs mt-1">Cardápio</span>
      </Link>
      <Link
        to="/producer/company"
        className={`flex flex-col items-center justify-center text-zinc-800 w-16 h-16 rounded-full ${
          path.includes("company") && "bg-secondary/50"
        }`}
      >
        <BarChart3 size={20} />
        <span className="text-xs mt-1">Empresa</span>
      </Link>
    </div>
  );
}
