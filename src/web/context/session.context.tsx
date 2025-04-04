import { createContext, useContext, useState, useEffect } from "react";
import { Session } from "../../../types/session.type";

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

  useEffect(() => {
    // Recupera os dados do localStorage ao iniciar o app
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (user && token) {
      try {
        const parsedUser = JSON.parse(user);
        setSession({ user: parsedUser, token }); // depende de como está seu tipo `Session`
      } catch (err) {
        console.error("Erro ao parsear user do localStorage", err);
      }
    }
  }, []);

  return (
    <SessionContext.Provider value={{ session, setSession }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("useSession deve ser usado dentro de um SessionProvider");
  }
  return context;
};
