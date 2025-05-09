// redirectByRole.tsx
import { Navigate } from "react-router";
import { useSession } from "./application.client/context/session.context";

export function RedirectByRole() {
  const { session } = useSession();
  const isAdmin = session?.user.role === "ADMIN";

  if (!session?.user) {
    return <Navigate to="/client" replace />;
  }

  if (session.user.profile_type === "producer" && !isAdmin) {
    return <Navigate to="/producer" replace />;
  }

  if (isAdmin) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return <Navigate to="/client" replace />;
}
