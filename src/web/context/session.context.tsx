import { createContext, useContext, useState } from "react";
type Adress = {
  logradouro: string;
  number: string;
  city: string;
  uf: string;
  country: string;
};
type User = {
  user_id: string;
  photo: string;
  name: string;
  endereco: Adress;
};
type Session = {
  session: string;
  user: User;
};
type SessionContextType = {
  session: Session | null;
  setSession: (session: Session) => void;
};

const SessionContext = createContext<SessionContextType | null>(null);

export const SessionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [session, setSession] = useState<Session | null>(null);

  return (
    <SessionContext.Provider
      value={{ session: session, setSession: setSession }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("useStep deve ser usado dentro de um StepProvider");
  }
  return context;
};
