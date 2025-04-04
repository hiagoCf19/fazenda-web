import { Home, SearchIcon, ShoppingCart, User } from "lucide-react";
import { Link, useLocation } from "react-router";

interface BottomNavProps {
  isOpenPedidos: boolean;
  setIsOpenPedidos: (isOpen: boolean) => void;
}
const BottomNav = ({ isOpenPedidos, setIsOpenPedidos }: BottomNavProps) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const links = [
    { to: "/", label: "Início", icon: Home },
    { to: "/search", label: "Buscar", icon: SearchIcon },
    { to: "/profile", label: "Perfil", icon: User },
  ];

  return (
    <div className="md:hidden fixed bottom-0 px-6 bg-white h-16 w-full shadow-md flex justify-between items-center border-t z-50">
      {links.map(({ to, label, icon: Icon }) => {
        const isActive = currentPath === to;
        const textColor =
          isActive && !isOpenPedidos ? "text-primary" : "text-zinc-500";
        return (
          <Link
            key={to}
            to={to}
            className="flex flex-col items-center justify-center gap-0.5 hover:text-primary transition-colors duration-200"
          >
            <Icon className={textColor} size={22} />
            <span className={`text-xs font-medium ${textColor}`}>{label}</span>
          </Link>
        );
      })}
      <button
        onClick={() => setIsOpenPedidos(!isOpenPedidos)}
        className="flex flex-col items-center justify-center gap-0.5 hover:text-primary transition-colors duration-200"
      >
        <ShoppingCart
          size={22}
          className={`${isOpenPedidos ? "text-primary" : "text-zinc-500"}`}
        />
        <span
          className={`text-xs font-medium ${
            isOpenPedidos ? "text-primary" : "text-zinc-500"
          } `}
        >
          pedidos
        </span>
      </button>
    </div>
  );
};

export default BottomNav;
