import { Home, SearchIcon, ShoppingCart, User } from "lucide-react";
import { Link, useLocation } from "react-router";
import { useOpenOrders } from "../../application.client/context/open-orders.context";

// SOMENTE MOBILE
const BottomNav = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const { isOpenOrders } = useOpenOrders();
  const links = [
    { to: "/", label: "Início", icon: Home },
    { to: "/search", label: "Buscar", icon: SearchIcon },
    { to: "/my-account", label: "Perfil", icon: User },
    { to: "/my-orders", label: "Pedidos", icon: ShoppingCart },
  ];

  return (
    <div className="md:hidden fixed bottom-0 px-6 bg-white h-16 w-full shadow-md flex justify-between items-center z-50">
      {links.map(({ to, label, icon: Icon }) => {
        const isActive = currentPath === to;
        const textColor =
          isActive && !isOpenOrders ? "text-primary" : "text-zinc-500";
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
    </div>
  );
};

export default BottomNav;
