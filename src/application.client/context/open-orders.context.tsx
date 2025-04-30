import { createContext, useContext, useState } from "react";

type OpenOrdersType = {
  isOpenOrders: boolean;
  setIsOpenOrders: (step: boolean) => void;
};

const OpenOrdersContext = createContext<OpenOrdersType | undefined>(undefined);

export const OpenOrdersProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpenOrders, setIsOpenOrders] = useState(false);

  return (
    <OpenOrdersContext.Provider value={{ isOpenOrders, setIsOpenOrders }}>
      {children}
    </OpenOrdersContext.Provider>
  );
};

export const useOpenOrders = () => {
  const context = useContext(OpenOrdersContext);
  if (!context) {
    throw new Error(
      "useOpenOrder deve ser usado dentro de um OpenOrdersProvider"
    );
  }
  return context;
};
